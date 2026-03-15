'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, BarChart3 } from 'lucide-react';

const metrics = [
  { icon: <TrendingUp size={20} />, value: '340%', label: 'Revenue Growth', color: 'from-blue-500 to-blue-700' },
  { icon: <Users size={20} />, value: '60%', label: 'Manual Work Reduced', color: 'from-purple-500 to-purple-700' },
  { icon: <Clock size={20} />, value: '10x', label: 'Faster Processing', color: 'from-cyan-500 to-cyan-700' },
  { icon: <BarChart3 size={20} />, value: '99.9%', label: 'System Uptime', color: 'from-emerald-500 to-emerald-700' },
];

export default function DashboardDemo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            Results
          </span>
          <h2 className="text-4xl font-bold text-slate-900">
            Measurable Impact, <span className="gradient-text">Every Time</span>
          </h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Our clients see real, quantifiable results within weeks of deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className={`mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br ${m.color} p-3 text-white`}>
                {m.icon}
              </div>
              <p className="text-3xl font-bold gradient-text">{m.value}</p>
              <p className="mt-1 text-sm text-slate-500">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
