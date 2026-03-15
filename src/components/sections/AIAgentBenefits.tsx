import AnimatedSection from '@/components/ui/AnimatedSection';
import { Clock, DollarSign, Zap, CheckCircle, Layers, BarChart3 } from 'lucide-react';

const benefits = [
  { icon: <Clock size={22} />, title: '24/7 Automation', desc: 'Agents work around the clock without breaks, sick days, or overtime costs.', color: 'from-blue-500 to-blue-700' },
  { icon: <DollarSign size={22} />, title: 'Reduced Operational Costs', desc: 'Replace high-volume manual tasks with AI, cutting operational overhead significantly.', color: 'from-emerald-500 to-emerald-700' },
  { icon: <Zap size={22} />, title: 'Improved Efficiency', desc: 'Complete multi-step workflows in seconds that would take humans hours to finish.', color: 'from-yellow-500 to-yellow-700' },
  { icon: <CheckCircle size={22} />, title: 'Consistent Accuracy', desc: 'Eliminate human error from repetitive processes with deterministic AI execution.', color: 'from-purple-500 to-purple-700' },
  { icon: <Layers size={22} />, title: 'Infinite Scalability', desc: 'Handle 10 or 10,000 tasks simultaneously without adding headcount.', color: 'from-cyan-500 to-cyan-700' },
  { icon: <BarChart3 size={22} />, title: 'Faster Time-to-Insight', desc: 'Agents surface data, reports, and recommendations the moment they are needed.', color: 'from-violet-500 to-violet-700' },
];

export default function AIAgentBenefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-600 mb-4">
            Benefits
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Benefits of AI Agents</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Measurable advantages that compound over time as your agents learn and scale.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <AnimatedSection key={b.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${b.color} p-3 text-white`}>
                  {b.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
