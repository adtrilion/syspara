'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type PortfolioCardProps = {
  title: string;
  tech: string;
  description: string;
};

export default function PortfolioCard({ title, tech, description }: PortfolioCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
    >
      <div className="relative h-44 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="absolute top-4 right-4 rounded-full bg-white/20 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-full">{tech}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
}
