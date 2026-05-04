'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CtaBanner() {
  const t = useTranslations('cta');
  const locale = useLocale();

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #1E40AF 0%, #0D1B3E 60%, #00B4FF 200%)' }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="absolute right-0 top-0 w-80 h-80 bg-cyan-400 rounded-full opacity-10 blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t('title')}</h2>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">{t('subtitle')}</p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-xl shadow-cyan-500/20"
          style={{ background: '#00B4FF', color: '#0D1B3E' }}
        >
          {t('button')}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
