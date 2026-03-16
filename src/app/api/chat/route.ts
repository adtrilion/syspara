import { NextRequest, NextResponse } from 'next/server';
import { SITE_KNOWLEDGE } from '@/data/siteKnowledge';
import { rateLimit } from '@/lib/rateLimit';

type Message = { role: 'user' | 'assistant'; content: string };

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  if (!rateLimit(ip, 30, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const body = await req.json();
  const messages: Message[] = body.messages;
  const systemPrompt: string = body.systemPrompt || SITE_KNOWLEDGE;

  if (!messages?.length) {
    return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
  }

  // Basic abuse prevention
  if (messages.length > 20) {
    return NextResponse.json({ error: 'Too many messages' }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
  }

  let response: Response;
  try {
    response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages.slice(-10),
      ],
      max_tokens: 400,
      temperature: 0.5,
    }),
  });
  } catch (e) {
    console.error('Groq fetch failed:', e);
    return NextResponse.json({ error: 'Network error reaching Groq' }, { status: 502 });
  }

  if (!response.ok) {
    const err = await response.text();
    console.error('Groq API error:', response.status, err);
    return NextResponse.json({ error: err }, { status: response.status });
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content ?? "I'm having trouble responding right now. Please try again or contact us at info@syspara.in.";

  return NextResponse.json({ reply });
}
