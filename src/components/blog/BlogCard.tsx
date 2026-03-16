'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  image?: string;
};

export default function BlogCard({ title, excerpt, slug, date, category, readTime, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 transition-all duration-300 overflow-hidden"
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>
      )}
      <div className="flex flex-col flex-1 p-6">
        <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4 self-start">
          {category}
        </span>
        <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-sm text-slate-400 mb-5 flex-1 leading-relaxed">{excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
          <span className="text-xs text-slate-500">{date} · {readTime}</span>
          <Link href={`/blog/${slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
            Read More <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
