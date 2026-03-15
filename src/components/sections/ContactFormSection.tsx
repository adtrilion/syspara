import ContactForm from '@/components/forms/ContactForm';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function ContactFormSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <AnimatedSection className="text-center mb-10">
          <span className="inline-block rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600 mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold text-slate-900">Start Your Project</h2>
          <p className="mt-3 text-slate-500">
            Fill out the form and our team will reach out within 1 business day.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
