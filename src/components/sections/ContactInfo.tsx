import AnimatedSection from '@/components/ui/AnimatedSection';
import { Mail, Clock, Globe } from 'lucide-react';

const info = [
  { icon: <Mail size={22} />, label: 'Email', value: 'info@syspara.in', color: 'from-blue-500 to-blue-700' },
  { icon: <Clock size={22} />, label: 'Business Hours', value: 'Mon – Fri, 9AM – 6PM', color: 'from-purple-500 to-purple-700' },
  { icon: <Globe size={22} />, label: 'Location', value: 'Global Remote Team', color: 'from-cyan-500 to-cyan-700' },
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {info.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.1}>
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className={`mx-auto mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-slate-500 text-sm">{item.value}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
