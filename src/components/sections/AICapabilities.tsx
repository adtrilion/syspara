import AnimatedSection from '@/components/ui/AnimatedSection';
import { Brain, MessageSquare, Eye, Sparkles, RefreshCw, Server } from 'lucide-react';

const capabilities = [
  { icon: <Brain size={22} />, title: 'Machine Learning', desc: 'Predictive models that analyze patterns and improve decisions.', color: 'from-blue-500 to-blue-700' },
  { icon: <MessageSquare size={22} />, title: 'Natural Language Processing', desc: 'AI systems that understand and generate human language.', color: 'from-purple-500 to-purple-700' },
  { icon: <Eye size={22} />, title: 'Computer Vision', desc: 'AI systems capable of analyzing images and video data.', color: 'from-cyan-500 to-cyan-700' },
  { icon: <Sparkles size={22} />, title: 'Generative AI', desc: 'LLM-powered tools that create content, code, and insights on demand.', color: 'from-violet-500 to-violet-700' },
  { icon: <RefreshCw size={22} />, title: 'Reinforcement Learning', desc: 'Agents that learn optimal strategies through continuous feedback loops.', color: 'from-emerald-500 to-emerald-700' },
  { icon: <Server size={22} />, title: 'MLOps & Deployment', desc: 'Production-grade pipelines to deploy, monitor, and retrain AI models.', color: 'from-orange-500 to-orange-700' },
];

export default function AICapabilities() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Capabilities
          </span>
          <h2 className="text-4xl font-bold text-white">Our AI Capabilities</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A full spectrum of AI technologies applied to real business problems.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white`}>{item.icon}</div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
