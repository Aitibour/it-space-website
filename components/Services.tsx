import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Lightbulb, Shield, Cloud, Zap, Code2, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SERVICE_DEFS: {
  key: string;
  icon: LucideIcon;
  titleKey: string;
  shortKey: string;
  descKey: string;
  color: string;
  image: string;
}[] = [
  {
    key: 'consulting',
    icon: Lightbulb,
    titleKey: 'consulting_title',
    shortKey: 'consulting_short',
    descKey: 'consulting_desc',
    color: '#F59E0B',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  },
  {
    key: 'security',
    icon: Shield,
    titleKey: 'security_title',
    shortKey: 'security_short',
    descKey: 'security_desc',
    color: '#EF4444',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374173516?w=800&q=80&auto=format&fit=crop',
  },
  {
    key: 'cloud',
    icon: Cloud,
    titleKey: 'cloud_title',
    shortKey: 'cloud_short',
    descKey: 'cloud_desc',
    color: '#00B4FF',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80&auto=format&fit=crop',
  },
  {
    key: 'digital',
    icon: Zap,
    titleKey: 'digital_title',
    shortKey: 'digital_short',
    descKey: 'digital_desc',
    color: '#8B5CF6',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop',
  },
  {
    key: 'software',
    icon: Code2,
    titleKey: 'software_title',
    shortKey: 'software_short',
    descKey: 'software_desc',
    color: '#10B981',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop',
  },
];

interface Props {
  preview?: boolean;
}

export function Services({ preview = false }: Props) {
  const t = useTranslations('services');
  const locale = useLocale();

  const displayed = preview ? SERVICE_DEFS.slice(0, 4) : SERVICE_DEFS;

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
        <div
          className={`grid gap-5 ${
            displayed.length === 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {displayed.map(({ key, icon: Icon, titleKey, shortKey, descKey, color, image }) => (
            <div
              key={key}
              className="group relative rounded-2xl overflow-hidden h-72 cursor-default"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${image}')` }}
              />
              {/* Persistent dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0D1B3E]/60 to-[#0D1B3E]/20" />
              {/* Color tint on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-400"
                style={{ background: color }}
              />
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${color}CC, ${color}66)`,
                    boxShadow: `0 0 20px ${color}40`,
                  }}
                >
                  <Icon size={22} className="text-white" strokeWidth={2} />
                </div>

                <h3 className="font-bold text-white text-base mb-1 drop-shadow">
                  {t(titleKey as Parameters<typeof t>[0])}
                </h3>
                <p className="text-[11px] font-semibold mb-2" style={{ color }}>
                  {t(shortKey as Parameters<typeof t>[0])}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(descKey as Parameters<typeof t>[0])}
                </p>
              </div>
            </div>
          ))}
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
