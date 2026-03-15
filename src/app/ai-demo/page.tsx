import { Metadata } from 'next';
import AIDemo from '@/components/ai/AIDemo';

export const metadata: Metadata = {
  title: 'AI Demo | SysPara',
  description: 'Try SysPara\'s AI assistant live — ask any business or AI question and see how our systems respond in real time.',
};

export default function AIDemoPage() {
  return (
    <>
      <AIDemo />
    </>
  );
}
