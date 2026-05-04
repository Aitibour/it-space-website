'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const tServices = useTranslations('services');
  const locale = useLocale();

  const navLinks = [
    { key: 'home' as const, href: `/${locale}` },
    { key: 'services' as const, href: `/${locale}/services` },
    { key: 'about' as const, href: `/${locale}/about` },
    { key: 'contact' as const, href: `/${locale}/contact` },
  ];

  const serviceLinks = [
    { key: 'consulting_title' as const, href: `/${locale}/services` },
    { key: 'security_title' as const, href: `/${locale}/services` },
    { key: 'cloud_title' as const, href: `/${locale}/services` },
    { key: 'digital_title' as const, href: `/${locale}/services` },
    { key: 'software_title' as const, href: `/${locale}/services` },
  ];

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo white compact={false} />
            <p className="text-slate-400 text-sm mt-5 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-white/5 hover:bg-[#00B4FF]/20 border border-white/10 hover:border-[#00B4FF]/40 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#00B4FF] transition-all"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 bg-white/5 hover:bg-[#00B4FF]/20 border border-white/10 hover:border-[#00B4FF]/40 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#00B4FF] transition-all"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-5">
              {t('quick_links')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-[#00B4FF] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 group-hover:bg-[#00B4FF] rounded-full transition-colors" />
                    {tNav(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-5">
              {t('services_title')}
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="text-slate-400 text-sm hover:text-[#00B4FF] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-600 group-hover:bg-[#00B4FF] rounded-full transition-colors" />
                    {tServices(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:contact@itspace.ma"
                className="flex items-center gap-3 text-slate-400 hover:text-[#00B4FF] transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/5 group-hover:bg-[#00B4FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Mail size={14} />
                </div>
                contact@itspace.ma
              </a>
              <a
                href="tel:+212539940000"
                className="flex items-center gap-3 text-slate-400 hover:text-[#00B4FF] transition-colors text-sm group"
              >
                <div className="w-8 h-8 bg-white/5 group-hover:bg-[#00B4FF]/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                  <Phone size={14} />
                </div>
                +212 539 94 00 00
              </a>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={14} />
                </div>
                Tanger, Morocco
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">{t('copyright')}</p>
          <div className="flex items-center gap-1 text-slate-500 text-xs">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
