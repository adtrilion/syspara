const useCases = [
  { title: 'Automated Customer Support', desc: 'AI agents respond to customer queries instantly, resolve issues, and escalate edge cases — reducing support costs by up to 60%.' },
  { title: 'Sales Lead Qualification', desc: 'Agents evaluate inbound leads, score them against your ICP, and prioritize the highest-value prospects for your sales team.' },
  { title: 'Workflow Automation', desc: 'Automate multi-step business processes across HR, finance, and operations without rebuilding your existing systems.' },
  { title: 'Data Research & Reporting', desc: 'Agents query internal databases and external sources, synthesize findings, and deliver structured reports on a schedule.' },
  { title: 'E-commerce Personalization', desc: 'Agents analyze browsing behavior and purchase history to serve dynamic product recommendations in real time.' },
  { title: 'Compliance Monitoring', desc: 'Continuously scan documents, contracts, and workflows to flag regulatory risks before they become violations.' },
];

export default function AIAgentUseCases() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Business Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((item) => (
            <div key={item.title} className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
