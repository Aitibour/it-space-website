'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TypeWriter } from './TypeWriter';

const BUBBLES = [
  { label: 'Cybersecurity', delay: '0s' },
  { label: 'Cloud Solutions', delay: '1.5s' },
  { label: 'IT Consulting', delay: '0.8s' },
  { label: 'Digital Transformation', delay: '2s' },
  { label: 'Software Dev', delay: '0.3s' },
];

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const phrases = [
    t('phrase_consulting'),
    t('phrase_cyber'),
    t('phrase_digital'),
    t('phrase_cloud'),
    t('phrase_software'),
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 50%, #0D1B3E 100%)',
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)',
          backgroundSize: '38px 38px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full opacity-[0.08] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-cyan-400 rounded-full opacity-[0.06] blur-[100px] pointer-events-none" />

      {/* Diagonal accent */}
      <div
        className="absolute inset-y-0 right-0 w-2/5 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom-left, rgba(0,180,255,0.04) 0%, transparent 60%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-[64px] font-black leading-[1.05] mb-4">
              <span className="text-white block">{t('headline')}</span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(90deg, #00B4FF, #60C8FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {t('headline_accent')}
              </span>
            </h1>

            {/* Typing */}
            <div className="flex items-center gap-3 my-7">
              <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
              <p className="text-blue-200 text-lg font-medium">
                {t('typing_prefix')}{' '}
                <TypeWriter phrases={phrases} className="text-[#00B4FF] font-bold" />
              </p>
            </div>

            {/* Subheadline */}
            <p className="text-slate-300 text-lg leading-relaxed max-w-lg mb-10">
              {t('subheadline')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                style={{ background: '#00B4FF', color: '#0D1B3E' }}
              >
                {t('cta_primary')}
                <ArrowRight size={18} />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 border-2 border-blue-400/40 text-white hover:bg-blue-400/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                {t('cta_secondary')}
              </Link>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10">
              {(['stat_experience', 'stat_projects', 'stat_satisfaction'] as const).map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                  <span className="text-slate-300 text-sm font-medium">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: floating service bubbles */}
          <div className="hidden lg:flex flex-col gap-3.5 items-start pl-8">
            {BUBBLES.map(({ label, delay }, i) => (
              <div
                key={label}
                className="animate-float flex items-center gap-3 bg-white/[0.06] border border-white/[0.12] backdrop-blur-sm px-5 py-3 rounded-2xl text-white text-sm font-semibold select-none"
                style={{
                  animationDelay: delay,
                  marginLeft: i % 2 === 1 ? '40px' : '0px',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#00B4FF' }}
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-widest uppercase">{t('scroll')}</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
