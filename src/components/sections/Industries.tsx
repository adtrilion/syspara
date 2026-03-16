import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

const industries = [
  { name: 'Healthcare', desc: 'AI-powered patient care, clinical workflow automation, and predictive diagnostics.', image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=90', solutions: ['Patient intake automation', 'Predictive care analytics', 'Medical document processing', 'Appointment scheduling agents'] },
  { name: 'Finance', desc: 'Fraud detection, risk scoring, and intelligent financial forecasting systems.', image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90', solutions: ['Fraud & anomaly detection', 'AI credit risk scoring', 'Automated financial reporting', 'Regulatory compliance monitoring'] },
  { name: 'E-commerce', desc: 'Personalized shopping experiences, dynamic pricing, and AI-driven conversion optimization.', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=90', solutions: ['Product recommendation engines', 'Dynamic pricing models', 'Cart abandonment recovery', 'AI customer support bots'] },
  { name: 'Real Estate', desc: 'Smart property valuation, lead scoring, and market trend intelligence.', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=90', solutions: ['AI property valuation', 'Lead qualification agents', 'Market trend forecasting', 'Automated listing management'] },
  { name: 'Education', desc: 'Adaptive learning platforms, student performance prediction, and content automation.', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=90', solutions: ['Adaptive learning paths', 'Student churn prediction', 'Automated content generation', 'AI tutoring assistants'] },
  { name: 'Logistics', desc: 'Route optimization, demand forecasting, and real-time shipment intelligence.', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90', solutions: ['Route & delivery optimization', 'Demand forecasting models', 'Fleet monitoring dashboards', 'Warehouse automation'] },
  { name: 'SMEs', desc: 'Affordable AI and automation solutions designed to help small businesses compete and grow.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=90', solutions: ['Business process automation', 'AI chatbots for support', 'Sales pipeline automation', 'Cloud infrastructure setup'] },
  { name: 'SaaS & Tech', desc: 'AI features, MLOps pipelines, and intelligent product enhancements for software companies.', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=90', solutions: ['AI feature integration', 'MLOps & model deployment', 'User behavior analytics', 'Churn prediction systems'] },
];

export default function Industries() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-purple-900/30 border border-purple-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">
            Industries
          </span>
          <h2 className="text-4xl font-bold text-white">Industries We Serve</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Sector-specific AI solutions built for the unique challenges of your industry.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.name} delay={i * 0.07}>
              <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-36 overflow-hidden">
                  <Image src={ind.image} alt={ind.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white">{ind.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-400 mb-4 leading-relaxed">{ind.desc}</p>
                  <ul className="space-y-1.5">
                    {ind.solutions.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
