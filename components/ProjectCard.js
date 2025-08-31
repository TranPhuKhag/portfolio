'use client';
import { motion } from 'framer-motion';

export default function ProjectCard({ p }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="card p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-display text-2xl text-awGold">{p.title}</h3>
        <p className="mt-2 text-awGold/85">{p.summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.stack?.slice(0, 6).map((s) => (
            <span key={s} className="text-xs border border-awGold/40 text-awGold/90 rounded-full px-2 py-1">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        {p.links?.live && (
          <a className="btn btn-outline" href={p.links.live} target="_blank">Visit</a>
        )}
        {p.links?.github && (
          <a className="btn btn-primary" href={p.links.github} target="_blank">Code</a>
        )}
      </div>
    </motion.div>
  );
}