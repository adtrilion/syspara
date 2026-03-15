const features = [
  { title: 'Demand Forecasting', desc: 'Predict inventory, staffing, and revenue with time-series AI models.' },
  { title: 'Customer Churn Prediction', desc: 'Identify at-risk customers before they leave and trigger retention workflows.' },
  { title: 'Anomaly Detection', desc: 'Catch fraud, failures, and outliers in real time before they escalate.' },
  { title: 'Operational Intelligence', desc: 'Live dashboards powered by ML that surface actionable insights automatically.' },
];

export default function AIAnalytics() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Predictive Analytics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered analytics systems that forecast trends,
            optimize operations, and support better decision-making.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
