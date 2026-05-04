'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight, Award, Briefcase, ThumbsUp } from 'lucide-react';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#1E40AF 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-60" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-28 text-center w-full">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1E40AF] text-xs font-semibold px-4 py-1.5 rounded-full mb-8 border border-blue-100">
          <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full" />
          Tanger, Morocco
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6 max-w-4xl mx-auto">
          {t('title')}
        </h1>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('services')}
            className="inline-flex items-center justify-center gap-2 bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-200"
          >
            {t('cta_primary')}
            <ArrowRight size={17} />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center border-2 border-[#1E40AF] text-[#1E40AF] px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('cta_secondary')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto">
          {(
            [
              { icon: Award, key: 'stat_experience' },
              { icon: Briefcase, key: 'stat_projects' },
              { icon: ThumbsUp, key: 'stat_satisfaction' },
            ] as const
          ).map(({ icon: Icon, key }) => (
            <div
              key={key}
              className="flex flex-col items-center gap-2 p-6 bg-white rounded-xl border border-slate-100 shadow-sm"
            >
              <Icon size={22} className="text-[#3B82F6]" />
              <span className="font-bold text-slate-800 text-sm text-center">{t(key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
