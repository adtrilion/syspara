'use client';

import { motion } from 'framer-motion';
import { Brain, Cpu, LineChart, Zap } from 'lucide-react';

const capabilities = [
  {
    icon: <Brain size={28} />,
    title: 'Intelligent Automation',
    desc: 'Replace manual workflows with AI-driven processes that learn and adapt over time.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: <LineChart size={28} />,
    title: 'Predictive Insights',
    desc: 'Turn raw data into forecasts that guide smarter, faster business decisions.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Custom AI Models',
    desc: 'Purpose-built models trained on your data for maximum accuracy and relevance.',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: <Zap size={28} />,
    title: 'Real-Time Processing',
    desc: 'AI pipelines that process and respond to data instantly at scale.',
    color: 'from-violet-500 to-violet-700',
  },
];

export default function AIInnovation() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 opacity-10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 opacity-10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-4">
            AI Capabilities
          </span>
          <h2 className="text-4xl font-bold text-white mb-4">
            AI Innovation at <span className="gradient-text">SysPara</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We build AI systems that automate workflows, improve decision-making, and enhance digital experiences across every layer of your business.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass-dark rounded-2xl p-6 group"
            >
              <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white`}>
                {item.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
