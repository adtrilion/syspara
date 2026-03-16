import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const WHATSAPP_NUMBER = '+971544318822';

async function sendWhatsApp(message: string) {
  const token = process.env.WHATSAPP_TOKEN;
  const phoneId = process.env.WHATSAPP_PHONE_ID;
  if (!token || !phoneId) return; // skip if not configured

  await fetch(`https://graph.facebook.com/v19.0/${phoneId}/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      messaging_product: 'whatsapp',
      to: WHATSAPP_NUMBER.replace('+', ''),
      type: 'text',
      text: { body: message },
    }),
  }).catch(() => {}); // silent — email is the primary alert
}

export async function POST(req: NextRequest) {
  const { name, email, phone, company, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const emailBody = [
    `🔥 NEW LEAD — Agent SysPara`,
    ``,
    `Name:    ${name}`,
    `Email:   ${email}`,
    `Phone:   ${phone || 'Not provided'}`,
    `Company: ${company || 'Not provided'}`,
    `Service: ${service || 'General'}`,
    ``,
    `Message:`,
    message,
  ].join('\n');

  const whatsappAlert = `🔥 New SysPara Lead!\nName: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service || 'General'}\n\n${message}`;

  try {
    await Promise.all([
      resend.emails.send({
        from: 'SysPara Leads <no-reply@syspara.in>',
        to: 'ashuja7@gmail.com',
        replyTo: email,
        subject: `🔥 New Lead: ${name} — ${service || 'General'}`,
        text: emailBody,
      }),
      sendWhatsApp(whatsappAlert),
    ]);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Mail error';
    return NextResponse.json({ error: msg }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
