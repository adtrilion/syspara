import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import AIInnovation from '@/components/sections/AIInnovation';
import AIDemo from '@/components/ai/AIDemo';
import DashboardDemo from '@/components/dashboard/DashboardDemo';
import IndustryCard from '@/components/ui/IndustryCard';
import PortfolioCard from '@/components/ui/PortfolioCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTA from '@/components/ui/CTASection';
import AnimatedSection from '@/components/ui/AnimatedSection';

const industries = [
  { title: 'Healthcare', description: 'Patient-focused automation and secure data workflows.', icon: '🏥' },
  { title: 'Real Estate', description: 'Smart property management and analytics platforms.', icon: '🏢' },
  { title: 'E-commerce', description: 'AI personalization and conversion-optimized stores.', icon: '🛒' },
  { title: 'Education', description: 'Adaptive learning tools and student success intelligence.', icon: '🎓' },
  { title: 'Finance', description: 'Predictive risk, accounting automation, and insights.', icon: '💹' },
  { title: 'SMEs', description: 'Growth-focused operations and affordable AI solutions.', icon: '🚀' },
];

const projects = [
  {
    title: 'E-commerce Platform',
    tech: 'Next.js + Stripe + AI Recommendations',
    description: 'High-conversion storefront with personalized product suggestions.',
  },
  {
    title: 'Healthcare Dashboard',
    tech: 'React + AWS + ML analytics',
    description: 'Patient insights and predictive care workflows in real time.',
  },
  {
    title: 'SaaS Growth Engine',
    tech: 'Node.js + PostgreSQL + AI automation',
    description: 'Automated onboarding and churn reduction pipelines.',
  },
];

const process = [
  { step: '01', label: 'Discovery', desc: 'Understand business needs and align goals.' },
  { step: '02', label: 'Strategy', desc: 'Define roadmap and success KPIs.' },
  { step: '03', label: 'Development', desc: 'Build fast, scalable solutions.' },
  { step: '04', label: 'Launch', desc: 'Deploy securely with operational readiness.' },
  { step: '05', label: 'Support', desc: 'Ongoing optimization and support.' },
];

const testimonials = [
  {
    name: 'Ava Chen',
    company: 'BrightHealth',
    role: 'Head of Ops',
    quote: 'SysPara helped automate our customer support and improve response time dramatically.',
  },
  {
    name: 'Maxwell King',
    company: 'RetailNova',
    role: 'CTO',
    quote: 'Amazing team, fast execution and strong results with our AI recommendation engine.',
  },
  {
    name: 'Chen Liu',
    company: 'CloudWare',
    role: 'Product Lead',
    quote: 'Their custom agents are now core to our operations and reduced manual work by 60%.',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Trust bar */}
      <section className="border-t border-white/10 bg-slate-900 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <AnimatedSection>
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-8">
              Trusted Technologies & Platforms
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {['OpenAI', 'AWS', 'Google Cloud', 'Microsoft Azure'].map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-5 text-sm font-semibold text-slate-400 hover:border-white/20 hover:bg-white/8 transition"
                >
                  {name}
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Tech badges */}
          <AnimatedSection delay={0.1} className="mt-10 flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'TensorFlow', 'AWS', 'Azure', 'OpenAI'].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-400"
              >
                {tech}
              </span>
            ))}
          </AnimatedSection>

          {/* Stats */}
          <AnimatedSection delay={0.2} className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { value: '10+', label: 'Years Experience' },
              { value: '500+', label: 'Projects Delivered' },
              { value: '12+', label: 'Industries Served' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-4xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <div className="section-divider" />

      <ServicesOverview />

      <AIInnovation />

      <AIDemo />

      <DashboardDemo />

      {/* Industries */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-purple-900/30 border border-purple-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-purple-400 mb-4">
              Industries
            </span>
            <h2 className="text-4xl font-bold text-white">Industries We Serve</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Sector-specific AI solutions built for the unique challenges of your industry.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.title} delay={i * 0.07}>
                <IndustryCard
                  title={industry.title}
                  description={industry.description}
                  icon={industry.icon}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Portfolio */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-cyan-900/30 border border-cyan-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4">
              Portfolio
            </span>
            <h2 className="text-4xl font-bold text-white">Recent Work</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              A snapshot of the solutions we've shipped for clients across industries.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <PortfolioCard
                  title={project.title}
                  tech={project.tech}
                  description={project.description}
                />
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3} className="mt-10 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all duration-200"
            >
              View All Projects →
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
              How We Work
            </span>
            <h2 className="text-4xl font-bold text-white">Our Process</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              A proven 5-step framework that takes your idea from concept to production.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative grid grid-cols-1 gap-6 md:grid-cols-5">
              {/* Connector line */}
              <div className="absolute top-8 left-0 right-0 hidden h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 md:block" />
              {process.map((item, i) => (
                <div key={item.step} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/20">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block rounded-full bg-amber-900/30 border border-amber-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-4">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-white">What Clients Say</h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Real results from real businesses that partnered with SysPara.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <TestimonialCard
                  quote={item.quote}
                  name={item.name}
                  company={item.company}
                  role={item.role}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
