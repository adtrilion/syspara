import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | SysPara',
  description:
    'Learn about SysPara — our mission, vision, values, and the team behind our AI and digital solutions.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
