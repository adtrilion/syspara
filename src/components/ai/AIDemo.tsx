'use client';

import { motion } from 'framer-motion';
import { Bot, Sparkles, Zap, Shield } from 'lucide-react';

const features = [
  { icon: <Bot size={20} />, label: 'Autonomous AI Agents', color: 'text-blue-400' },
  { icon: <Sparkles size={20} />, label: 'Natural Language Processing', color: 'text-purple-400' },
  { icon: <Zap size={20} />, label: 'Real-Time Automation', color: 'text-cyan-400' },
  { icon: <Shield size={20} />, label: 'Enterprise-Grade Security', color: 'text-emerald-400' },
];

export default function AIDemo() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400 mb-4">
              AI in Action
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Agents That{' '}
              <span className="gradient-text">Work For You</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our AI agents handle complex workflows autonomously — from data processing and customer interactions to decision-making and reporting.
            </p>
            <div className="space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className={`${f.color} glass-dark rounded-lg p-2`}>{f.icon}</div>
                  <span className="text-slate-300 text-sm">{f.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated terminal/chat UI mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-6 font-mono text-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 text-slate-500 text-xs">syspara-agent · active</span>
            </div>
            <div className="space-y-3 text-slate-300">
              <p><span className="text-cyan-400">agent</span> <span className="text-slate-500">›</span> Analyzing customer data...</p>
              <p><span className="text-green-400">✓</span> Identified 3 high-value segments</p>
              <p><span className="text-cyan-400">agent</span> <span className="text-slate-500">›</span> Generating personalized campaigns...</p>
              <p><span className="text-green-400">✓</span> 12 campaigns queued for deployment</p>
              <p><span className="text-cyan-400">agent</span> <span className="text-slate-500">›</span> Monitoring conversion metrics...</p>
              <motion.p
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="text-purple-400"
              >
                ▋
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
