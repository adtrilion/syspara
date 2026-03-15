import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { Clock, Globe, Brain, Users } from 'lucide-react';

const features = [
  { icon: <Clock size={20} />, title: 'Instant 24/7 Support', desc: 'Resolve customer queries around the clock without adding headcount.' },
  { icon: <Globe size={20} />, title: 'Multi-Channel Deployment', desc: 'Deploy on your website, WhatsApp, Slack, or any messaging platform.' },
  { icon: <Brain size={20} />, title: 'Context-Aware Conversations', desc: 'Chatbots that remember context and personalize every interaction.' },
  { icon: <Users size={20} />, title: 'Seamless Human Handoff', desc: 'Escalate complex issues to live agents with full conversation history.' },
];

export default function AIChatbots() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              <Image
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80"
                alt="AI Chatbots"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <span className="inline-block rounded-full bg-cyan-50 border border-cyan-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-4">
              Chatbots
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              AI Chatbots & Virtual Assistants
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Intelligent chatbots that provide instant support, automate responses, and improve customer engagement at scale.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 hover:border-cyan-200 hover:bg-white transition-all duration-200">
                  <div className="shrink-0 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-700 p-2 text-white">
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
        </div>
      </div>
    </section>
  );
}
