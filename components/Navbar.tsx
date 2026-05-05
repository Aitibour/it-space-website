'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Close dropdown when navigating */
  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  /* Close dropdown when clicking outside */
  useEffect(() => {
    if (!servicesOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [servicesOpen]);

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === `/${locale}` : pathname.startsWith(href);
  const isServicesActive = pathname.startsWith(`/${locale}/services`);

  const activeClass = scrolled ? 'text-[#1E40AF]' : 'text-[#00B4FF]';
  const inactiveClass = scrolled ? 'text-slate-700 hover:text-[#1E40AF]' : 'text-white/85 hover:text-white';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        <Link href={`/${locale}`} aria-label="IT Space Home">
          <Logo white={!scrolled} />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-7">
          <Link href={`/${locale}`} className={`text-sm font-semibold transition-colors relative ${isActive(`/${locale}`) ? activeClass : inactiveClass}`}>
            {t('home')}
            {isActive(`/${locale}`) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4FF] rounded-full" />}
          </Link>

          {/* Services dropdown — click to open */}
          <div ref={dropRef} className="relative">
            <button
              className={`flex items-center gap-1.5 text-sm font-semibold transition-colors relative px-1 py-0.5 rounded ${
                servicesOpen
                  ? (scrolled ? 'text-[#1E40AF]' : 'text-[#00B4FF]')
                  : isServicesActive ? activeClass : inactiveClass
              }`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              {t('services')}
              <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              {isServicesActive && !servicesOpen && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4FF] rounded-full" />
              )}
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                {/* Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100 bg-[#F8FAFC]">
                  <p className="text-[#0D1B3E] font-black text-sm tracking-tight uppercase tracking-widest text-xs">
                    {t('services')}
                  </p>
                  <Link
                    href={`/${locale}/services`}
                    onClick={() => setServicesOpen(false)}
                    className="text-[#00B4FF] text-xs font-bold hover:underline flex items-center gap-1"
                  >
                    View all <ArrowRight size={11} />
                  </Link>
                </div>

                {/* 2-column service grid */}
                <div className="grid grid-cols-2 gap-px bg-slate-100">
                  {SERVICES.map((svc) => {
                    const Icon = ICON_MAP[svc.iconName];
                    return (
                      <Link
                        key={svc.slug}
                        href={`/${locale}/services/${svc.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className="flex items-start gap-3 p-4 bg-white hover:bg-[#F0F7FF] group transition-colors duration-150"
                      >
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `linear-gradient(135deg, ${svc.color}DD, ${svc.color}66)` }}
                        >
                          <Icon size={18} className="text-white" strokeWidth={1.75} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[#0D1B3E] font-bold text-sm mb-0.5 group-hover:text-[#1E40AF] transition-colors flex items-center gap-1">
                            {svc.title[locale]}
                            <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-0.5" />
                          </p>
                          <p className="text-slate-400 text-xs leading-snug line-clamp-1">{svc.short[locale]}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 bg-[#F8FAFC] border-t border-slate-100 flex items-center justify-between">
                  <p className="text-slate-400 text-xs">Not sure which service fits?</p>
                  <Link
                    href={`/${locale}/contact`}
                    onClick={() => setServicesOpen(false)}
                    className="inline-flex items-center gap-1.5 bg-[#0D1B3E] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-[#1E40AF] transition-colors"
                  >
                    Free Consultation <ArrowRight size={11} />
                  </Link>
                </div>
              </div>
            )}
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

        {/* Desktop right controls */}
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

      {/* ── Mobile menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-[90vh] overflow-y-auto' : 'max-h-0'}`}
        style={{ background: '#0A1628' }}
      >
        <div className="px-4 py-4 flex flex-col gap-0.5">
          <Link href={`/${locale}`} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-white/85 hover:text-white font-semibold text-sm rounded-xl hover:bg-white/5 transition-colors">
            {t('home')}
          </Link>

          {/* Services — always expanded on mobile */}
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
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(135deg, ${svc.color}CC, ${svc.color}55)` }}
                    >
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
                  <a href={`/${l}`} className={`px-2 py-1 rounded ${locale === l ? 'text-[#00B4FF]' : 'text-white/40 hover:text-white/70'}`}>
                    {l.toUpperCase()}
                  </a>
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
