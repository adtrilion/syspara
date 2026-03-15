'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const mainNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/demo', label: 'Demo' },
  { href: '/contact', label: 'Contact' },
];

const aiNav = [
  { href: '/ai-solutions', label: 'AI Solutions' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/demo', label: 'AI Demo' },
  { href: '/dashboard', label: 'Dashboard' },
];

const allMobileNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/ai-solutions', label: 'AI Solutions' },
  { href: '/ai-agents', label: 'AI Agents' },
  { href: '/demo', label: 'AI Demo' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/industries', label: 'Industries' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAiOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/20 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold gradient-text">
          SysPara
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-5 text-sm font-medium md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          ))}

          {/* AI dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setAiOpen((v) => !v)}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors"
            >
              AI
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${aiOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {aiOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 rounded-xl border border-slate-200 bg-white shadow-lg shadow-slate-200/60 py-1.5 z-50">
                {aiNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setAiOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-1 h-px bg-slate-100" />
                <Link
                  href="/about"
                  onClick={() => setAiOpen(false)}
                  className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                >
                  About
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            Book Consultation
          </Link>
        </div>

        <button
          className="md:hidden rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50 transition"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/20 px-4 pb-4">
          <div className="flex flex-col gap-1 pt-2">
            {allMobileNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-slate-700 hover:bg-slate-100 transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 text-center text-white font-semibold"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
