import ServicesHero from '@/components/sections/ServicesHero';
import ServicesOverview from '@/components/sections/ServicesOverview';
import ServiceDetails from '@/components/sections/ServiceDetails';
import TechStack from '@/components/sections/TechStack';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Services | SysPara',
  description: 'SysPara offers AI solutions, web development, mobile apps, cloud infrastructure, and IT consulting for modern businesses.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServiceDetails />
      <TechStack />
      <Process />
      <CTA />
    </>
  );
}
