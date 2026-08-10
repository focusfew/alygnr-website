import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const { name, email, reason, message } = (body ?? {}) as {
    name?: unknown;
    email?: unknown;
    reason?: unknown;
    message?: unknown;
  };

  // Server-side validation: name and email required + non-empty, valid email.
  if (
    typeof name !== 'string' ||
    !name.trim() ||
    typeof email !== 'string' ||
    !email.trim() ||
    !emailRegex.test(email.trim())
  ) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
  }

  const apiKey = process.env.POSTMARK_API_KEY;
  if (!apiKey) {
    console.warn('POSTMARK_API_KEY is not set; contact form email was not sent.');
    return NextResponse.json({ error: 'Mail service not configured' }, { status: 500 });
  }

  const reasonText = typeof reason === 'string' ? reason : '';
  const messageText = typeof message === 'string' ? message : '';

  try {
    const res = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': apiKey,
      },
      body: JSON.stringify({
        From: 'ALYGNR Contact <support@alygnr.ai>',
        To: 'support@alygnr.ai',
        Subject: `Contact form: ${reasonText}`,
        TextBody: `Name: ${name}\nEmail: ${email}\nReason: ${reasonText}\nMessage: ${messageText}`,
        MessageStream: 'outbound',
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => '');
      console.error('Postmark send failed:', res.status, detail);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }
  } catch (err) {
    console.error('Postmark request error:', err);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
