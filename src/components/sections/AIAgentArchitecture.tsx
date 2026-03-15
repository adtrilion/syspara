const layers = [
  { step: '01', label: 'LLM Core', desc: 'A large language model handles reasoning, planning, and natural language understanding.' },
  { step: '02', label: 'Tool Layer', desc: 'Agents connect to APIs, databases, search engines, and internal business systems.' },
  { step: '03', label: 'Memory Store', desc: 'Short and long-term memory enables context retention across tasks and sessions.' },
  { step: '04', label: 'Orchestration', desc: 'A controller manages task queues, agent coordination, and error recovery.' },
  { step: '05', label: 'Guardrails', desc: 'Safety filters, audit logs, and human-in-the-loop checkpoints ensure reliable output.' },
];

export default function AIAgentArchitecture() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Agent Architecture</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our AI agents integrate language models, business logic, APIs, and knowledge
            bases to perform complex tasks reliably at scale.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {layers.map((layer) => (
            <div key={layer.step} className="flex items-start gap-6 rounded-xl border bg-white p-6 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-bold text-sm border border-blue-200">
                {layer.step}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{layer.label}</h3>
                <p className="text-sm text-gray-600">{layer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
