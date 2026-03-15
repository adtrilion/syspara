import AnimatedSection from '@/components/ui/AnimatedSection';
import { HeadphonesIcon, Target, Workflow, FileSearch, ShoppingCart, Shield } from 'lucide-react';

const useCases = [
  { icon: <HeadphonesIcon size={20} />, title: 'Automated Customer Support', desc: 'AI agents respond to customer queries instantly, resolve issues, and escalate edge cases — reducing support costs by up to 60%.', color: 'from-blue-500 to-blue-700' },
  { icon: <Target size={20} />, title: 'Sales Lead Qualification', desc: 'Agents evaluate inbound leads, score them against your ICP, and prioritize the highest-value prospects for your sales team.', color: 'from-purple-500 to-purple-700' },
  { icon: <Workflow size={20} />, title: 'Workflow Automation', desc: 'Automate multi-step business processes across HR, finance, and operations without rebuilding your existing systems.', color: 'from-cyan-500 to-cyan-700' },
  { icon: <FileSearch size={20} />, title: 'Data Research & Reporting', desc: 'Agents query internal databases and external sources, synthesize findings, and deliver structured reports on a schedule.', color: 'from-emerald-500 to-emerald-700' },
  { icon: <ShoppingCart size={20} />, title: 'E-commerce Personalization', desc: 'Agents analyze browsing behavior and purchase history to serve dynamic product recommendations in real time.', color: 'from-orange-500 to-orange-700' },
  { icon: <Shield size={20} />, title: 'Compliance Monitoring', desc: 'Continuously scan documents, contracts, and workflows to flag regulatory risks before they become violations.', color: 'from-violet-500 to-violet-700' },
];

export default function AIAgentUseCases() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-purple-50 border border-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">
            Use Cases
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Business Use Cases</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            Real-world applications of AI agents delivering measurable ROI across industries.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                <div className={`shrink-0 rounded-xl bg-gradient-to-br ${item.color} p-3 text-white`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
