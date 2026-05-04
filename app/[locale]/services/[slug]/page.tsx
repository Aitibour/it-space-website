import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { CtaBanner } from '@/components/CtaBanner';
import { Faq } from '@/components/Faq';
import { SERVICES, SERVICE_SLUGS, getService } from '@/lib/services-data';
import { CheckCircle2, ArrowRight, Lightbulb, Shield, Cloud, Zap, Code2, Cpu, type LucideIcon } from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = { Lightbulb, Shield, Cloud, Zap, Code2, Cpu };
import Link from 'next/link';

type Lang = 'fr' | 'en' | 'ar';
type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const locales = ['fr', 'en', 'ar'];
  return locales.flatMap((locale) =>
    SERVICE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getService(slug);
  if (!service) return { title: 'Service — IT Space' };
  const lang = locale as Lang;
  return {
    title: `${service.title[lang]} — IT Space Tanger`,
    description: service.description[lang],
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        fr: `/fr/services/${slug}`,
        en: `/en/services/${slug}`,
        ar: `/ar/services/${slug}`,
      },
    },
  };
}

const FAQ_EN = [
  { q: 'How long does a typical project take?', a: 'Project timelines vary based on scope and complexity. Most engagements range from 4 weeks for quick-win projects to 6 months for enterprise transformations. We provide a detailed timeline during the discovery phase.' },
  { q: 'Do you work with companies outside Morocco?', a: 'Yes — we serve clients across North Africa including Morocco, Algeria, Tunisia, and Senegal. We also work remotely with European and Middle Eastern clients.' },
  { q: 'What is your pricing model?', a: 'We offer flexible pricing: fixed-price for well-defined projects, time-and-materials for exploratory work, and monthly retainers for ongoing support. We provide a free initial consultation and detailed quote.' },
  { q: 'Do you provide support after project delivery?', a: 'Absolutely. All our projects include a warranty period, and we offer post-delivery support packages ranging from basic maintenance to full managed services with SLA guarantees.' },
];

const FAQ_FR = [
  { q: 'Combien de temps dure un projet typique ?', a: 'Les délais varient selon la portée et la complexité. La plupart des engagements vont de 4 semaines pour des quick-wins à 6 mois pour des transformations enterprise. Nous fournissons un calendrier détaillé lors de la phase de découverte.' },
  { q: 'Travaillez-vous avec des entreprises hors du Maroc ?', a: 'Oui — nous servons des clients dans toute l\'Afrique du Nord : Maroc, Algérie, Tunisie et Sénégal. Nous travaillons également à distance avec des clients européens et moyen-orientaux.' },
  { q: 'Quel est votre modèle de tarification ?', a: 'Nous proposons une tarification flexible : prix fixe pour les projets bien définis, régie pour les travaux exploratoires, et forfaits mensuels pour le support continu. Nous offrons une consultation initiale gratuite.' },
  { q: 'Fournissez-vous un support après livraison ?', a: 'Absolument. Tous nos projets incluent une période de garantie, et nous proposons des packages de support post-livraison allant de la maintenance de base aux services gérés complets avec SLA.' },
];

const FAQ_AR = [
  { q: 'كم يستغرق المشروع النموذجي؟', a: 'تتفاوت الجداول الزمنية حسب النطاق والتعقيد. معظم المشاريع تتراوح من 4 أسابيع للمشاريع السريعة إلى 6 أشهر للتحولات المؤسسية. نقدم جدولاً زمنياً مفصلاً خلال مرحلة الاكتشاف.' },
  { q: 'هل تعملون مع شركات خارج المغرب؟', a: 'نعم — نخدم عملاء في جميع أنحاء شمال أفريقيا بما في ذلك المغرب والجزائر وتونس والسنغال. نعمل أيضاً عن بُعد مع عملاء أوروبيين وشرق أوسطيين.' },
  { q: 'ما هو نموذج التسعير لديكم؟', a: 'نقدم تسعيراً مرناً: سعر ثابت للمشاريع المحددة جيداً، والوقت والمواد للأعمال الاستكشافية، واشتراكات شهرية للدعم المستمر. نقدم استشارة أولية مجانية وعرض سعر مفصل.' },
  { q: 'هل تقدمون دعماً بعد تسليم المشروع؟', a: 'بالتأكيد. تتضمن جميع مشاريعنا فترة ضمان، ونقدم حزم دعم ما بعد التسليم من الصيانة الأساسية إلى الخدمات المدارة الكاملة مع ضمانات SLA.' },
];

const faqs: Record<Lang, typeof FAQ_EN> = { en: FAQ_EN, fr: FAQ_FR, ar: FAQ_AR };
const faqTitle: Record<Lang, string> = { en: 'Common Questions', fr: 'Questions Fréquentes', ar: 'أسئلة شائعة' };
const featuresTitle: Record<Lang, string> = { en: 'What We Deliver', fr: 'Ce Que Nous Livrons', ar: 'ما نقدمه' };
const benefitsTitle: Record<Lang, string> = { en: 'Key Benefits', fr: 'Avantages Clés', ar: 'الفوائد الرئيسية' };
const useCasesTitle: Record<Lang, string> = { en: 'Use Cases', fr: 'Cas d\'Usage', ar: 'حالات الاستخدام' };
const backLabel: Record<Lang, string> = { en: '← All Services', fr: '← Tous les Services', ar: '← جميع الخدمات' };
const otherLabel: Record<Lang, string> = { en: 'Explore Other Services', fr: 'Explorer d\'Autres Services', ar: 'استكشاف خدمات أخرى' };

export default async function ServicePage({ params }: Props) {
  const { locale, slug } = await params;
  const lang = locale as Lang;
  const service = getService(slug);
  if (!service) notFound();

  const { iconName, color, heroImage, title, description, features, benefits, useCases } = service;
  const Icon = ICON_MAP[iconName];
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHero
        title={title[lang]}
        subtitle={description[lang]}
        breadcrumb={title[lang]}
        bgImage={heroImage}
      />

      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <Link
          href={`/${locale}/services`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#00B4FF] hover:underline"
        >
          {backLabel[lang]}
        </Link>
      </div>

      {/* Features grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${color}CC, ${color}66)`,
                boxShadow: `0 8px 24px ${color}40`,
              }}
            >
              <Icon size={26} className="text-white" strokeWidth={1.75} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#0D1B3E]">{featuresTitle[lang]}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] hover:bg-white border border-slate-100 hover:border-transparent hover:shadow-xl rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color }}
                  />
                  <div>
                    <h3 className="font-bold text-[#0D1B3E] mb-2">{f.title[lang]}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0D1B3E 0%, #0f2456 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-10">{benefitsTitle[lang]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 hover:bg-white/[0.08] transition-all duration-300"
              >
                <div
                  className="w-2 h-8 rounded-full mb-5"
                  style={{ background: `linear-gradient(180deg, ${color}, ${color}44)` }}
                />
                <h3 className="font-bold text-white mb-2">{b.title[lang]}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl md:text-3xl font-black text-[#0D1B3E] mb-10">{useCasesTitle[lang]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className="relative rounded-2xl p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div
                  className="absolute top-0 left-0 w-full h-[3px]"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
                <span
                  className="text-6xl font-black opacity-5 absolute -top-2 -right-2 leading-none select-none"
                  style={{ color }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-bold text-[#0D1B3E] mb-2 text-sm md:text-base">{uc.title[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{uc.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-black text-[#0D1B3E] mb-6">{otherLabel[lang]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {others.map((s) => {
              const OtherIcon = ICON_MAP[s.iconName];
              return (
                <Link
                  key={s.slug}
                  href={`/${locale}/services/${s.slug}`}
                  className="group flex items-center gap-4 bg-white rounded-2xl border border-slate-100 p-5 hover:shadow-lg hover:border-transparent transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 shadow"
                    style={{ background: `linear-gradient(135deg, ${s.color}CC, ${s.color}66)` }}
                  >
                    <OtherIcon size={20} className="text-white" strokeWidth={1.75} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-[#0D1B3E] text-sm">{s.title[lang]}</p>
                    <p className="text-slate-400 text-xs truncate">{s.short[lang]}</p>
                  </div>
                  <ArrowRight size={14} className="text-slate-300 group-hover:text-[#00B4FF] transition-colors flex-shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Faq items={faqs[lang]} title={faqTitle[lang]} />
      <CtaBanner />
    </>
  );
}
