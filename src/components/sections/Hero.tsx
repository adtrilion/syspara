'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600 opacity-20 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-20 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-500 opacity-10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          AI-Powered Digital Solutions
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-bold leading-tight md:text-7xl"
        >
          Build Smarter with{' '}
          <span className="gradient-text">AI & Automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          SysPara builds websites, mobile apps, cloud infrastructure, and AI automation systems that help businesses grow faster and operate smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact#contact-form"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 font-semibold text-sm text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            Get Free Consultation
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-sm text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Delivered' },
            { value: '12+', label: 'Industries Served' },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-2">
              {i > 0 && <span className="h-4 w-px bg-slate-700" />}
              <span className="font-bold text-white">{stat.value}</span>
              <span className="text-slate-500">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-500"
        >
          {['React', 'Node.js', 'TensorFlow', 'AWS', 'Azure', 'OpenAI'].map((tech) => (
            <span key={tech} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
