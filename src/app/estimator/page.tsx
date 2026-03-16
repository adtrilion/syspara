import ProjectEstimator from '@/components/ai/ProjectEstimator';

export const metadata = {
  title: 'AI Project Estimator | SysPara',
  description: 'Get an instant AI-generated estimate for your project — scope, cost, and timeline tailored to your business in under 2 minutes.',
};

export default function EstimatorPage() {
  return (
    <>
      <section className="relative py-24 text-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-600 opacity-15 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-purple-600 opacity-15 blur-3xl rounded-full" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-400 mb-6">
            Free — No Commitment
          </span>
          <h1 className="text-5xl font-bold text-white mb-5 md:text-6xl">
            Get Your <span className="gradient-text">AI Project Estimate</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Answer 5 quick questions and our AI will generate a personalised project scope, cost estimate, and timeline for your business — in under 2 minutes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span>✓ Instant results</span>
            <span>✓ Tailored to your business</span>
            <span>✓ No obligation</span>
          </div>
        </div>
      </section>
      <ProjectEstimator />
    </>
  );
}
