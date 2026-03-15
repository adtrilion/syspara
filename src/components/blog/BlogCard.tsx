'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
};

export default function BlogCard({ title, excerpt, slug, date, category, readTime }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all duration-300"
    >
      <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4 self-start">
        {category}
      </span>
      <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-sm text-slate-500 mb-5 flex-1 leading-relaxed">{excerpt}</p>
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <span className="text-xs text-slate-400">{date} · {readTime}</span>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
        >
          Read More <ArrowUpRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
