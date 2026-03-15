'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AIAgentsHero() {
  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-blue-600 opacity-15 blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-purple-600 opacity-15 blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          Autonomous AI Agents
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-tight md:text-6xl"
        >
          Autonomous AI Agents{' '}
          <span className="gradient-text">for Business</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          SysPara designs intelligent AI agents that automate workflows, assist teams, and execute complex tasks across your business systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-3 font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200"
          >
            Deploy Your Agent
          </Link>
          <Link
            href="/ai-solutions"
            className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            View AI Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
