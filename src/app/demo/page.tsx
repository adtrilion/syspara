import AIDemo from '@/components/ai/AIDemo';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'AI Demo | SysPara',
  description: 'Experience how SysPara AI agents automate business tasks, answer questions, and assist teams in real time.',
};

const prompts = [
  'How can AI automate customer support?',
  'What are AI agents used for in business?',
  'How can companies reduce costs with AI?',
  'Give examples of AI automation workflows.',
  'How does SysPara build custom AI models?',
  'What industries benefit most from AI agents?',
];

export default function DemoPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600 opacity-20 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-600 opacity-20 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <AnimatedSection>
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-400 mb-6">
              Live Demo
            </span>
            <h1 className="text-5xl font-bold text-white mb-6">
              Try Our <span className="gradient-text">AI Assistant</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Experience how AI agents can automate business tasks, answer questions, and assist teams in real time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <AIDemo />

      {/* Example Prompts */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
              Try These
            </span>
            <h2 className="text-3xl font-bold text-slate-900">Example Prompts</h2>
            <p className="mt-3 text-slate-500">Use these to explore what our AI agents can do for your business.</p>
          </AnimatedSection>
          <div className="grid gap-3 sm:grid-cols-2">
            {prompts.map((prompt, i) => (
              <AnimatedSection key={prompt} delay={i * 0.07}>
                <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm text-slate-700 shadow-sm hover:border-blue-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                  <span className="mr-2 text-blue-500">→</span>
                  {prompt}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-4">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Build AI Solutions for <span className="gradient-text">Your Business</span>
          </h2>
          <p className="text-slate-500 mb-8 max-w-xl mx-auto">
            SysPara designs AI automation systems and intelligent tools for modern businesses across every industry.
          </p>
          <Link href="/contact">
            <Button>Request AI Consultation</Button>
          </Link>
        </AnimatedSection>
      </section>
    </main>
  );
}
