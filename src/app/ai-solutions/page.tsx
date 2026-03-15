import AISolutionsHero from '@/components/sections/AISolutionsHero';
import AICapabilities from '@/components/sections/AICapabilities';
import AIAutomation from '@/components/sections/AIAutomation';
import AIAgentsOverview from '@/components/sections/AIAgentsOverview';
import AIChatbots from '@/components/sections/AIChatbots';
import AIAnalytics from '@/components/sections/AIAnalytics';
import AIIntegrations from '@/components/sections/AIIntegrations';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'AI Solutions | SysPara',
  description: 'SysPara delivers AI consulting, automation, agents, chatbots, analytics, and integrations for modern businesses.',
};

export default function AISolutionsPage() {
  return (
    <>
      <AISolutionsHero />
      <AICapabilities />
      <AIAutomation />
      <AIAgentsOverview />
      <AIChatbots />
      <AIAnalytics />
      <AIIntegrations />
      <CTA />
    </>
  );
}
