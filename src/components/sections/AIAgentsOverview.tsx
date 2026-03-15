const points = [
  { title: 'Autonomous Reasoning', desc: 'Agents break down goals into steps and decide the best path to completion without human prompting.' },
  { title: 'Tool & API Access', desc: 'Agents interact with databases, CRMs, calendars, and third-party APIs to get real work done.' },
  { title: 'Memory & Context', desc: 'Agents retain context across sessions to deliver consistent, personalized outcomes over time.' },
];

export default function AIAgentsOverview() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Are AI Agents?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI agents are autonomous systems capable of reasoning, planning, and executing
            tasks independently while interacting with software tools, databases, and APIs.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
