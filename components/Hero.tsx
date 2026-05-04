'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { TypeWriter } from './TypeWriter';

const SLIDES = [
  '/BG1.png',
  '/BG2.png',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=90&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=90&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=90&auto=format&fit=crop',
];

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const phrases = [
    t('phrase_consulting'),
    t('phrase_cyber'),
    t('phrase_digital'),
    t('phrase_cloud'),
    t('phrase_software'),
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen slideshow — images at 100%, no filter */}
      {SLIDES.map((url, i) => (
        <div
          key={url}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${url}')`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      {/* Left-side gradient only — keeps right side image visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      {/* Bottom gradient for slide indicators */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 w-full">
        <div className="max-w-2xl">
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-[64px] font-black leading-[1.05] mb-4">
            <span className="text-white block" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {t('headline')}
            </span>
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

          {/* Typing effect */}
          <div className="flex items-center gap-3 my-7">
            <div className="w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent rounded-full" />
            <p className="text-blue-100 text-lg font-medium drop-shadow">
              {t('typing_prefix')}{' '}
              <TypeWriter phrases={phrases} className="text-[#00B4FF] font-bold" />
            </p>
          </div>

          {/* Subheadline */}
          <p
            className="text-white/85 text-lg leading-relaxed max-w-lg mb-8"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
          >
            {t('subheadline')}
          </p>

          {/* CTAs — side by side */}
          <div className="flex flex-wrap gap-4">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: '#00B4FF',
                color: '#0D1B3E',
                boxShadow: '0 8px 32px rgba(0,180,255,0.35)',
              }}
            >
              {t('cta_primary')}
              <ArrowRight size={18} />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
            >
              {t('cta_secondary')}
            </Link>
          </div>

          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/20">
            {(['stat_experience', 'stat_projects', 'stat_satisfaction'] as const).map((key) => (
              <div key={key} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
                <span className="text-white/85 text-sm font-medium drop-shadow">{t(key)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-1.5 bg-[#00B4FF]'
                : 'w-2 h-1.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50 z-20">
        <span className="text-[9px] tracking-widest uppercase">{t('scroll')}</span>
        <ChevronDown size={14} className="animate-bounce" />
      </div>
    </section>
  );
}
