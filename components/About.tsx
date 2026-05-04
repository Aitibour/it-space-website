import { useTranslations } from 'next-intl';
import { Zap, ShieldCheck, Star, Eye, Target } from 'lucide-react';

interface Props {
  preview?: boolean;
}

export function About({ preview = false }: Props) {
  const t = useTranslations('about');

  const values = [
    { key: 'value_innovation' as const, descKey: 'value_innovation_desc' as const, icon: Zap, gradient: 'from-[#F59E0B] to-[#D97706]', glow: '#F59E0B' },
    { key: 'value_security' as const, descKey: 'value_security_desc' as const, icon: ShieldCheck, gradient: 'from-[#EF4444] to-[#DC2626]', glow: '#EF4444' },
    { key: 'value_excellence' as const, descKey: 'value_excellence_desc' as const, icon: Star, gradient: 'from-[#8B5CF6] to-[#7C3AED]', glow: '#8B5CF6' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Company story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block text-[#00B4FF] text-sm font-bold uppercase tracking-widest mb-3">
              {t('story_title')}
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-2">{t('title')}</h2>
            <p className="text-[#00B4FF] font-semibold mb-6">{t('subtitle')}</p>
            <p className="text-slate-600 leading-relaxed mb-4 text-[15px]">{t('body')}</p>
            <p className="text-slate-600 leading-relaxed text-[15px]">{t('mission')}</p>
          </div>

          {/* Decorative visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-200 animate-[spin_30s_linear_infinite]" />
              {/* Inner layers */}
              <div
                className="absolute inset-6 rounded-2xl opacity-10"
                style={{ background: 'linear-gradient(135deg, #1E40AF, #00B4FF)' }}
              />
              <div className="absolute inset-8 border border-blue-200 rounded-xl" />
              <div className="absolute inset-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center shadow-inner">
                <span
                  className="text-6xl font-black select-none"
                  style={{
                    background: 'linear-gradient(135deg, #0D1B3E, #1E40AF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  IT
                </span>
              </div>
              {/* Floating accent squares */}
              <div
                className="absolute -top-3 -right-3 w-10 h-10 rounded-xl shadow-lg animate-float"
                style={{ background: 'linear-gradient(135deg, #1E40AF, #00B4FF)' }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-7 h-7 rounded-lg shadow-md animate-float-delay"
                style={{ background: '#00B4FF' }}
              />
            </div>
          </div>
        </div>

        {/* Mission / Vision */}
        {!preview && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {(
              [
                { titleKey: 'mission_title' as const, bodyKey: 'mission' as const, icon: Target, grad: 'from-[#1E40AF] to-[#00B4FF]' },
                { titleKey: 'vision_title' as const, bodyKey: 'vision' as const, icon: Eye, grad: 'from-[#7C3AED] to-[#00B4FF]' },
              ]
            ).map(({ titleKey, bodyKey, icon: Icon, grad }) => (
              <div
                key={titleKey}
                className="rounded-2xl p-8 text-white relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #0D1B3E, #0f2456)' }}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-lg`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-3">{t(titleKey)}</h3>
                <p className="text-slate-300 leading-relaxed text-sm">{t(bodyKey)}</p>
              </div>
            ))}
          </div>
        )}

        {/* Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black text-[#0D1B3E]">{t('values_title')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ key, descKey, icon: Icon, gradient, glow }) => (
              <div
                key={key}
                className="group bg-[#F8FAFC] hover:bg-white rounded-2xl p-7 border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                  style={{ boxShadow: `0 6px 20px ${glow}40` }}
                >
                  <Icon size={24} className="text-white" strokeWidth={1.75} />
                </div>
                <h4 className="font-bold text-[#0D1B3E] text-base mb-2">{t(key)}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
