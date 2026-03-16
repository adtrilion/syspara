import AnimatedSection from '@/components/ui/AnimatedSection';

const stats = [
  { value: '8+', label: 'Industries Served' },
  { value: '60%', label: 'Avg. Cost Reduction' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'AI System Uptime' },
];

export default function IndustriesStats() {
  return (
    <section className="py-16 bg-slate-900 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <p className="text-4xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-slate-400 mt-1">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
