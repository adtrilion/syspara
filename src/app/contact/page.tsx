import ContactHero from '@/components/sections/ContactHero';
import ContactInfo from '@/components/sections/ContactInfo';
import ContactFormSection from '@/components/sections/ContactFormSection';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Contact | SysPara',
  description: 'Get in touch with SysPara to discuss your AI, web, mobile, or cloud project.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <CTA />
    </>
  );
}
