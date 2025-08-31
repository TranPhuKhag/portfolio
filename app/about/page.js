import fs from 'node:fs';
import path from 'node:path';
import Section from '@/components/Section';

function loadJSON(f){ return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', f),'utf-8')); }

export const metadata = { title: 'About — Tran Phu Khang' };

export default function AboutPage() {
  const profile = loadJSON('profile.json');
  return (
    <main>
      <Section title="About Me" kicker="Who I am">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6">
            <p className="text-awGold/90">{profile.about}</p>
          </div>
          <div className="card p-6">
            <p className="font-semibold text-awGold">Core Skills</p>
            <ul className="mt-3 text-sm text-awGold/85 space-y-1">
              {profile.skills.languages.map(s => <li key={s}>• {s}</li>)}
              {profile.skills.databases.map(s => <li key={s}>• {s}</li>)}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}