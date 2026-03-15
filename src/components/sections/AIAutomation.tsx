const items = [
  { title: 'Workflow Automation', desc: 'Eliminate manual steps across HR, finance, and operations with intelligent process bots.' },
  { title: 'Document Processing', desc: 'Extract, classify, and route data from invoices, contracts, and forms automatically.' },
  { title: 'RPA + AI', desc: 'Combine robotic process automation with AI to handle complex, judgment-based tasks.' },
  { title: 'Email & Notification Automation', desc: 'Trigger smart communications based on user behavior, events, and data signals.' },
];

export default function AIAutomation() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Intelligent Automation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Automate repetitive tasks and complex workflows using AI-driven
            systems that reduce operational costs and increase efficiency.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
