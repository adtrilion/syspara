import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  const secret = req.headers.get('x-admin-secret');
  if (secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const [leadsRes, convsRes] = await Promise.all([
    supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100),
    supabase
      .from('conversations')
      .select('id, session_id, created_at, message_count, lead_captured, lead_email, last_message_at')
      .order('created_at', { ascending: false })
      .limit(100),
  ]);

  return NextResponse.json({
    leads: leadsRes.data ?? [],
    conversations: convsRes.data ?? [],
  });
}
