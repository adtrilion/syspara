const stats = [
  { value: '8+', label: 'Industries Served' },
  { value: '60%', label: 'Avg. Cost Reduction' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'AI System Uptime' },
];

export default function IndustriesStats() {
  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold text-blue-600">{s.value}</p>
            <p className="text-sm text-slate-600 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
