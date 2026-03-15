import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadBot from '@/components/ai/LeadBot';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://syspara.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'SysPara — AI & Automation for Modern Businesses',
    template: '%s | SysPara',
  },
  description:
    'SysPara builds AI-powered digital solutions, automations, and enterprise products that help modern businesses grow faster and operate smarter.',
  keywords: ['AI automation', 'AI agents', 'SaaS development', 'MLOps', 'digital transformation', 'SysPara'],
  authors: [{ name: 'SysPara', url: BASE_URL }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'SysPara',
    title: 'SysPara — AI & Automation for Modern Businesses',
    description:
      'SysPara builds AI-powered digital solutions, automations, and enterprise products that help modern businesses grow faster and operate smarter.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SysPara — AI & Automation for Modern Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SysPara — AI & Automation for Modern Businesses',
    description:
      'SysPara builds AI-powered digital solutions, automations, and enterprise products that help modern businesses grow faster and operate smarter.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <LeadBot />
      </body>
    </html>
  );
}
