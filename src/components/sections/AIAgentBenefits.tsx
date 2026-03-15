const benefits = [
  { title: '24/7 Automation', desc: 'Agents work around the clock without breaks, sick days, or overtime costs.' },
  { title: 'Reduced Operational Costs', desc: 'Replace high-volume manual tasks with AI, cutting operational overhead significantly.' },
  { title: 'Improved Efficiency', desc: 'Complete multi-step workflows in seconds that would take humans hours to finish.' },
  { title: 'Consistent Accuracy', desc: 'Eliminate human error from repetitive processes with deterministic AI execution.' },
  { title: 'Infinite Scalability', desc: 'Handle 10 or 10,000 tasks simultaneously without adding headcount.' },
  { title: 'Faster Time-to-Insight', desc: 'Agents surface data, reports, and recommendations the moment they are needed.' },
];

export default function AIAgentBenefits() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI Agents</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
