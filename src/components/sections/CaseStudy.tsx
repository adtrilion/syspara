import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { TrendingUp, Clock, Star, Users } from 'lucide-react';

const results = [
  { icon: <TrendingUp size={16} />, stat: '70%', label: 'reduction in support workload' },
  { icon: <Clock size={16} />, stat: '30s', label: 'avg. response time (down from 4 hrs)' },
  { icon: <Star size={16} />, stat: '40%', label: 'improvement in satisfaction scores' },
  { icon: <Users size={16} />, stat: '24/7', label: 'automated customer responses' },
];

export default function CaseStudy() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection>
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm overflow-hidden relative">
            {/* Accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

            <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              Case Study
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              AI Customer Support System
            </h2>
            <p className="text-slate-500 leading-relaxed mb-3">
              A growing e-commerce company needed to handle thousands of support requests daily
              without scaling their headcount. Manual triage was creating 4-hour response delays
              and rising customer churn.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              SysPara built an AI-powered support system that automated responses, triaged complex
              issues to human agents, and integrated directly with their existing helpdesk platform
              — going live in under 6 weeks.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-10">
              {results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center"
                >
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 text-blue-600">
                    {r.icon}
                  </div>
                  <p className="text-2xl font-bold gradient-text">{r.stat}</p>
                  <p className="mt-1 text-xs text-slate-500 leading-snug">{r.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
            >
              Start Your Project
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
