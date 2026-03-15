import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { FileText, Mail, Bot, Workflow } from 'lucide-react';

const items = [
  { icon: <Workflow size={20} />, title: 'Workflow Automation', desc: 'Eliminate manual steps across HR, finance, and operations with intelligent process bots.' },
  { icon: <FileText size={20} />, title: 'Document Processing', desc: 'Extract, classify, and route data from invoices, contracts, and forms automatically.' },
  { icon: <Bot size={20} />, title: 'RPA + AI', desc: 'Combine robotic process automation with AI to handle complex, judgment-based tasks.' },
  { icon: <Mail size={20} />, title: 'Email & Notification Automation', desc: 'Trigger smart communications based on user behavior, events, and data signals.' },
];

export default function AIAutomation() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="inline-block rounded-full bg-purple-50 border border-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-600 mb-4">
              Automation
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Intelligent Automation
            </h2>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Automate repetitive tasks and complex workflows using AI-driven systems that reduce operational costs and increase efficiency.
            </p>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-200">
                  <div className="shrink-0 rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 p-2 text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80"
                alt="Workflow automation and AI-powered process management dashboard"
                width={600}
                height={450}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
