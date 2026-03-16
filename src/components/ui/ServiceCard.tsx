'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300"
    >
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-3 text-blue-400 group-hover:from-blue-600/30 group-hover:to-purple-600/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
