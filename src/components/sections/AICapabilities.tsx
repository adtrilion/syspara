const capabilities = [
  { title: 'Machine Learning', desc: 'Predictive models that analyze patterns and improve decisions.' },
  { title: 'Natural Language Processing', desc: 'AI systems that understand and generate human language.' },
  { title: 'Computer Vision', desc: 'AI systems capable of analyzing images and video data.' },
  { title: 'Generative AI', desc: 'LLM-powered tools that create content, code, and insights on demand.' },
  { title: 'Reinforcement Learning', desc: 'Agents that learn optimal strategies through continuous feedback loops.' },
  { title: 'MLOps & Deployment', desc: 'Production-grade pipelines to deploy, monitor, and retrain AI models.' },
];

export default function AICapabilities() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our AI Capabilities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item) => (
            <div key={item.title} className="border p-6 rounded-xl hover:shadow-md transition-shadow">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
