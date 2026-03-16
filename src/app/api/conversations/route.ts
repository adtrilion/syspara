import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { rateLimit } from '@/lib/rateLimit';

type ConversationMessage = { role: 'bot' | 'user'; text: string };

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for') ?? 'unknown';
  if (!rateLimit(ip, 60, 60_000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
  }

  const { sessionId, messages, leadCaptured, leadEmail } = await req.json() as {
    sessionId: string;
    messages: ConversationMessage[];
    leadCaptured: boolean;
    leadEmail?: string;
  };

  if (!sessionId || !messages?.length) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // Upsert — update if session exists, insert if new
  const { error } = await supabase.from('conversations').upsert(
    {
      session_id: sessionId,
      messages,
      lead_captured: leadCaptured,
      lead_email: leadEmail || null,
      message_count: messages.length,
      last_message_at: new Date().toISOString(),
    },
    { onConflict: 'session_id' },
  );

  if (error) {
    console.error('Conversation log error:', error);
    return NextResponse.json({ error: 'Failed to log' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
