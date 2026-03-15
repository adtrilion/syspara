const features = [
  { title: 'Instant 24/7 Support', desc: 'Resolve customer queries around the clock without adding headcount.' },
  { title: 'Multi-Channel Deployment', desc: 'Deploy on your website, WhatsApp, Slack, or any messaging platform.' },
  { title: 'Context-Aware Conversations', desc: 'Chatbots that remember context and personalize every interaction.' },
  { title: 'Seamless Human Handoff', desc: 'Escalate complex issues to live agents with full conversation history.' },
];

export default function AIChatbots() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Chatbots & Virtual Assistants</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Intelligent chatbots that provide instant support,
            automate responses, and improve customer engagement.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
