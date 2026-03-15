import IndustriesHero from '@/components/sections/IndustriesHero';
import IndustriesStats from '@/components/sections/IndustriesStats';
import Industries from '@/components/sections/Industries';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Industries | SysPara',
  description: 'SysPara delivers AI and digital solutions tailored for Healthcare, Finance, E-commerce, Real Estate, Education, Logistics, SMEs, and SaaS.',
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesHero />
      <IndustriesStats />
      <Industries />
      <CTA />
    </>
  );
}
