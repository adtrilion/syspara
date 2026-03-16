'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/ui/CTASection';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

const values = [
  {
    icon: <Zap size={20} />,
    title: 'Innovation',
    description: 'We stay at the frontier of AI and technology to deliver solutions that give clients a real edge.',
  },
  {
    icon: <Heart size={20} />,
    title: 'Trust',
    description: 'We build long-term partnerships grounded in transparency, honesty, and consistent delivery.',
  },
  {
    icon: <Users size={20} />,
    title: 'Collaboration',
    description: 'Your team and ours work as one — aligned on goals, timelines, and outcomes from day one.',
  },
  {
    icon: <Award size={20} />,
    title: 'Outcomes',
    description: 'We measure success by the measurable impact we create — not just the code we ship.',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '12+', label: 'Industries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-950 py-28 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-10 blur-3xl" animate={{ x: [0, 60, 0], y: [0, 40, 0] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-10 blur-3xl" animate={{ x: [0, -50, 0], y: [0, -30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            About SysPara
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-5xl font-bold leading-tight md:text-6xl">
            We Build the <span className="gradient-text">AI Infrastructure</span> of Tomorrow
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            SysPara is a full-stack AI and digital transformation consultancy. We partner with ambitious businesses to design, build, and operate intelligent systems that drive measurable growth.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-16 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <div className="text-center rounded-2xl border border-white/10 bg-white/5 p-8">
                  <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400">
                  <Target size={22} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                <p className="text-slate-400 leading-relaxed">
                  Empower organisations with intelligent systems and scalable digital products that
                  eliminate inefficiency, unlock new revenue, and create lasting competitive advantage.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 text-purple-400">
                  <Eye size={22} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">Our Vision</h2>
                <p className="text-slate-400 leading-relaxed">
                  To become the most trusted AI-enabled technology partner for businesses worldwide —
                  known for delivering outcomes, not just outputs, at every stage of the journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-white">Our Values</h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/8 hover:border-white/20 transition-all duration-300">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-blue-400 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
