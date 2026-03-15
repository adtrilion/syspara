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
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
    >
      <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 p-3 text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
