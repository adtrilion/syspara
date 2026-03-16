import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';
import { rateLimit } from '@/lib/rateLimit';
import { scoreLead } from '@/lib/scoreLead';

type Answers = {
  companyType: string;
  solutionType: string;
  teamSize: string;
  automationNeeds: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  if (!rateLimit(ip, 3, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const answers: Answers = await req.json();

  if (!answers.name || !answers.email || !answers.companyType) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });

  const prompt = `You are SysPara's AI project estimator. Based on the client's answers below, generate a professional project estimate.

Client Answers:
- Company Type: ${answers.companyType}
- AI Solution Needed: ${answers.solutionType}
- Team Size: ${answers.teamSize}
- Automation Needs: ${answers.automationNeeds}
- Budget Range: ${answers.budget}

Return ONLY a valid JSON object with exactly these fields:
{
  "scope": "2-3 sentence description of the recommended project scope",
  "solution": "The specific SysPara solution recommended with brief explanation",
  "costMin": "minimum cost in USD as a number without symbols",
  "costMax": "maximum cost in USD as a number without symbols",
  "timeline": "e.g. 6–8 weeks",
  "highlights": ["key deliverable 1", "key deliverable 2", "key deliverable 3", "key deliverable 4"],
  "nextStep": "one sentence on what to do next"
}`;

  const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 600,
      temperature: 0.4,
    }),
  });

  if (!groqRes.ok) return NextResponse.json({ error: 'AI generation failed' }, { status: 500 });

  const data = await groqRes.json();
  const raw = data.choices?.[0]?.message?.content ?? '';

  let estimate;
  try {
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    estimate = JSON.parse(jsonMatch?.[0] ?? '{}');
  } catch {
    return NextResponse.json({ error: 'Failed to parse estimate' }, { status: 500 });
  }

  // Score and save to Supabase
  const message = `Estimator lead — ${answers.companyType}, ${answers.automationNeeds}, budget: ${answers.budget}`;
  const score = await scoreLead({ name: answers.name, email: answers.email, service: answers.solutionType, message, source: 'estimator' });

  await supabase.from('leads').insert({
    name: answers.name,
    email: answers.email,
    phone: answers.phone || null,
    service: answers.solutionType,
    message,
    source: 'estimator',
    score,
  });

  // Send lead alert email
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'SysPara Estimator <no-reply@syspara.in>',
      to: 'ashuja7@gmail.com',
      replyTo: answers.email,
      subject: `🎯 New Estimator Lead: ${answers.name} — ${answers.solutionType}`,
      text: [
        `🎯 NEW PROJECT ESTIMATOR LEAD`,
        ``,
        `Name:     ${answers.name}`,
        `Email:    ${answers.email}`,
        `Phone:    ${answers.phone}`,
        ``,
        `Company Type:      ${answers.companyType}`,
        `Solution Needed:   ${answers.solutionType}`,
        `Team Size:         ${answers.teamSize}`,
        `Automation Needs:  ${answers.automationNeeds}`,
        `Budget Range:      ${answers.budget}`,
        ``,
        `AI ESTIMATE GENERATED:`,
        `Scope:     ${estimate.scope}`,
        `Solution:  ${estimate.solution}`,
        `Cost:      $${estimate.costMin} – $${estimate.costMax}`,
        `Timeline:  ${estimate.timeline}`,
      ].join('\n'),
    });
  } catch {
    // silent — estimate still returned
  }

  return NextResponse.json({ estimate });
}
