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
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
    >
      {icon && <div className="mb-3 text-2xl">{icon}</div>}
      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
      <div className="mt-4 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full" />
    </motion.div>
  );
}
