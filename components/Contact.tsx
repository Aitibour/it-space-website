import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface Props {
  showMap?: boolean;
}

export function Contact({ showMap = false }: Props) {
  const t = useTranslations('contact');

  const subjects = [
    'form_opt_consulting',
    'form_opt_security',
    'form_opt_cloud',
    'form_opt_digital',
    'form_opt_software',
    'form_opt_other',
  ] as const;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        {!showMap && (
          <div className="text-center mb-14">
            <span className="inline-block text-[#00B4FF] text-sm font-bold uppercase tracking-widest mb-3">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-4">{t('title')}</h2>
            <p className="text-slate-500 text-lg">{t('subtitle')}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact card */}
            <div
              className="rounded-2xl p-7 text-white flex-1"
              style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1E3A8A 100%)' }}
            >
              <h3 className="text-xl font-black mb-1">IT Space</h3>
              <p className="text-cyan-300 text-sm mb-8 font-medium">Solutions &amp; Consulting</p>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-0.5">
                      Address
                    </p>
                    <p className="text-sm text-white">{t('address')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-0.5">
                      Phone
                    </p>
                    <a
                      href={`tel:${t('phone').replace(/\s/g, '')}`}
                      className="text-sm text-white hover:text-cyan-300 transition-colors"
                    >
                      {t('phone')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-0.5">
                      Email
                    </p>
                    <a
                      href={`mailto:${t('email')}`}
                      className="text-sm text-white hover:text-cyan-300 transition-colors"
                    >
                      {t('email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider mb-1">
                      {t('office_hours')}
                    </p>
                    <p className="text-sm text-white">{t('hours_weekday')}</p>
                    <p className="text-sm text-white">{t('hours_saturday')}</p>
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="mt-8 grid grid-cols-6 gap-1.5 opacity-15">
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
                ))}
              </div>
            </div>

            {/* Google Map */}
            {showMap && (
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <p className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border-b border-slate-100">
                  {t('map_title')}
                </p>
                <iframe
                  src="https://maps.google.com/maps?q=Tanger,Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IT Space location — Tanger, Morocco"
                />
              </div>
            )}
          </div>

          {/* Form */}
          <form
            action="mailto:contact@itspace.ma"
            method="post"
            encType="text/plain"
            className="lg:col-span-3 bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder={t('form_name')}
                required
                className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/50 focus:border-[#00B4FF] transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder={t('form_email')}
                required
                className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/50 focus:border-[#00B4FF] transition-all"
              />
            </div>

            <input
              name="company"
              type="text"
              placeholder={t('form_company')}
              className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/50 focus:border-[#00B4FF] transition-all"
            />

            <select
              name="subject"
              className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/50 focus:border-[#00B4FF] transition-all"
            >
              {subjects.map((key) => (
                <option key={key} value={key}>
                  {t(key)}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder={t('form_message')}
              required
              rows={6}
              className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4FF]/50 focus:border-[#00B4FF] transition-all resize-none"
            />

            <button
              type="submit"
              className="bg-[#0D1B3E] hover:bg-[#1E40AF] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 mt-2"
            >
              {t('form_submit')}
            </button>
          </form>
        </div>

        {/* Map below on contact page */}
        {showMap && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm lg:hidden">
            <p className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border-b border-slate-100">
              {t('map_title')}
            </p>
            <iframe
              src="https://maps.google.com/maps?q=Tanger,Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="IT Space location — Tanger, Morocco"
            />
          </div>
        )}
      </div>
    </section>
  );
}
