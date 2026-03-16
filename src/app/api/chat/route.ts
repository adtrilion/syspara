import { NextRequest, NextResponse } from 'next/server';
import { SITE_KNOWLEDGE } from '@/data/siteKnowledge';

type Message = { role: 'user' | 'assistant'; content: string };

export async function POST(req: NextRequest) {
  const { messages } = (await req.json()) as { messages: Message[] };

  if (!messages?.length) {
    return NextResponse.json({ error: 'No messages provided' }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'GROQ_API_KEY not configured' }, { status: 500 });
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama3-70b-8192',
      messages: [
        { role: 'system', content: SITE_KNOWLEDGE },
        ...messages.slice(-10), // keep last 10 messages for context window
      ],
      max_tokens: 400,
      temperature: 0.5,
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    console.error('Groq API error:', response.status, err);
    return NextResponse.json({ error: err }, { status: response.status });
  }

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content ?? "I'm having trouble responding right now. Please try again or contact us at info@syspara.in.";

  return NextResponse.json({ reply });
}
