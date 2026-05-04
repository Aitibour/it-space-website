'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react';

interface Props { showMap?: boolean }

type Field = 'name' | 'email' | 'company' | 'subject' | 'message';
type Errors = Partial<Record<Field, string>>;

const SUBJECTS = ['form_opt_consulting', 'form_opt_security', 'form_opt_cloud', 'form_opt_digital', 'form_opt_software', 'form_opt_other'] as const;

function validate(fields: Record<Field, string>): Errors {
  const e: Errors = {};
  if (!fields.name.trim()) e.name = 'Name is required';
  if (!fields.email.trim()) e.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Invalid email address';
  if (!fields.message.trim()) e.message = 'Message is required';
  else if (fields.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
  return e;
}

export function Contact({ showMap = false }: Props) {
  const t = useTranslations('contact');

  const [fields, setFields] = useState<Record<Field, string>>({
    name: '', email: '', company: '', subject: SUBJECTS[0], message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const set = (key: Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    if (touched[key]) setErrors((prev) => { const next = { ...prev }; delete next[key]; return next; });
  };

  const blur = (key: Field) => () => {
    setTouched((t) => ({ ...t, [key]: true }));
    const errs = validate({ ...fields });
    setErrors((prev) => ({ ...prev, ...(errs[key] ? { [key]: errs[key] } : {}) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, company: true, subject: true, message: true };
    setTouched(allTouched);
    const errs = validate(fields);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');
    const subject = encodeURIComponent(`[IT Space] ${fields.subject} — ${fields.name}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nCompany: ${fields.company || 'N/A'}\nService: ${fields.subject}\n\n${fields.message}`
    );
    window.location.href = `mailto:contact@itspace.ma?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus('success'), 800);
  };

  const inputBase = 'border rounded-xl px-4 py-3 text-sm transition-all outline-none w-full bg-white';
  const inputNormal = `${inputBase} border-slate-200 focus:ring-2 focus:ring-[#00B4FF]/40 focus:border-[#00B4FF]`;
  const inputError = `${inputBase} border-red-300 bg-red-50/50 focus:ring-2 focus:ring-red-200 focus:border-red-400`;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {!showMap && (
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-5 h-px bg-[#00B4FF]" /> Contact <span className="w-5 h-px bg-[#00B4FF]" />
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-4">{t('title')}</h2>
            <p className="text-slate-500 text-lg">{t('subtitle')}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── Info column ── */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl p-7 text-white flex-1 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #1E3A8A 100%)' }}>
              {/* decorative glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-10 blur-[80px]" style={{ background: '#00B4FF' }} />

              <div className="relative">
                <h3 className="text-xl font-black mb-1">IT Space</h3>
                <p className="text-cyan-300 text-sm mb-8 font-medium">Solutions &amp; Consulting</p>

                {[
                  { icon: MapPin, label: 'Address', value: t('address'), href: undefined },
                  { icon: Phone, label: 'Phone', value: t('phone'), href: `tel:${t('phone').replace(/\s/g, '')}` },
                  { icon: Mail, label: 'Email', value: t('email'), href: `mailto:${t('email')}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 mb-5 last:mb-0">
                    <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-white hover:text-cyan-300 transition-colors">{value}</a>
                      ) : (
                        <p className="text-sm text-white">{value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-start gap-4 mt-5">
                  <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock size={15} className="text-cyan-300" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-0.5">{t('office_hours')}</p>
                    <p className="text-sm text-white">{t('hours_weekday')}</p>
                    <p className="text-sm text-white">{t('hours_saturday')}</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-6 gap-1.5 opacity-10">
                  {Array.from({ length: 18 }).map((_, i) => <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />)}
                </div>
              </div>
            </div>

            {showMap && (
              <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
                <p className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border-b border-slate-100">{t('map_title')}</p>
                <iframe src="https://maps.google.com/maps?q=Tanger,Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="240" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="IT Space location" />
              </div>
            )}
          </div>

          {/* ── Form column ── */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              /* Success state */
              <div className="h-full min-h-80 flex flex-col items-center justify-center gap-5 bg-[#F8FAFC] rounded-2xl border border-slate-100 p-10 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-200">
                  <CheckCircle size={38} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#0D1B3E] mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm max-w-xs mx-auto">Your email client opened with your message pre-filled. We&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setStatus('idle'); setFields({ name: '', email: '', company: '', subject: SUBJECTS[0], message: '' }); setErrors({}); setTouched({}); }}
                  className="text-[#00B4FF] font-bold text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-100 flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input name="name" type="text" placeholder={t('form_name')} value={fields.name} onChange={set('name')} onBlur={blur('name')}
                      className={errors.name && touched.name ? inputError : inputNormal} />
                    {errors.name && touched.name && (
                      <p className="flex items-center gap-1 mt-1 text-red-500 text-xs"><AlertCircle size={11} /> {errors.name}</p>
                    )}
                  </div>
                  <div>
                    <input name="email" type="email" placeholder={t('form_email')} value={fields.email} onChange={set('email')} onBlur={blur('email')}
                      className={errors.email && touched.email ? inputError : inputNormal} />
                    {errors.email && touched.email && (
                      <p className="flex items-center gap-1 mt-1 text-red-500 text-xs"><AlertCircle size={11} /> {errors.email}</p>
                    )}
                  </div>
                </div>

                <input name="company" type="text" placeholder={t('form_company')} value={fields.company} onChange={set('company')} onBlur={blur('company')}
                  className={inputNormal} />

                <select name="subject" value={fields.subject} onChange={set('subject')} className={`${inputNormal} text-slate-600`}>
                  {SUBJECTS.map((key) => <option key={key} value={key}>{t(key)}</option>)}
                </select>

                <div>
                  <textarea name="message" placeholder={t('form_message')} required rows={6} value={fields.message} onChange={set('message')} onBlur={blur('message')}
                    className={`${errors.message && touched.message ? inputError : inputNormal} resize-none`} />
                  {errors.message && touched.message && (
                    <p className="flex items-center gap-1 mt-1 text-red-500 text-xs"><AlertCircle size={11} /> {errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center justify-center gap-2.5 bg-[#0D1B3E] hover:bg-[#1E40AF] disabled:opacity-60 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 mt-2"
                >
                  {status === 'submitting' ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {t('form_submit')}
                </button>

                <p className="text-center text-slate-400 text-xs">
                  Or email us directly at{' '}
                  <a href="mailto:contact@itspace.ma" className="text-[#00B4FF] hover:underline">contact@itspace.ma</a>
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Mobile map */}
        {showMap && (
          <div className="mt-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm lg:hidden">
            <p className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 border-b border-slate-100">{t('map_title')}</p>
            <iframe src="https://maps.google.com/maps?q=Tanger,Morocco&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="280" style={{ border: 0, display: 'block' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="IT Space location" />
          </div>
        )}
      </div>
    </section>
  );
}
