import ContactForm from '@/components/forms/ContactForm';

export default function ContactFormSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Start Your Project</h2>
        <p className="text-center text-gray-600 mb-10">
          Fill out the form and our team will reach out within 1 business day.
        </p>
        <div className="bg-white rounded-2xl border p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
