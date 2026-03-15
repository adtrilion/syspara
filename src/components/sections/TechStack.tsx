import AnimatedSection from '@/components/ui/AnimatedSection';

const stack = [
  { name: 'React', className: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
  { name: 'Next.js', className: 'text-slate-700 bg-slate-50 border-slate-200' },
  { name: 'Node.js', className: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { name: 'Python', className: 'text-blue-600 bg-blue-50 border-blue-200' },
  { name: 'TensorFlow', className: 'text-orange-600 bg-orange-50 border-orange-200' },
  { name: 'AWS', className: 'text-yellow-700 bg-yellow-50 border-yellow-200' },
  { name: 'Docker', className: 'text-sky-600 bg-sky-50 border-sky-200' },
  { name: 'PostgreSQL', className: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { name: 'TypeScript', className: 'text-blue-700 bg-blue-50 border-blue-200' },
  { name: 'React Native', className: 'text-cyan-700 bg-cyan-50 border-cyan-200' },
  { name: 'Kubernetes', className: 'text-violet-600 bg-violet-50 border-violet-200' },
  { name: 'OpenAI', className: 'text-slate-700 bg-slate-50 border-slate-200' },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Technologies We Use</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Best-in-class tools and frameworks to build reliable, scalable solutions.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 text-center">
            {stack.map((tech) => (
              <div
                key={tech.name}
                className={`rounded-xl border px-4 py-4 text-sm font-semibold shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${tech.className}`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
