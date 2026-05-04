import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');

  const subjectKeys = [
    'form_opt_consulting',
    'form_opt_security',
    'form_opt_project',
    'form_opt_digital',
    'form_opt_other',
  ] as const;

  return (
    <section id="contact" className="py-24 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
          <p className="text-slate-500">{t('subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#1E40AF] text-white rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">IT Space</h3>
              <p className="text-blue-200 text-sm mb-8">Tanger, Morocco</p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MapPin size={20} className="text-blue-300 mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{t('address')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={20} className="text-blue-300 shrink-0" />
                  <a
                    href={`tel:${t('phone').replace(/\s/g, '')}`}
                    className="text-sm hover:text-blue-200 transition-colors"
                  >
                    {t('phone')}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-blue-300 shrink-0" />
                  <a
                    href={`mailto:${t('email')}`}
                    className="text-sm hover:text-blue-200 transition-colors"
                  >
                    {t('email')}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-5 gap-2 opacity-20">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
              ))}
            </div>
          </div>

          <form
            action="mailto:contact@itspace.ma"
            method="post"
            encType="text/plain"
            className="bg-white rounded-2xl p-8 border border-slate-100 flex flex-col gap-4"
          >
            <input
              name="name"
              type="text"
              placeholder={t('form_name')}
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            />
            <input
              name="email"
              type="email"
              placeholder={t('form_email')}
              required
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
            />
            <select
              name="subject"
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow bg-white"
            >
              {subjectKeys.map((key) => (
                <option key={key} value={key}>
                  {t(key)}
                </option>
              ))}
            </select>
            <textarea
              name="message"
              placeholder={t('form_message')}
              required
              rows={5}
              className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow resize-none"
            />
            <button
              type="submit"
              className="bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md shadow-blue-100 mt-2"
            >
              {t('form_submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
