import { useTranslations } from 'next-intl';
import { AnimatedCounter } from './AnimatedCounter';

export function Stats() {
  const t = useTranslations('stats');

  const items = [
    {
      value: parseInt(t('years_value')),
      suffix: t('years_suffix'),
      label: t('years_label'),
      color: '#00B4FF',
    },
    {
      value: parseInt(t('projects_value')),
      suffix: t('projects_suffix'),
      label: t('projects_label'),
      color: '#60C8FF',
    },
    {
      value: parseInt(t('clients_value')),
      suffix: t('clients_suffix'),
      label: t('clients_label'),
      color: '#00B4FF',
    },
    {
      value: parseInt(t('satisfaction_value')),
      suffix: t('satisfaction_suffix'),
      label: t('satisfaction_label'),
      color: '#60C8FF',
    },
  ];

  return (
    <section
      className="py-12"
      style={{ background: 'linear-gradient(90deg, #0D1B3E 0%, #1E3A8A 50%, #0D1B3E 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {items.map(({ value, suffix, label, color }) => (
            <div key={label} className="flex flex-col items-center py-8 px-4">
              <span
                className="text-4xl md:text-5xl font-black mb-1"
                style={{ color }}
              >
                <AnimatedCounter end={value} suffix={suffix} />
              </span>
              <span className="text-slate-300 text-sm font-medium text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
