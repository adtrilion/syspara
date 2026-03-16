import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
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
const OG_IMAGE = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://syspara.in'}/api/og`;

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
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MG0BEJBZB9"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MG0BEJBZB9');
          `}
        </Script>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:font-semibold">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <LeadBot />
      </body>
    </html>
  );
}
