'use client';

import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SECTIONS = ['home', 'services', 'about', 'contact'] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-slate-900 text-white py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo white />
            <p className="text-slate-400 text-sm mt-4 leading-relaxed max-w-xs">{t('tagline')}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              {t('quick_links')}
            </h4>
            <ul className="flex flex-col gap-2">
              {SECTIONS.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo(s)}
                    className="text-slate-400 text-sm hover:text-white transition-colors text-start"
                  >
                    {tNav(s)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300">
              Contact
            </h4>
            <div className="flex flex-col gap-1.5 text-slate-400 text-sm mb-5">
              <span>contact@itspace.ma</span>
              <span>+212 539 94 00 00</span>
              <span>Tanger, Morocco</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="text-slate-500 hover:text-white transition-colors"
              >
                <XIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-xs">
          {t('copyright')}
        </div>
      </div>
    </footer>
  );
}
