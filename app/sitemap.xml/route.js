export async function GET() {
  const pages = ['/', '/projects', '/about', '/contact'].map(p => `<url><loc>https://khang.dev${p}</loc></url>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}