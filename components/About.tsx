'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import {
  Zap, ShieldCheck, Star, Eye, Target, ArrowRight,
  MapPin, Users, Award, TrendingUp, CheckCircle,
} from 'lucide-react';
import { LogoOrb } from './LogoOrb';

const STATS = [
  { value: '10+', label: { en: 'Years of Expertise', fr: "Années d'Expertise", ar: 'سنوات من الخبرة' } },
  { value: '150+', label: { en: 'Projects Delivered', fr: 'Projets Livrés', ar: 'مشروع منجز' } },
  { value: '5', label: { en: 'Countries Served', fr: 'Pays Couverts', ar: 'دول مخدومة' } },
  { value: '98%', label: { en: 'Client Satisfaction', fr: 'Satisfaction Client', ar: 'رضا العملاء' } },
];

const TIMELINE = [
  { year: '2014', en: 'IT Space founded in Tanger, Morocco', fr: 'Création d\'IT Space à Tanger, Maroc', ar: 'تأسيس IT Space في طنجة، المغرب' },
  { year: '2017', en: 'Expanded to cybersecurity practice', fr: 'Expansion vers la cybersécurité', ar: 'التوسع في مجال الأمن السيبراني' },
  { year: '2020', en: 'Cloud & digital transformation hub', fr: 'Hub Cloud & transformation digitale', ar: 'مركز السحابة والتحول الرقمي' },
  { year: '2023', en: 'AI & Data Solutions launched', fr: 'Lancement Solutions IA & Data', ar: 'إطلاق حلول الذكاء الاصطناعي والبيانات' },
];

const EXPERTISE = [
  { label: 'Microsoft Partner', icon: Award },
  { label: 'Cisco Certified', icon: Award },
  { label: 'AWS Partner', icon: Award },
  { label: 'ISO 27001 Ready', icon: ShieldCheck },
  { label: 'Agile Certified', icon: CheckCircle },
  { label: 'ITIL Framework', icon: CheckCircle },
];

type Lang = 'en' | 'fr' | 'ar';

export function About({ preview = false }: { preview?: boolean }) {
  const t = useTranslations('about');
  const locale = useLocale() as Lang;

  const values = [
    { key: 'value_innovation' as const, descKey: 'value_innovation_desc' as const, icon: Zap, gradient: 'from-[#F59E0B] to-[#D97706]', glow: '#F59E0B', bg: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80&auto=format&fit=crop' },
    { key: 'value_security' as const, descKey: 'value_security_desc' as const, icon: ShieldCheck, gradient: 'from-[#EF4444] to-[#DC2626]', glow: '#EF4444', bg: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80&auto=format&fit=crop' },
    { key: 'value_excellence' as const, descKey: 'value_excellence_desc' as const, icon: Star, gradient: 'from-[#8B5CF6] to-[#7C3AED]', glow: '#8B5CF6', bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop' },
  ];

  return (
    <div id="about">

      {/* ── STORY SECTION ─────────────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div>
              <span className="inline-flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                <span className="w-5 h-px bg-[#00B4FF]" />
                {t('story_title')}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-3 leading-tight">
                {t('title')}
              </h2>
              <p className="text-[#00B4FF] font-semibold mb-6 text-lg">{t('subtitle')}</p>
              <p className="text-slate-600 leading-relaxed mb-5 text-[15px]">{t('body')}</p>
              <p className="text-slate-600 leading-relaxed text-[15px]">{t('mission')}</p>

              {/* Location badge */}
              <div className="mt-8 inline-flex items-center gap-3 bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-3">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E40AF] to-[#00B4FF] flex items-center justify-center flex-shrink-0">
                  <MapPin size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Headquarters</p>
                  <p className="text-[#0D1B3E] font-bold text-sm">Tanger, Morocco</p>
                </div>
              </div>
            </div>

            {/* Animated logo orb */}
            <div className="flex justify-center lg:justify-end">
              <LogoOrb />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ───────────────────────────────────────────── */}
      <section
        className="py-14 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-[0.08] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #00B4FF, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.value} className="text-center">
                <div
                  className="text-4xl md:text-5xl font-black mb-1"
                  style={{
                    background: 'linear-gradient(90deg, #00B4FF, #60C8FF)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm font-medium">{s.label[locale]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ──────────────────────────────────────── */}
      {!preview && (
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-black text-[#0D1B3E]">
                Purpose & Direction
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(
                [
                  { titleKey: 'mission_title' as const, bodyKey: 'mission' as const, icon: Target, accent: '#00B4FF', grad: 'from-[#1E40AF] to-[#00B4FF]' },
                  { titleKey: 'vision_title' as const, bodyKey: 'vision' as const, icon: Eye, accent: '#8B5CF6', grad: 'from-[#7C3AED] to-[#8B5CF6]' },
                ]
              ).map(({ titleKey, bodyKey, icon: Icon, accent, grad }) => (
                <div
                  key={titleKey}
                  className="group relative rounded-2xl p-8 overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #0D1B3E, #0f2456)' }}
                >
                  {/* Glow */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-[0.12] blur-[60px] transition-opacity duration-300 group-hover:opacity-[0.2]"
                    style={{ background: accent }}
                  />
                  <div className="relative">
                    <div
                      className={`w-13 h-13 w-14 h-14 rounded-xl bg-gradient-to-br ${grad} flex items-center justify-center mb-6 shadow-lg`}
                      style={{ boxShadow: `0 8px 24px ${accent}40` }}
                    >
                      <Icon size={24} className="text-white" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-black text-white text-xl mb-4">{t(titleKey)}</h3>
                    <p className="text-slate-300 leading-relaxed text-[15px]">{t(bodyKey)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TIMELINE ──────────────────────────────────────────────── */}
      {!preview && (
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-[0.2em] mb-3">
                <span className="w-5 h-px bg-[#00B4FF]" />
                Our Journey
                <span className="w-5 h-px bg-[#00B4FF]" />
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-[#0D1B3E]">10 Years of Growth</h2>
            </div>

            <div className="relative">
              {/* Center line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00B4FF] via-slate-200 to-transparent hidden md:block" />

              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <div
                    key={item.year}
                    className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Card */}
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                      <div className="inline-block bg-[#F8FAFC] border border-slate-100 hover:border-[#00B4FF]/30 hover:shadow-lg rounded-2xl px-6 py-4 transition-all duration-300">
                        <p className="text-[#0D1B3E] font-bold text-sm mb-1">{item[locale]}</p>
                        <p className="text-slate-400 text-xs">{item.year}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex w-10 h-10 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#00B4FF] items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200 z-10">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── VALUES ────────────────────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-black text-[#0D1B3E]">{t('values_title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ key, descKey, icon: Icon, gradient, glow, bg }) => (
              <div
                key={key}
                className="group relative rounded-2xl overflow-hidden h-64 cursor-default"
              >
                {/* BG image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${bg}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/95 via-[#0D1B3E]/70 to-[#0D1B3E]/30" />
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${glow}, transparent)` }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 6px 20px ${glow}50` }}
                  >
                    <Icon size={22} className="text-white" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-black text-white text-base mb-1.5">{t(key)}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{t(descKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE / CERTIFICATIONS ────────────────────────────── */}
      {!preview && (
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
              Certifications &amp; Partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {EXPERTISE.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2.5 bg-[#F8FAFC] border border-slate-100 rounded-xl px-5 py-2.5 hover:border-[#00B4FF]/40 hover:shadow-md transition-all duration-200"
                >
                  <Icon size={15} className="text-[#00B4FF]" />
                  <span className="text-[#0D1B3E] font-semibold text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TEAM TEASER ───────────────────────────────────────────── */}
      {!preview && (
        <section
          className="py-20 relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 100%)' }}
        >
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
              {[
                { icon: Users, title: 'Expert Engineers', desc: 'Certified professionals with deep domain expertise in IT, cloud, security, and AI.', grad: 'from-[#1E40AF] to-[#00B4FF]', glow: '#00B4FF' },
                { icon: TrendingUp, title: 'Business Consultants', desc: 'Strategic advisors who bridge technology and business to deliver measurable results.', grad: 'from-[#7C3AED] to-[#8B5CF6]', glow: '#8B5CF6' },
                { icon: ShieldCheck, title: 'Security Specialists', desc: 'Dedicated cybersecurity experts who protect your digital assets around the clock.', grad: 'from-[#059669] to-[#10B981]', glow: '#10B981' },
              ].map(({ icon: Icon, title, desc, grad, glow }) => (
                <div
                  key={title}
                  className="group bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-white/20 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    style={{ boxShadow: `0 8px 24px ${glow}40` }}
                  >
                    <Icon size={26} className="text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <p className="text-slate-300 text-lg mb-6 max-w-xl mx-auto">
                Ready to work with a team that treats your success as our own?
              </p>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2.5 font-bold px-8 py-4 rounded-xl text-[#0D1B3E] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(90deg, #00B4FF, #60C8FF)',
                  boxShadow: '0 8px 32px rgba(0,180,255,0.35)',
                }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
