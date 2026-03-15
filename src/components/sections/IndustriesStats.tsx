import AnimatedSection from '@/components/ui/AnimatedSection';

const stats = [
  { value: '8+', label: 'Industries Served' },
  { value: '60%', label: 'Avg. Cost Reduction' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'AI System Uptime' },
];

export default function IndustriesStats() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
                <p className="text-4xl font-bold gradient-text">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
