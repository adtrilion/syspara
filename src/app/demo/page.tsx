import AIPlayground from '@/components/ai/AIPlayground';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'AI Demo | SysPara',
  description: 'Try SysPara AI agents live. Ask real business questions and see how AI can automate workflows, cut costs, and drive growth for your company.',
};

const WORKFLOW_STEPS = [
  { step: '01', title: 'You describe your challenge', desc: 'Tell the AI about your business problem — in plain English, no technical knowledge needed.' },
  { step: '02', title: 'AI analyses and responds', desc: 'The AI draws on SysPara\'s full knowledge base to give you a specific, actionable answer.' },
  { step: '03', title: 'You get a tailored recommendation', desc: 'Every response is specific to your industry, team size, and business context.' },
  { step: '04', title: 'Book a consultation', desc: 'When you\'re ready, connect with our team to turn the recommendation into a real project.' },
];

const STATS = [
  { value: '< 2s', label: 'Average response time' },
  { value: '70B', label: 'Parameter AI model' },
  { value: '12+', label: 'Industries covered' },
  { value: 'Free', label: 'No signup required' },
];

export default function DemoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600 opacity-15 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-600 opacity-15 blur-3xl rounded-full" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm text-cyan-400 mb-6">
            Live AI Demo — No Signup Required
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 md:text-6xl">
            Ask Our AI <span className="gradient-text">Real Business Questions</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            This is the same AI technology SysPara deploys for clients. Pick your industry, ask a question, and see exactly how it thinks.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 py-4 px-3">
                <p className="text-2xl font-bold gradient-text">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playground */}
      <AIPlayground />

      {/* How it works */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-purple-900/30 border border-purple-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">
              How It Works
            </span>
            <h2 className="text-4xl font-bold text-white">From question to action in minutes</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">This demo shows you exactly what SysPara deploys for real clients — the same AI, the same knowledge, the same speed.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((w, i) => (
              <AnimatedSection key={w.step} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 h-full">
                  <span className="text-4xl font-bold text-white/10 absolute top-4 right-4">{w.step}</span>
                  <p className="text-sm font-semibold text-white mb-2">{w.title}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{w.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 p-12 text-center">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600 opacity-20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-600 opacity-20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-6">
                  Ready to deploy this for your business?
                </span>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Turn this demo into <span className="gradient-text">your competitive advantage</span>
                </h2>
                <p className="text-slate-400 max-w-xl mx-auto mb-8">
                  Everything you just experienced can be customised, branded, and deployed for your business — connected to your CRM, your data, and your workflows.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/estimator"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                  >
                    Get Your Project Estimate <ArrowRight size={16} />
                  </Link>
                  <Link
                    href="/contact#contact-form"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3 font-semibold text-white hover:bg-white/10 transition-all duration-200"
                  >
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
