'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Target, Lightbulb, Settings2, ShieldCheck, TrendingUp, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PILLARS: { icon: LucideIcon; gradient: string; glow: string; accent: string }[] = [
  { icon: Target,       gradient: 'from-[#F59E0B] to-[#D97706]', glow: '#F59E0B', accent: '#F59E0B' },
  { icon: Lightbulb,   gradient: 'from-[#00B4FF] to-[#0EA5E9]', glow: '#00B4FF', accent: '#00B4FF' },
  { icon: Settings2,   gradient: 'from-[#8B5CF6] to-[#7C3AED]', glow: '#8B5CF6', accent: '#8B5CF6' },
  { icon: ShieldCheck, gradient: 'from-[#EF4444] to-[#DC2626]', glow: '#EF4444', accent: '#EF4444' },
  { icon: TrendingUp,  gradient: 'from-[#10B981] to-[#059669]', glow: '#10B981', accent: '#10B981' },
];

const STATS = [
  { value: '10+', label: 'Years of Expertise' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
];

export function WhyUs() {
  const t = useTranslations('why');
  const locale = useLocale();

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #060e22 0%, #0D1B3E 50%, #0a1830 100%)' }}
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[150px]"
        style={{ background: 'radial-gradient(circle, #00B4FF, #1E40AF)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-6 h-px bg-[#00B4FF]" />
            Our Strengths
            <span className="w-6 h-px bg-[#00B4FF]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t('title')}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">{t('subtitle')}</p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {STATS.map((s) => (
            <div key={s.value} className="text-center">
              <div
                className="text-3xl md:text-4xl font-black mb-1"
                style={{
                  background: 'linear-gradient(90deg, #00B4FF, #60C8FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {s.value}
              </div>
              <div className="text-slate-400 text-xs font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Pillars — 3 + 2 layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {([1, 2, 3] as const).map((n) => {
            const { icon: Icon, gradient, glow, accent } = PILLARS[n - 1];
            return (
              <div
                key={n}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/20 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Decorative number */}
                <span
                  className="absolute top-4 right-5 text-7xl font-black opacity-[0.07] select-none leading-none"
                  style={{ color: accent }}
                >
                  {String(n).padStart(2, '0')}
                </span>
                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 24px ${glow}40` }}
                >
                  <Icon size={26} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">
                  {t(`pillar_${n}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`pillar_${n}_desc` as Parameters<typeof t>[0])}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:w-2/3 lg:mx-auto">
          {([4, 5] as const).map((n) => {
            const { icon: Icon, gradient, glow, accent } = PILLARS[n - 1];
            return (
              <div
                key={n}
                className="group relative bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/20 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span
                  className="absolute top-4 right-5 text-7xl font-black opacity-[0.07] select-none leading-none"
                  style={{ color: accent }}
                >
                  {String(n).padStart(2, '0')}
                </span>
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 24px ${glow}40` }}
                >
                  <Icon size={26} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">
                  {t(`pillar_${n}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(`pillar_${n}_desc` as Parameters<typeof t>[0])}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2.5 font-bold px-8 py-3.5 rounded-xl text-[#0D1B3E] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
            style={{
              background: 'linear-gradient(90deg, #00B4FF, #60C8FF)',
              boxShadow: '0 8px 32px rgba(0,180,255,0.3)',
            }}
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
