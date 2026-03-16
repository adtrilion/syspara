import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';

const layers = [
  { step: '01', label: 'LLM Core', desc: 'A large language model handles reasoning, planning, and natural language understanding.', color: 'from-blue-600 to-blue-800' },
  { step: '02', label: 'Tool Layer', desc: 'Agents connect to APIs, databases, search engines, and internal business systems.', color: 'from-purple-600 to-purple-800' },
  { step: '03', label: 'Memory Store', desc: 'Short and long-term memory enables context retention across tasks and sessions.', color: 'from-cyan-600 to-cyan-800' },
  { step: '04', label: 'Orchestration', desc: 'A controller manages task queues, agent coordination, and error recovery.', color: 'from-emerald-600 to-emerald-800' },
  { step: '05', label: 'Guardrails', desc: 'Safety filters, audit logs, and human-in-the-loop checkpoints ensure reliable output.', color: 'from-violet-600 to-violet-800' },
];

export default function AIAgentArchitecture() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
              Architecture
            </span>
            <h2 className="text-4xl font-bold text-white mb-4">AI Agent Architecture</h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our AI agents integrate language models, business logic, APIs, and knowledge bases to perform complex tasks reliably at scale.
            </p>
            <div className="space-y-3">
              {layers.map((layer, i) => (
                <AnimatedSection key={layer.step} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/8 hover:border-white/20 transition-all duration-200">
                    <div className={`shrink-0 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${layer.color} text-white font-bold text-sm`}>
                      {layer.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{layer.label}</h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <Image
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&q=90"
                alt="AI neural network architecture with glowing nodes and connections"
                width={600}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/50 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
