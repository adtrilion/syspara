import AnimatedSection from '@/components/ui/AnimatedSection';
import { Layers, Database, Megaphone, ShoppingCart, Code2, Smartphone } from 'lucide-react';

const integrations = [
  { icon: <Layers size={22} />, name: 'Salesforce CRM', desc: 'AI lead scoring, automated follow-ups, and pipeline intelligence.', color: 'from-blue-500 to-blue-700' },
  { icon: <Database size={22} />, name: 'SAP / ERP', desc: 'Intelligent procurement, inventory forecasting, and process automation.', color: 'from-purple-500 to-purple-700' },
  { icon: <Megaphone size={22} />, name: 'HubSpot', desc: 'AI-driven marketing workflows, segmentation, and campaign optimization.', color: 'from-orange-500 to-orange-700' },
  { icon: <ShoppingCart size={22} />, name: 'Shopify / WooCommerce', desc: 'Personalized recommendations, dynamic pricing, and churn prevention.', color: 'from-emerald-500 to-emerald-700' },
  { icon: <Code2 size={22} />, name: 'Custom APIs', desc: 'Connect any internal system or third-party platform via REST or GraphQL.', color: 'from-cyan-500 to-cyan-700' },
  { icon: <Smartphone size={22} />, name: 'Mobile Apps', desc: 'On-device AI features including vision, NLP, and smart notifications.', color: 'from-violet-500 to-violet-700' },
];

export default function AIIntegrations() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-violet-50 border border-violet-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-600 mb-4">
            Integrations
          </span>
          <h2 className="text-4xl font-bold text-slate-900">AI Integration Services</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Integrate AI into your existing systems — CRM, ERP, mobile apps, and business platforms.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, i) => (
            <AnimatedSection key={item.name} delay={i * 0.08}>
              <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
