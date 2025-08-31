import { NextResponse } from 'next/server';

/**
 * Minimal serverless endpoint. To use Brevo (Sendinblue), provide BREVO_API_KEY and CONTACT_RECIPIENT.
 * We avoid importing the brevo SDK to keep it light; call REST API instead.
 */
export async function POST(req) {
  try {
    const { name, email, message } = await req.json();
    // Guard
    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: 'Missing fields' }, { status: 400 });
    }
    // If no API key, just simulate success to keep dev flow smooth
    if (!process.env.BREVO_API_KEY || !process.env.CONTACT_RECIPIENT) {
      return NextResponse.json({ ok: true, simulated: true });
    }
    const payload = {
      sender: { email: process.env.CONTACT_RECIPIENT, name: 'Portfolio Form' },
      to: [{ email: process.env.CONTACT_RECIPIENT }],
      subject: `New message from ${name}`,
      htmlContent: `<p>From: ${name} (${email})</p><p>${message}</p>`
    };
    const res = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': process.env.BREVO_API_KEY },
      body: JSON.stringify(payload),
      cache: 'no-store'
    });
    const data = await res.json();
    if (res.ok) return NextResponse.json({ ok: true, data });
    return NextResponse.json({ ok: false, data }, { status: 500 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: e?.message || 'Unknown error' }, { status: 500 });
  }
}