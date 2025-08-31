import fs from 'node:fs';
import path from 'node:path';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';

function loadJSON(f){ return JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', f),'utf-8')); }

export const metadata = { title: 'Projects — Tran Phu Khang' };

export default function ProjectsPage() {
  const projects = loadJSON('projects.json');
  return (
    <main>
      <Section title="All Projects" kicker="Index">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </Section>
    </main>
  );
}