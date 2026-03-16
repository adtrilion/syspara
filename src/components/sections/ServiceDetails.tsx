import AnimatedSection from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { Bot, Globe, Smartphone, Cloud } from 'lucide-react';

const details = [
  {
    icon: <Bot size={24} />,
    title: 'AI & Automation',
    desc: 'Build AI-powered systems including chatbots, automation workflows, predictive analytics, and intelligent agents that reduce costs and scale operations.',
    bullets: ['Custom AI model development', 'Workflow & RPA automation', 'AI chatbots & virtual assistants', 'Predictive analytics pipelines'],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=700&q=80',
    color: 'from-blue-600 to-purple-600',
  },
  {
    icon: <Globe size={24} />,
    title: 'Web Platforms',
    desc: 'Custom websites and enterprise web platforms designed for speed, scalability, and exceptional user experience.',
    bullets: ['Next.js & React applications', 'SaaS product development', 'E-commerce platforms', 'CMS & headless architecture'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    icon: <Smartphone size={24} />,
    title: 'Mobile Applications',
    desc: 'Mobile apps for iOS and Android with modern UI, strong backend integration, and offline capability.',
    bullets: ['React Native cross-platform apps', 'Native iOS & Android development', 'API & backend integration', 'App Store deployment & support'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80',
    color: 'from-purple-600 to-violet-600',
  },
  {
    icon: <Cloud size={24} />,
    title: 'Cloud Infrastructure',
    desc: 'Secure, scalable cloud architecture designed for reliability, performance, and cost efficiency.',
    bullets: ['AWS, Azure & GCP setup', 'CI/CD pipeline automation', 'Containerization with Docker & Kubernetes', 'Cloud security & compliance'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80',
    color: 'from-emerald-600 to-cyan-600',
  },
];

export default function ServiceDetails() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {details.map((item, i) => (
          <AnimatedSection key={item.title}>
            <div className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white`}>
                  {item.icon}
                </div>
                <h2 className="text-3xl font-bold text-white mb-3">{item.title}</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">{item.desc}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
                <Image src={item.image} alt={item.title} width={600} height={420} className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent" />
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
