'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const submit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(form)),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await res.json();
      setStatus(data.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };
  return (
    <form onSubmit={submit} className="mt-6 grid gap-3 max-w-lg">
      <input name="name" required placeholder="Your name" className="border border-white/10 bg-black/30  text-awGold rounded-full px-4 py-2" />
      <input name="email" required type="email" placeholder="Your email" className="border border-white/10 bg-black/30  text-awGold rounded-full px-4 py-2" />
      <textarea name="message" rows={5} required placeholder="Your message" className="border border-white/10 bg-black/30  text-awGold rounded-2xl px-4 py-2" />
      <button className="btn btn-primary w-fit" disabled={status==='loading'}>
        {status==='loading' ? 'Sending...' : 'Send'}
      </button>
      {status==='sent' && <p className="text-green-400">Thanks! I will reply soon.</p>}
      {status==='error' && <p className="text-red-400">Something went wrong. Try again later.</p>}
    </form>
  );
}