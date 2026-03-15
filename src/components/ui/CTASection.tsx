'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-slate-950 p-12 text-center text-white"
      >
        {/* Background orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 opacity-20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 opacity-20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-6">
            Get Started Today
          </span>
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to Transform Your Business{' '}
            <span className="gradient-text">with AI?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Partner with SysPara to launch your AI journey with proven strategy, automation, and measurable revenue growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-shadow cursor-pointer"
              >
                Book Free Consultation
              </motion.span>
            </Link>
            <Link href="/portfolio">
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="inline-block rounded-xl border border-white/20 px-8 py-3 font-semibold text-white hover:bg-white/10 transition cursor-pointer"
              >
                View Our Work
              </motion.span>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
