'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const LOCALES = ['fr', 'en', 'ar'] as const;

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { key: 'home' as const, href: `/${locale}` },
    { key: 'services' as const, href: `/${locale}/services` },
    { key: 'about' as const, href: `/${locale}/about` },
    { key: 'contact' as const, href: `/${locale}/contact` },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === `/${locale}` : pathname.startsWith(href);

  const activeClass = scrolled ? 'text-[#1E40AF]' : 'text-[#00B4FF]';
  const inactiveClass = scrolled
    ? 'text-slate-600 hover:text-[#1E40AF]'
    : 'text-white/80 hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} aria-label="IT Space Home">
          <Logo white={!scrolled} />
        </Link>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className={`text-sm font-semibold transition-colors relative group ${
                isActive(href) ? activeClass : inactiveClass
              }`}
            >
              {t(key)}
              {isActive(href) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4FF] rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 text-[11px] font-bold">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center">
                <a
                  href={`/${l}`}
                  className={`px-2 py-1 rounded transition-colors ${
                    locale === l
                      ? scrolled
                        ? 'text-[#1E40AF] bg-blue-50'
                        : 'text-[#00B4FF] bg-white/10'
                      : scrolled
                        ? 'text-slate-400 hover:text-[#1E40AF]'
                        : 'text-white/50 hover:text-white'
                  }`}
                >
                  {l.toUpperCase()}
                </a>
                {i < LOCALES.length - 1 && (
                  <span className={scrolled ? 'text-slate-200' : 'text-white/20'}>|</span>
                )}
              </span>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href={`/${locale}/contact`}
            className={`text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200 ${
              scrolled
                ? 'bg-[#1E40AF] text-white hover:bg-blue-800 shadow-sm'
                : 'bg-[#00B4FF] text-[#0D1B3E] hover:bg-cyan-300 shadow-lg shadow-cyan-500/20'
            }`}
          >
            {t('cta_nav')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1 ${scrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-2 shadow-xl">
          {links.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm font-semibold py-2.5 px-3 rounded-lg ${
                isActive(href)
                  ? 'text-[#1E40AF] bg-blue-50'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t(key)}
            </Link>
          ))}
          <Link
            href={`/${locale}/contact`}
            onClick={() => setOpen(false)}
            className="bg-[#1E40AF] text-white text-sm font-bold px-4 py-3 rounded-lg text-center mt-2"
          >
            {t('cta_nav')}
          </Link>
          <div className="flex gap-2 pt-2 border-t border-slate-100 mt-1">
            {LOCALES.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                className={`flex-1 text-xs font-bold py-2 rounded-lg border text-center ${
                  locale === l
                    ? 'border-[#1E40AF] text-[#1E40AF] bg-blue-50'
                    : 'border-slate-200 text-slate-500'
                }`}
              >
                {l.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
