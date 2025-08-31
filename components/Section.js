'use client';
import { motion } from 'framer-motion';

export default function Section({ id, title, kicker, children }) {
  return (
    <section id={id} className="section">
      <div className="container-narrow">
        {kicker && <p className="kicker">{kicker}</p>}
        {title && <h2 className="section-title mt-1">{title}</h2>}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}