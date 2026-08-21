import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, reason, message } = body;

    if (!name || !email || !reason) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.POSTMARK_API_KEY;
    if (!apiKey) {
      console.error('POSTMARK_API_KEY is not set.');
      return NextResponse.json(
        { error: 'Server configuration error.' },
        { status: 500 }
      );
    }

    const res = await fetch('https://api.postmarkapp.com/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': apiKey,
      },
      body: JSON.stringify({
        From: 'support@alygnr.ai',
        To: 'support@alygnr.ai',
        ReplyTo: email,
        Subject: `Contact form: ${reason}`,
        TextBody: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\nMessage: ${message || '(none)'}`,
        HtmlBody: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Reason:</strong> ${reason}</p>
          <p><strong>Message:</strong> ${message || '(none)'}</p>
        `,
        MessageStream: 'outbound',
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error('Postmark error:', error);
      return NextResponse.json(
        { error: 'Failed to send email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Contact route error:', err);
    return NextResponse.json(
      { error: 'Unexpected error.' },
      { status: 500 }
    );
  }
}
