import ProjectCard from '@/components/ui/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

const projects = [
  {
    title: 'AI Customer Support Bot',
    tech: 'Python • GPT • API Integration',
    description: 'Automated support assistant handling thousands of customer inquiries daily with 70% cost reduction.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
  },
  {
    title: 'E-commerce Platform',
    tech: 'Next.js • Stripe • PostgreSQL',
    description: 'Full-featured online store with AI product recommendations and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    title: 'Logistics Dashboard',
    tech: 'React • Node.js • Data Analytics',
    description: 'Real-time fleet monitoring and operational insights for a regional logistics company.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    title: 'Real Estate Portal',
    tech: 'Next.js • Cloud Hosting',
    description: 'Property listing platform with advanced search, map integration, and lead capture.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },
  {
    title: 'Healthcare Appointment System',
    tech: 'React • Node.js • Database',
    description: 'Patient booking and hospital management system serving 10,000+ monthly appointments.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  },
  {
    title: 'AI Research Assistant',
    tech: 'AI Agents • NLP • LangChain',
    description: 'Automated research and document summarization tool reducing analyst workload by 60%.',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Featured Projects</h2>
          <p className="mt-4 text-slate-500 max-w-xl mx-auto">
            A selection of solutions we've shipped for businesses across industries.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.08}>
              <ProjectCard
                title={p.title}
                tech={p.tech}
                description={p.description}
                image={p.image}
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
