import fs from 'node:fs';
import path from 'node:path';
import Section from '@/components/Section';

function loadJSON(f){ return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', f),'utf-8')); }

export async function generateStaticParams() {
  const projects = loadJSON('projects.json');
  return projects.map(p => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }) {
  const { slug } = params;
  const projects = loadJSON('projects.json');
  const p = projects.find(x => x.slug === slug);
  if (!p) return <Section title="Not found"><p>Project not found.</p></Section>
  return (
    <main>
      <Section title={p.title} kicker={p.period}>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6">
            <p className="text-lg">{p.summary}</p>
            <ul className="mt-4 list-disc pl-5 space-y-1">
              {p.highlights?.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>
          <div className="card p-6">
            <p className="font-semibold">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.stack?.map(s => <span key={s} className="text-xs border rounded-full px-2 py-1">{s}</span>)}
            </div>
            <div className="mt-6 grid gap-2">
              {p.links?.live && <a className="btn btn-outline" target="_blank" href={p.links.live}>Live</a>}
              {p.links?.github && <a className="btn btn-primary" target="_blank" href={p.links.github}>GitHub</a>}
            </div>
            {p.collaborators?.length ? (
              <div className="mt-6">
                <p className="font-semibold">Collaborators</p>
                <ul className="text-sm text-slate-600 list-disc pl-5">
                  {p.collaborators.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </Section>
    </main>
  );
}