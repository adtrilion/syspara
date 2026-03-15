'use client';

import { motion } from 'framer-motion';

type IndustryCardProps = {
  title: string;
  description: string;
  icon?: string;
};

export default function IndustryCard({ title, description, icon }: IndustryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
    >
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 rounded-full" />
    </motion.div>
  );
}
