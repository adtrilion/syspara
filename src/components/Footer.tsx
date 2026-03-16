import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import NewsletterForm from '@/components/forms/NewsletterForm';

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services#web-development' },
    { label: 'Mobile Apps', href: '/services#mobile-apps' },
    { label: 'AI Solutions', href: '/ai-solutions' },
    { label: 'Cloud Infrastructure', href: '/services#cloud-infrastructure' },
  ],
  'AI Solutions': [
    { label: 'AI Agents', href: '/ai-agents' },
    { label: 'AI Analytics', href: '/ai-solutions#analytics' },
    { label: 'AI Automation', href: '/ai-solutions#automation' },
    { label: 'Custom AI Models', href: '/ai-solutions#custom-models' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Industries', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500" />

      <div className="mx-auto max-w-6xl px-4 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="text-2xl font-bold gradient-text">SysPara</span>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 max-w-xs">
              Building AI-powered digital solutions that help modern businesses grow, automate, and scale.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://github.com/syspara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-lg border border-slate-700 p-2 hover:border-slate-500 hover:text-white transition"
              >
                <Github size={16} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/syspara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg border border-slate-700 p-2 hover:border-slate-500 hover:text-white transition"
              >
                <Linkedin size={16} />
              </Link>
              <Link
                href="https://twitter.com/syspara"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-lg border border-slate-700 p-2 hover:border-slate-500 hover:text-white transition"
              >
                <Twitter size={16} />
              </Link>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                Stay in the loop
              </p>
              <NewsletterForm />
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider">{heading}</h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>© {year} SysPara. All rights reserved.</p>
          <p>
            <a href="mailto:contact@syspara.in" className="hover:text-slate-400 transition-colors">contact@syspara.in</a>
            {' · '}
            <a href="tel:+971544318822" className="hover:text-slate-400 transition-colors">+971 544 31 8822</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
