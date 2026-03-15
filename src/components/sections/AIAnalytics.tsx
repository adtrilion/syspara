import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { TrendingUp, UserMinus, AlertTriangle, BarChart3 } from 'lucide-react';

const features = [
  { icon: <TrendingUp size={20} />, title: 'Demand Forecasting', desc: 'Predict inventory, staffing, and revenue with time-series AI models.' },
  { icon: <UserMinus size={20} />, title: 'Customer Churn Prediction', desc: 'Identify at-risk customers before they leave and trigger retention workflows.' },
  { icon: <AlertTriangle size={20} />, title: 'Anomaly Detection', desc: 'Catch fraud, failures, and outliers in real time before they escalate.' },
  { icon: <BarChart3 size={20} />, title: 'Operational Intelligence', desc: 'Live dashboards powered by ML that surface actionable insights automatically.' },
];

export default function AIAnalytics() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
              Analytics
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Predictive Analytics
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              AI-powered analytics systems that forecast trends, optimize operations, and support better decision-making across your business.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-200">
                  <div className="shrink-0 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 p-2 text-white">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{f.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-emerald-500/10">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Predictive Analytics"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/40 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
