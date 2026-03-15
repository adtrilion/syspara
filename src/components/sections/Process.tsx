import AnimatedSection from '@/components/ui/AnimatedSection';

const steps = [
  { step: '01', label: 'Discovery', desc: 'Understand your business goals, challenges, and technical requirements.' },
  { step: '02', label: 'Strategy', desc: 'Define the roadmap, architecture, and success KPIs for your project.' },
  { step: '03', label: 'Development', desc: 'Build fast, scalable solutions using modern technologies and best practices.' },
  { step: '04', label: 'Testing', desc: 'Rigorous QA, performance testing, and security reviews before launch.' },
  { step: '05', label: 'Launch', desc: 'Deploy securely with full operational readiness and monitoring in place.' },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            How We Work
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Our Development Process</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A proven 5-step framework that takes your idea from concept to production.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5">
            <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-blue-200 via-purple-200 to-cyan-200 md:block" />
            {steps.map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
