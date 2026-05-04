import { useTranslations } from 'next-intl';
import { Target, Lightbulb, Settings2, ShieldCheck, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const PILLARS: { icon: LucideIcon; gradient: string; glow: string }[] = [
  { icon: Target,      gradient: 'from-[#F59E0B] to-[#D97706]', glow: '#F59E0B' },
  { icon: Lightbulb,  gradient: 'from-[#00B4FF] to-[#0EA5E9]', glow: '#00B4FF' },
  { icon: Settings2,  gradient: 'from-[#8B5CF6] to-[#7C3AED]', glow: '#8B5CF6' },
  { icon: ShieldCheck, gradient: 'from-[#EF4444] to-[#DC2626]', glow: '#EF4444' },
  { icon: TrendingUp, gradient: 'from-[#10B981] to-[#059669]', glow: '#10B981' },
];

export function WhyUs() {
  const t = useTranslations('why');

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 100%)' }}
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-[0.07] blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#00B4FF] text-sm font-bold uppercase tracking-widest mb-3">
            Our Strengths
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{t('title')}</h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {([1, 2, 3, 4, 5] as const).map((n) => {
            const { icon: Icon, gradient, glow } = PILLARS[n - 1];
            return (
              <div
                key={n}
                className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ '--glow': glow } as React.CSSProperties}
              >
                {/* Pro gradient icon container */}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: `0 8px 24px ${glow}40` }}
                >
                  <Icon size={28} className="text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">
                  {t(`pillar_${n}_title` as Parameters<typeof t>[0])}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {t(`pillar_${n}_desc` as Parameters<typeof t>[0])}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
