'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Roundel from './Roundel';

export default function Hero() {
  return (
    <section className="pt-24">
      <div className="container-narrow grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
        <div>
          <div className="flex items-center gap-4 text-awGold/80">
            <span className="rule" /> <span>Portfolio 2024–2025</span>
          </div>
          <h1 className="h1-aw mt-2 leading-[0.9]">
            <span className="text-gold">Tran Phu</span> <span className="outline-text">Khang</span>
          </h1>
          <p className="mt-6 text-lg text-awGold/85">
            Backend / ABAP Developer — Spring Boot, Microservices, Kafka, Redis, Docker.
          </p>
          <div className="mt-8 flex gap-3">
            <Link href="/projects" className="btn btn-primary">Discover Projects</Link>
            <a href="mailto:trangkhang0990@gmail.com" className="btn btn-outline">Contact</a>
          </div>
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex items-center justify-center"
        >
          <Roundel text="Best of the Work • Microservices • Spring Boot •" size={160} />
        </motion.div>
      </div>
    </section>
  );
}