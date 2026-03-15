import AIAgentsHero from '@/components/sections/AIAgentsHero';
import AIAgentsOverview from '@/components/sections/AIAgentsOverview';
import AIAgentTypes from '@/components/sections/AIAgentTypes';
import AIAgentUseCases from '@/components/sections/AIAgentUseCases';
import AIAgentArchitecture from '@/components/sections/AIAgentArchitecture';
import AIAgentBenefits from '@/components/sections/AIAgentBenefits';
import CTA from '@/components/sections/CTA';

export const metadata = {
  title: 'AI Agents | SysPara',
  description: 'SysPara builds autonomous AI agents that automate workflows, support customers, qualify leads, and execute complex business tasks.',
};

export default function AIAgentsPage() {
  return (
    <>
      <AIAgentsHero />
      <AIAgentsOverview />
      <AIAgentTypes />
      <AIAgentUseCases />
      <AIAgentArchitecture />
      <AIAgentBenefits />
      <CTA />
    </>
  );
}
