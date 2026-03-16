import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

// Vercel Cron calls this every hour
// Vercel cron secret prevents unauthorized calls
export async function GET(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret');
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Fetch leads older than 1 hour that haven't been followed up yet
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { data: leads, error } = await supabase
    .from('leads')
    .select('*')
    .lt('created_at', oneHourAgo)
    .is('followed_up_at', null)
    .limit(10); // process max 10 per run to stay within Resend limits

  if (error) {
    console.error('Supabase error:', error);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }

  if (!leads || leads.length === 0) {
    return NextResponse.json({ message: 'No leads to follow up' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const apiKey = process.env.GROQ_API_KEY!;
  const results: { email: string; status: string }[] = [];

  for (const lead of leads) {
    try {
      // Generate personalised follow-up email with Groq
      const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'llama3-70b-8192',
          messages: [
            {
              role: 'user',
              content: `You are a friendly sales consultant at SysPara, an AI & automation consultancy. Write a short, warm, personalised follow-up email to a lead.

Lead details:
- Name: ${lead.name}
- Service interest: ${lead.service || 'AI & Automation'}
- Their message: ${lead.message || 'Enquired via website'}
- Source: ${lead.source || 'website'}

Write a follow-up email that:
1. Addresses them by first name
2. References their specific interest
3. Offers a free 30-minute consultation
4. Includes a clear CTA to reply or book at syspara.in/contact
5. Is warm, human, and NOT salesy or robotic
6. Is 3-4 short paragraphs max

Return ONLY the email body text, no subject line, no headers.`,
            },
          ],
          max_tokens: 400,
          temperature: 0.7,
        }),
      });

      const groqData = await groqRes.json();
      const emailBody = groqData.choices?.[0]?.message?.content ?? '';

      if (!emailBody) throw new Error('Empty AI response');

      // Send follow-up email
      await resend.emails.send({
        from: 'Adnan at SysPara <no-reply@syspara.in>',
        to: lead.email,
        replyTo: 'info@syspara.in',
        subject: `Following up — ${lead.name}`,
        text: emailBody,
      });

      // Mark as followed up
      await supabase
        .from('leads')
        .update({ followed_up_at: new Date().toISOString() })
        .eq('id', lead.id);

      results.push({ email: lead.email, status: 'sent' });
    } catch (err) {
      console.error(`Failed to follow up with ${lead.email}:`, err);
      results.push({ email: lead.email, status: 'failed' });
    }
  }

  return NextResponse.json({ processed: results.length, results });
}
