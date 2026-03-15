const types = [
  { title: 'Customer Support Agents', desc: 'Handle support tickets, FAQs, and escalations 24/7 across chat, email, and voice.' },
  { title: 'Sales Agents', desc: 'Qualify leads, personalize outreach, and manage follow-ups inside your CRM automatically.' },
  { title: 'Research Agents', desc: 'Gather market intelligence, analyze competitors, and produce structured reports on demand.' },
  { title: 'Operations Agents', desc: 'Monitor workflows, trigger alerts, and execute multi-step business processes autonomously.' },
  { title: 'Finance Agents', desc: 'Automate invoice processing, expense categorization, and financial anomaly detection.' },
  { title: 'HR & Recruiting Agents', desc: 'Screen resumes, schedule interviews, and onboard new hires with minimal manual effort.' },
];

export default function AIAgentTypes() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Types of AI Agents We Build</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type) => (
            <div key={type.title} className="bg-white border p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-blue-600 mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
