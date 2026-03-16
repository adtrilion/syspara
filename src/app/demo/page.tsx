import AIPlayground from '@/components/ai/AIPlayground';
import CTA from '@/components/ui/CTASection';

export const metadata = {
  title: 'AI Playground | SysPara',
  description: 'Interact with SysPara AI agents live. Experience how AI can automate workflows, answer business questions, and drive growth.',
};

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
            Interactive Playground
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 md:text-6xl">
            Try Our <span className="gradient-text">AI Agents</span> Live
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Select a model, pick a prompt, and experience how SysPara AI agents think, reason, and respond — no signup required.
          </p>
        </div>
      </section>

      <AIPlayground />

      <CTA />
    </>
  );
}
