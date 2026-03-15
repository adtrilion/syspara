import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  { title: 'AI Customer Support Bot', tech: 'Python • GPT • API Integration', description: 'Automated support assistant handling thousands of customer inquiries daily with 70% cost reduction.' },
  { title: 'E-commerce Platform', tech: 'Next.js • Stripe • PostgreSQL', description: 'Full-featured online store with AI product recommendations and secure payment processing.' },
  { title: 'Logistics Dashboard', tech: 'React • Node.js • Data Analytics', description: 'Real-time fleet monitoring and operational insights for a regional logistics company.' },
  { title: 'Real Estate Portal', tech: 'Next.js • Cloud Hosting', description: 'Property listing platform with advanced search, map integration, and lead capture.' },
  { title: 'Healthcare Appointment System', tech: 'React • Node.js • Database', description: 'Patient booking and hospital management system serving 10,000+ monthly appointments.' },
  { title: 'AI Research Assistant', tech: 'AI Agents • NLP • LangChain', description: 'Automated research and document summarization tool reducing analyst workload by 60%.' },
];

export default function PortfolioGrid() {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.title} title={p.title} tech={p.tech} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
