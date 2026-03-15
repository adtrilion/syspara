import AnimatedSection from '@/components/ui/AnimatedSection';

export default function PortfolioHero() {
  return (
    <section className="relative bg-slate-950 py-28 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-600 opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-10 blur-3xl" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <AnimatedSection>
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-300 mb-6">
            Our Work
          </span>
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            Projects &amp; <span className="gradient-text">Case Studies</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A selection of solutions we&apos;ve shipped for businesses across industries — from AI
            automation to full-stack platforms.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
