const industries = [
  {
    name: 'Healthcare',
    desc: 'AI-powered patient care, clinical workflow automation, and predictive diagnostics.',
    solutions: ['Patient intake automation', 'Predictive care analytics', 'Medical document processing', 'Appointment scheduling agents'],
  },
  {
    name: 'Finance',
    desc: 'Fraud detection, risk scoring, and intelligent financial forecasting systems.',
    solutions: ['Fraud & anomaly detection', 'AI credit risk scoring', 'Automated financial reporting', 'Regulatory compliance monitoring'],
  },
  {
    name: 'E-commerce',
    desc: 'Personalized shopping experiences, dynamic pricing, and AI-driven conversion optimization.',
    solutions: ['Product recommendation engines', 'Dynamic pricing models', 'Cart abandonment recovery', 'AI customer support bots'],
  },
  {
    name: 'Real Estate',
    desc: 'Smart property valuation, lead scoring, and market trend intelligence.',
    solutions: ['AI property valuation', 'Lead qualification agents', 'Market trend forecasting', 'Automated listing management'],
  },
  {
    name: 'Education',
    desc: 'Adaptive learning platforms, student performance prediction, and content automation.',
    solutions: ['Adaptive learning paths', 'Student churn prediction', 'Automated content generation', 'AI tutoring assistants'],
  },
  {
    name: 'Logistics',
    desc: 'Route optimization, demand forecasting, and real-time shipment intelligence.',
    solutions: ['Route & delivery optimization', 'Demand forecasting models', 'Fleet monitoring dashboards', 'Warehouse automation'],
  },
  {
    name: 'SMEs',
    desc: 'Affordable AI and automation solutions designed to help small businesses compete and grow.',
    solutions: ['Business process automation', 'AI chatbots for support', 'Sales pipeline automation', 'Cloud infrastructure setup'],
  },
  {
    name: 'SaaS & Tech',
    desc: 'AI features, MLOps pipelines, and intelligent product enhancements for software companies.',
    solutions: ['AI feature integration', 'MLOps & model deployment', 'User behavior analytics', 'Churn prediction systems'],
  },
];

export default function Industries() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => (
            <div key={ind.name} className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">{ind.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{ind.desc}</p>
              <ul className="space-y-1">
                {ind.solutions.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}