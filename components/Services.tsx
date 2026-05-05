import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Shield, Cloud, Zap, Code2, Cpu, type LucideIcon } from 'lucide-react';
import { SERVICES } from '@/lib/services-data';

const ICON_MAP: Record<string, LucideIcon> = { Lightbulb, Shield, Cloud, Zap, Code2, Cpu };

type Lang = 'fr' | 'en' | 'ar';

interface Props {
  preview?: boolean;
}

export function Services({ preview = false }: Props) {
  const t = useTranslations('services');
  const locale = useLocale();
  const lang = locale as Lang;

  const displayed = SERVICES;

  return (
    <section id="services" className={preview ? 'py-24 bg-white' : 'py-20 bg-[#F8FAFC]'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#00B4FF] text-sm font-bold uppercase tracking-widest mb-3">
            {preview ? 'What We Do' : 'Our Expertise'}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-4">{t('title')}</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">{t('subtitle')}</p>
        </div>

        {/* Cards — image background style */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((svc) => {
            const Icon = ICON_MAP[svc.iconName];
            return (
              <Link
                key={svc.slug}
                href={`/${locale}/services/${svc.slug}`}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer block"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${svc.image}')` }}
                />
                {/* Persistent dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0D1B3E]/60 to-[#0D1B3E]/20" />
                {/* Color tint on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: svc.color }}
                />
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                  style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${svc.color}CC, ${svc.color}66)`,
                      boxShadow: `0 0 20px ${svc.color}40`,
                    }}
                  >
                    <Icon size={22} className="text-white" strokeWidth={2} />
                  </div>

                  <h3 className="font-bold text-white text-base mb-1 drop-shadow">
                    {svc.title[lang]}
                  </h3>
                  <p className="text-[11px] font-semibold mb-2" style={{ color: svc.color }}>
                    {svc.short[lang]}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-white/15 hover:bg-white/25 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-colors duration-200 mt-1">
                    {t('learn_more')} <ArrowRight size={11} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all CTA */}
        {preview && (
          <div className="text-center mt-12">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 bg-[#0D1B3E] hover:bg-[#1E40AF] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              {t('view_all')}
              <ArrowRight size={17} />
            </Link>
          </div>
        )}

        {/* Process — shown only on full services page */}
        {!preview && (
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-3">
                {t('process_title')}
              </h2>
              <p className="text-slate-500 max-w-xl mx-auto">{t('process_subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {([1, 2, 3, 4] as const).map((n) => (
                <div key={n} className="relative">
                  {n < 4 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(100%+0px)] w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent z-0" />
                  )}
                  <div className="bg-white rounded-2xl p-6 border border-slate-100 relative z-10 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#00B4FF] flex items-center justify-center text-white font-black text-xl mb-5 shadow-lg shadow-blue-200">
                      {n}
                    </div>
                    <h3 className="font-bold text-[#0D1B3E] mb-2">
                      {t(`step_${n}_title` as Parameters<typeof t>[0])}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {t(`step_${n}_desc` as Parameters<typeof t>[0])}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
