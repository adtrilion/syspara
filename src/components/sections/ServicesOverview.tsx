import { Brain, Globe, Smartphone, Cloud, RefreshCw, Lightbulb } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ServiceCard from '@/components/ui/ServiceCard';

const services = [
  {
    icon: <Brain size={22} />,
    title: 'AI Solutions',
    desc: 'Intelligent automation, AI agents, chatbots, and predictive analytics systems.',
  },
  {
    icon: <Globe size={22} />,
    title: 'Web Development',
    desc: 'Modern web platforms built for performance, scalability, and great UX.',
  },
  {
    icon: <Smartphone size={22} />,
    title: 'Mobile Apps',
    desc: 'Native and cross-platform iOS and Android applications.',
  },
  {
    icon: <Cloud size={22} />,
    title: 'Cloud Infrastructure',
    desc: 'Secure, scalable cloud architecture on AWS, Azure, and GCP.',
  },
  {
    icon: <RefreshCw size={22} />,
    title: 'Digital Transformation',
    desc: 'Modernizing business operations end-to-end with the right technology.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'IT Consulting',
    desc: 'Strategic technology guidance to align your stack with your business goals.',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            What We Build
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Our Core Services</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            End-to-end digital solutions designed to help your business grow, automate, and scale.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 0.08}>
              <ServiceCard icon={s.icon} title={s.title} description={s.desc} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
