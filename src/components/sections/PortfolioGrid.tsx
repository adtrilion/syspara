import ProjectCard from '@/components/ui/ProjectCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

const projects = [
  {
    title: 'AI Customer Support Bot',
    tech: 'Python • GPT • API Integration',
    description: 'Automated support assistant handling thousands of customer inquiries daily with 70% cost reduction.',
    image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=1200&q=90',
  },
  {
    title: 'E-commerce Platform',
    tech: 'Next.js • Stripe • PostgreSQL',
    description: 'Full-featured online store with AI product recommendations and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=90',
  },
  {
    title: 'Logistics Dashboard',
    tech: 'React • Node.js • Data Analytics',
    description: 'Real-time fleet monitoring and operational insights for a regional logistics company.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=90',
  },
  {
    title: 'Real Estate Portal',
    tech: 'Next.js • Cloud Hosting',
    description: 'Property listing platform with advanced search, map integration, and lead capture.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=90',
  },
  {
    title: 'Healthcare Appointment System',
    tech: 'React • Node.js • Database',
    description: 'Patient booking and hospital management system serving 10,000+ monthly appointments.',
    image: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=1200&q=90',
  },
  {
    title: 'AI Research Assistant',
    tech: 'AI Agents • NLP • LangChain',
    description: 'Automated research and document summarization tool reducing analyst workload by 60%.',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=1200&q=90',
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block rounded-full bg-blue-900/30 border border-blue-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Our Work
          </span>
          <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
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
