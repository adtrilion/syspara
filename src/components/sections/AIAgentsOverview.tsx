import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { Brain, Wrench, Database } from 'lucide-react';

const points = [
  { icon: <Brain size={20} />, title: 'Autonomous Reasoning', desc: 'Agents break down goals into steps and decide the best path to completion without human prompting.', color: 'from-blue-500 to-blue-700' },
  { icon: <Wrench size={20} />, title: 'Tool & API Access', desc: 'Agents interact with databases, CRMs, calendars, and third-party APIs to get real work done.', color: 'from-purple-500 to-purple-700' },
  { icon: <Database size={20} />, title: 'Memory & Context', desc: 'Agents retain context across sessions to deliver consistent, personalized outcomes over time.', color: 'from-cyan-500 to-cyan-700' },
];

export default function AIAgentsOverview() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <Image src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=90" alt="Autonomous AI agent system with glowing digital connections" width={600} height={480} className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
              Overview
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">What Are AI Agents?</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              AI agents are autonomous systems capable of reasoning, planning, and executing tasks independently while interacting with software tools, databases, and APIs.
            </p>
            <div className="space-y-4">
              {points.map((p) => (
                <div key={p.title} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:border-white/20 hover:bg-white/8 transition-all duration-200">
                  <div className={`shrink-0 rounded-lg bg-gradient-to-br ${p.color} p-2 text-white`}>{p.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-sm">{p.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
