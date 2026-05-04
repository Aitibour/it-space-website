'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const LOCALES = ['fr', 'en', 'ar'] as const;
const SECTIONS = ['home', 'services', 'about', 'contact'] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-md' : 'shadow-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('home')} aria-label="Home">
          <Logo />
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-sm font-medium text-slate-600 hover:text-[#1E40AF] transition-colors"
            >
              {t(s)}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1 text-xs font-semibold">
          {LOCALES.map((l, i) => (
            <span key={l} className="flex items-center">
              <a
                href={`/${l}`}
                className={`px-2 py-1 rounded transition-colors ${
                  locale === l
                    ? 'text-[#1E40AF] bg-blue-50'
                    : 'text-slate-400 hover:text-[#1E40AF]'
                }`}
              >
                {l.toUpperCase()}
              </a>
              {i < LOCALES.length - 1 && (
                <span className="text-slate-200 select-none">|</span>
              )}
            </span>
          ))}
        </div>

        <button
          className="md:hidden p-1 text-slate-600"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-3">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => {
                scrollTo(s);
                setOpen(false);
              }}
              className="text-sm font-medium text-slate-700 text-start py-1"
            >
              {t(s)}
            </button>
          ))}
          <div className="flex gap-2 pt-3 border-t border-slate-100">
            {LOCALES.map((l) => (
              <a
                key={l}
                href={`/${l}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded border ${
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
