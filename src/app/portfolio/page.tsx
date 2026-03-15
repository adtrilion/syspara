import PortfolioHero from '@/components/sections/PortfolioHero';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import CaseStudy from '@/components/sections/CaseStudy';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'Portfolio | SysPara',
  description: 'Explore SysPara projects in AI, web development, mobile apps, and digital transformation.',
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <CaseStudy />
      <CTA />
    </>
  );
}
