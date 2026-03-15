const integrations = [
  { name: 'Salesforce CRM', desc: 'AI lead scoring, automated follow-ups, and pipeline intelligence.' },
  { name: 'SAP / ERP', desc: 'Intelligent procurement, inventory forecasting, and process automation.' },
  { name: 'HubSpot', desc: 'AI-driven marketing workflows, segmentation, and campaign optimization.' },
  { name: 'Shopify / WooCommerce', desc: 'Personalized recommendations, dynamic pricing, and churn prevention.' },
  { name: 'Custom APIs', desc: 'Connect any internal system or third-party platform via REST or GraphQL.' },
  { name: 'Mobile Apps', desc: 'On-device AI features including vision, NLP, and smart notifications.' },
];

export default function AIIntegrations() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Integration Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Integrate AI into your existing systems such as CRM,
            ERP, mobile apps, and business platforms.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div key={item.name} className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
