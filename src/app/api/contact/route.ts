import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'SysPara Website <no-reply@syspara.in>',
      to: 'ashuja7@gmail.com',
      replyTo: email,
      subject: subject || `Enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Mail error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
