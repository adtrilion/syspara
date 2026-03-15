'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  title: string;
  tech: string;
  description: string;
  image: string;
};

export default function ProjectCard({ title, tech, description, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <div className="absolute top-3 right-3 rounded-full bg-white/20 backdrop-blur-sm p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={14} className="text-white" />
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs font-medium text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded-full">{tech}</p>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
