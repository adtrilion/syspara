import { Metadata } from 'next';
import DashboardDemo from '@/components/dashboard/DashboardDemo';

export const metadata: Metadata = {
  title: 'AI Dashboard | SysPara',
  description: 'See how SysPara\'s AI operations dashboard gives clients real-time visibility into their agents, automations, and performance metrics.',
};

export default function DashboardPage() {
  return (
    <>
      <DashboardDemo />
    </>
  );
}
