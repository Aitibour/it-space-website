import { useTranslations } from 'next-intl';
import { Zap, ShieldCheck, Star } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  const values = [
    { key: 'value_innovation', icon: Zap },
    { key: 'value_security', icon: ShieldCheck },
    { key: 'value_excellence', icon: Star },
  ] as const;

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t('title')}</h2>
            <p className="text-[#3B82F6] font-semibold mb-6">{t('subtitle')}</p>
            <p className="text-slate-600 leading-relaxed mb-4">{t('body')}</p>
            <p className="text-slate-600 leading-relaxed mb-8">{t('mission')}</p>
            <div className="flex flex-wrap gap-3">
              {values.map(({ key, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-2 bg-blue-50 text-[#1E40AF] px-4 py-2 rounded-full text-sm font-semibold border border-blue-100"
                >
                  <Icon size={15} />
                  {t(key)}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF] to-[#3B82F6] rounded-2xl opacity-10" />
              <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-blue-200 rounded-xl" />
              <div className="absolute top-12 left-12 right-12 bottom-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <span className="text-7xl font-black text-[#1E40AF] opacity-20 select-none">IT</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#1E40AF] rounded-xl opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#3B82F6] rounded-lg opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
