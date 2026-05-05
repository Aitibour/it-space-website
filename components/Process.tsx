'use client';

import { useTranslations } from 'next-intl';
import { Search, Map, Rocket, HeartHandshake } from 'lucide-react';

const STEPS = [
  { icon: Search, color: '#00B4FF', num: '01' },
  { icon: Map, color: '#6366F1', num: '02' },
  { icon: Rocket, color: '#F59E0B', num: '03' },
  { icon: HeartHandshake, color: '#10B981', num: '04' },
] as const;

const KEYS = [
  { title: 'step_1_title', desc: 'step_1_desc' },
  { title: 'step_2_title', desc: 'step_2_desc' },
  { title: 'step_3_title', desc: 'step_3_desc' },
  { title: 'step_4_title', desc: 'step_4_desc' },
] as const;

export function Process() {
  const t = useTranslations('services');

  return (
    <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00B4FF] via-[#6366F1] to-[#10B981]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-5 h-px bg-[#00B4FF]" /> {t('process_title')} <span className="w-5 h-px bg-[#00B4FF]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-4">{t('process_subtitle')}</h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#00B4FF] via-[#6366F1] to-[#10B981] opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map(({ icon: Icon, color, num }, i) => (
              <div key={num} className="relative flex flex-col items-center text-center group">
                {/* Step number badge */}
                <div
                  className="relative w-28 h-28 rounded-3xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:-translate-y-2 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${color}18, ${color}08)`,
                    border: `1.5px solid ${color}30`,
                    boxShadow: `0 8px 32px ${color}18`,
                  }}
                >
                  {/* Number */}
                  <span
                    className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-white text-[10px] font-black flex items-center justify-center shadow-md"
                    style={{ background: color }}
                  >
                    {num}
                  </span>
                  <Icon size={36} strokeWidth={1.5} style={{ color }} />
                </div>

                <h3 className="text-[#0D1B3E] font-black text-lg mb-3">{t(KEYS[i].title)}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">{t(KEYS[i].desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
