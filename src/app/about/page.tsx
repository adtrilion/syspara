'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import CTA from '@/components/ui/CTASection';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';

export const metadata = {
  title: 'About | SysPara',
  description:
    'Learn about SysPara — our mission, vision, values, and the team behind our AI and digital solutions.',
};

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
      <section className="bg-white py-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.08}>
                <div className="text-center rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
                  <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection delay={0}>
              <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600">
                  <Target size={22} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
                <p className="text-slate-500 leading-relaxed">
                  Empower organisations with intelligent systems and scalable digital products that
                  eliminate inefficiency, unlock new revenue, and create lasting competitive
                  advantage.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm h-full">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-50 to-cyan-50 text-purple-600">
                  <Eye size={22} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Vision</h2>
                <p className="text-slate-500 leading-relaxed">
                  To become the most trusted AI-enabled technology partner for businesses worldwide —
                  known for delivering outcomes, not just outputs, at every stage of the journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              What We Stand For
            </span>
            <h2 className="text-4xl font-bold text-slate-900">Our Values</h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
                    {v.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
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
