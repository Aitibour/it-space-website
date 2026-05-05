'use client';

import { useState, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ChevronDown, ArrowRight, Lightbulb, Shield, Cloud, Zap, Code2, Cpu } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Logo } from './Logo';
import { SERVICES } from '@/lib/services-data';

const LOCALES = ['fr', 'en', 'ar'] as const;
type Lang = 'fr' | 'en' | 'ar';
const ICON_MAP: Record<string, LucideIcon> = { Lightbulb, Shield, Cloud, Zap, Code2, Cpu };

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale() as Lang;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === `/${locale}` : pathname.startsWith(href);
  const isServicesActive = pathname.startsWith(`/${locale}/services`);
  const activeClass = scrolled ? 'text-[#1E40AF]' : 'text-[#00B4FF]';
  const inactiveClass = scrolled ? 'text-slate-700 hover:text-[#1E40AF]' : 'text-white/90 hover:text-white';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>

      {/* ── Row 1: Main nav ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href={`/${locale}`} aria-label="IT Space Home">
          <Logo white={!scrolled} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href={`/${locale}`} className={`text-sm font-semibold transition-colors relative ${isActive(`/${locale}`) ? activeClass : inactiveClass}`}>
            {t('home')}
            {isActive(`/${locale}`) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4FF] rounded-full" />}
          </Link>

          {/* Services with CSS-hover dropdown — no JS needed */}
          <div className="relative group">
            <Link
              href={`/${locale}/services`}
              className={`flex items-center gap-1 text-sm font-semibold transition-colors relative ${isServicesActive ? activeClass : inactiveClass}`}
            >
              {t('services')}
              <ChevronDown size={13} className="transition-transform duration-200 group-hover:rotate-180" />
              {isServicesActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4FF] rounded-full" />}
            </Link>

            {/* Invisible hover bridge so dropdown doesn't close in the gap */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent" />

            {/* Dropdown — pure CSS group-hover, no JS */}
            <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden
                            opacity-0 invisible translate-y-2
                            group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                            transition-all duration-200 z-50">

              <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Our Services</span>
                <Link href={`/${locale}/services`} className="text-[#00B4FF] text-xs font-bold hover:underline flex items-center gap-1">
                  View all <ArrowRight size={10} />
                </Link>
              </div>

              <div className="grid grid-cols-2">
                {SERVICES.map((svc, i) => {
                  const Icon = ICON_MAP[svc.iconName];
                  return (
                    <Link
                      key={svc.slug}
                      href={`/${locale}/services/${svc.slug}`}
                      className={`flex items-center gap-3 px-4 py-3.5 hover:bg-blue-50 group/item transition-colors ${i % 2 === 0 ? 'border-r border-slate-100' : ''} ${i < SERVICES.length - 2 ? 'border-b border-slate-100' : ''}`}
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${svc.color}DD, ${svc.color}77)` }}
                      >
                        <Icon size={16} className="text-white" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[#0D1B3E] font-bold text-sm group-hover/item:text-[#1E40AF] transition-colors">{svc.title[locale]}</p>
                        <p className="text-slate-400 text-xs truncate">{svc.short[locale]}</p>
                      </div>
                      <ArrowRight size={13} className="ml-auto text-slate-200 group-hover/item:text-[#00B4FF] flex-shrink-0 transition-colors" />
                    </Link>
                  );
                })}
              </div>

              <div className="px-5 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-slate-400 text-xs">Need guidance on the right service?</span>
                <Link href={`/${locale}/contact`} className="inline-flex items-center gap-1.5 bg-[#0D1B3E] hover:bg-[#1E40AF] text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors">
                  Free Consultation <ArrowRight size={10} />
                </Link>
              </div>
            </div>
          </div>

          {[
            { key: 'about' as const, href: `/${locale}/about` },
            { key: 'contact' as const, href: `/${locale}/contact` },
          ].map(({ key, href }) => (
            <Link key={key} href={href} className={`text-sm font-semibold transition-colors relative ${isActive(href) ? activeClass : inactiveClass}`}>
              {t(key)}
              {isActive(href) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4FF] rounded-full" />}
            </Link>
          ))}
        </nav>

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-0.5 text-[11px] font-bold">
            {LOCALES.map((l, i) => (
              <span key={l} className="flex items-center">
                <a href={`/${l}`} className={`px-2 py-1 rounded transition-colors ${locale === l ? (scrolled ? 'text-[#1E40AF] bg-blue-50' : 'text-[#00B4FF] bg-white/10') : (scrolled ? 'text-slate-400 hover:text-slate-700' : 'text-white/50 hover:text-white/80')}`}>
                  {l.toUpperCase()}
                </a>
                {i < LOCALES.length - 1 && <span className={scrolled ? 'text-slate-200' : 'text-white/20'}>·</span>}
              </span>
            ))}
          </div>
          <Link
            href={`/${locale}/contact`}
            className="text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={scrolled
              ? { background: '#0D1B3E', color: '#fff' }
              : { background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }
            }
          >
            {t('cta_nav')}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Row 2: Services quick-links strip (always visible) ── */}
      <div className={`hidden md:block transition-all duration-300 ${scrolled ? 'bg-white border-b border-slate-100' : 'bg-white/5 border-b border-white/10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-2 h-9 overflow-x-auto">
          <span className={`text-[10px] font-black uppercase tracking-widest flex-shrink-0 ${scrolled ? 'text-slate-400' : 'text-white/40'}`}>
            Quick links:
          </span>
          {SERVICES.map((svc) => {
            const active = pathname === `/${locale}/services/${svc.slug}`;
            return (
              <Link
                key={svc.slug}
                href={`/${locale}/services/${svc.slug}`}
                className={`text-[11px] font-semibold flex-shrink-0 px-2.5 py-0.5 rounded-full transition-all ${
                  active
                    ? 'bg-[#00B4FF] text-white'
                    : scrolled
                      ? 'text-slate-500 hover:text-[#1E40AF] hover:bg-blue-50'
                      : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {svc.title[locale]}
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[90vh] overflow-y-auto' : 'max-h-0'}`} style={{ background: '#0A1628' }}>
        <div className="px-4 py-4 flex flex-col gap-0.5">
          <Link href={`/${locale}`} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-white/85 hover:text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-colors">
            {t('home')}
          </Link>

          <div className="mt-1">
            <div className="px-4 py-2 flex items-center justify-between">
              <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{t('services')}</span>
              <Link href={`/${locale}/services`} onClick={() => setMobileOpen(false)} className="text-[#00B4FF] text-[10px] font-bold flex items-center gap-1">
                View all <ArrowRight size={10} />
              </Link>
            </div>
            <div className="flex flex-col gap-0.5">
              {SERVICES.map((svc) => {
                const Icon = ICON_MAP[svc.iconName];
                return (
                  <Link
                    key={svc.slug}
                    href={`/${locale}/services/${svc.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-white/70 hover:text-white text-sm rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${svc.color}CC, ${svc.color}55)` }}>
                      <Icon size={13} className="text-white" strokeWidth={2} />
                    </div>
                    {svc.title[locale]}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="mt-1 border-t border-white/5 pt-1">
            <Link href={`/${locale}/about`} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-white/85 hover:text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-colors block">
              {t('about')}
            </Link>
            <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-white/85 hover:text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-colors block">
              {t('contact')}
            </Link>
          </div>

          <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2">
            <div className="flex items-center gap-0.5 text-[11px] font-bold">
              {LOCALES.map((l, i) => (
                <span key={l} className="flex items-center">
                  <a href={`/${l}`} className={`px-2 py-1 rounded ${locale === l ? 'text-[#00B4FF]' : 'text-white/40 hover:text-white/70'}`}>{l.toUpperCase()}</a>
                  {i < LOCALES.length - 1 && <span className="text-white/20">·</span>}
                </span>
              ))}
            </div>
            <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)} className="bg-[#00B4FF] text-[#0D1B3E] font-bold text-xs px-4 py-2 rounded-lg">
              {t('cta_nav')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
