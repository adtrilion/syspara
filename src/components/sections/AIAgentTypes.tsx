import AnimatedSection from '@/components/ui/AnimatedSection';
import { HeadphonesIcon, TrendingUp, Search, Settings, DollarSign, UserCheck } from 'lucide-react';

const types = [
  { icon: <HeadphonesIcon size={22} />, title: 'Customer Support Agents', desc: 'Handle support tickets, FAQs, and escalations 24/7 across chat, email, and voice.', color: 'from-blue-500 to-blue-700' },
  { icon: <TrendingUp size={22} />, title: 'Sales Agents', desc: 'Qualify leads, personalize outreach, and manage follow-ups inside your CRM automatically.', color: 'from-purple-500 to-purple-700' },
  { icon: <Search size={22} />, title: 'Research Agents', desc: 'Gather market intelligence, analyze competitors, and produce structured reports on demand.', color: 'from-cyan-500 to-cyan-700' },
  { icon: <Settings size={22} />, title: 'Operations Agents', desc: 'Monitor workflows, trigger alerts, and execute multi-step business processes autonomously.', color: 'from-emerald-500 to-emerald-700' },
  { icon: <DollarSign size={22} />, title: 'Finance Agents', desc: 'Automate invoice processing, expense categorization, and financial anomaly detection.', color: 'from-orange-500 to-orange-700' },
  { icon: <UserCheck size={22} />, title: 'HR & Recruiting Agents', desc: 'Screen resumes, schedule interviews, and onboard new hires with minimal manual effort.', color: 'from-violet-500 to-violet-700' },
];

export default function AIAgentTypes() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Agent Types
          </span>
          <h2 className="text-4xl font-bold text-white">Types of AI Agents We Build</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Purpose-built agents for every business function — from sales to compliance.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {types.map((type, i) => (
            <AnimatedSection key={type.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${type.color} p-3 text-white`}>
                  {type.icon}
                </div>
                <h3 className="font-semibold text-white mb-2">{type.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{type.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
