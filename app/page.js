import fs from 'node:fs';
import path from 'node:path';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

function loadJSON(f){ return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', f),'utf-8')); }

export default function Home() {
  const profile = loadJSON('profile.json');
  const projects = loadJSON('projects.json');
  return (
    <main>
      <Hero />

      <Section id="about" title="Crafting Reliable Services" kicker="About">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 card p-6">
            <p className="text-awGold/90">{profile.about}</p>
            <ul className="mt-6 text-sm text-awGold/80 grid sm:grid-cols-2 gap-2">
              <li><b className="text-awGold">Location:</b> {profile.location}</li>
              <li><b className="text-awGold">Email:</b> <a className="underline" href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><b className="text-awGold">Phone:</b> {profile.phone}</li>
              <li><b className="text-awGold">GitHub:</b> <a className="underline" href={profile.github} target="_blank">/TranPhuKhag</a></li>
            </ul>
          </div>
          <div className="card p-6">
            <p className="font-semibold text-awGold">Education</p>
            <p className="text-sm text-awGold/85 mt-2">{profile.education.school}</p>
            <p className="text-sm text-awGold/85">GPA: {profile.education.gpa}</p>
            <p className="text-sm text-awGold/85">Expected Graduation: {profile.education.expected}</p>
          </div>
        </div>
      </Section>

      <Section id="projects" title="Selected Works" kicker="Case Studies">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>
    </main>
  );
}