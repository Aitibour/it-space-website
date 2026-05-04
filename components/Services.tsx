import { useTranslations } from 'next-intl';
import { Lightbulb, ClipboardList, Shield, Code2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SERVICES: { key: string; icon: LucideIcon; titleKey: string; descKey: string }[] = [
  { key: 'consulting', icon: Lightbulb, titleKey: 'consulting_title', descKey: 'consulting_desc' },
  { key: 'project', icon: ClipboardList, titleKey: 'project_title', descKey: 'project_desc' },
  { key: 'security', icon: Shield, titleKey: 'security_title', descKey: 'security_desc' },
  { key: 'digital', icon: Code2, titleKey: 'digital_title', descKey: 'digital_desc' },
];

export function Services() {
  const t = useTranslations('services');

  return (
    <section id="services" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-500 max-w-xl mx-auto">{t('subtitle')}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(({ key, icon: Icon, titleKey, descKey }) => (
            <div
              key={key}
              className="bg-white rounded-xl p-6 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1E40AF] transition-colors duration-200">
                <Icon
                  size={22}
                  className="text-[#1E40AF] group-hover:text-white transition-colors duration-200"
                />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base">
                {t(
                  titleKey as
                    | 'consulting_title'
                    | 'project_title'
                    | 'security_title'
                    | 'digital_title',
                )}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {t(
                  descKey as
                    | 'consulting_desc'
                    | 'project_desc'
                    | 'security_desc'
                    | 'digital_desc',
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
