'use client';

import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  role: string;
  company: string;
  initials: string;
  color: string;
  quote: { fr: string; en: string; ar: string };
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Karim Benali',
    role: 'Directeur Général',
    company: 'Tanger Free Zone',
    initials: 'KB',
    color: '#00B4FF',
    quote: {
      fr: "IT Space a transformé notre infrastructure IT en 3 mois. Leur équipe est réactive, compétente et vraiment à l'écoute de nos besoins. Un partenaire technologique de confiance.",
      en: 'IT Space transformed our IT infrastructure in 3 months. Their team is responsive, skilled, and truly attentive to our needs. A trustworthy technology partner.',
      ar: 'حوّل IT Space بنيتنا التحتية في 3 أشهر. فريقهم سريع الاستجابة وماهر ومنتبه حقاً لاحتياجاتنا. شريك تقني موثوق.',
    },
  },
  {
    name: 'Salma Idrissi',
    role: 'DSI',
    company: 'Banque Centrale Populaire',
    initials: 'SI',
    color: '#6366F1',
    quote: {
      fr: "La solution de cybersécurité mise en place par IT Space nous a permis d'atteindre la conformité ISO 27001 en un temps record. Professionnalisme exemplaire.",
      en: 'The cybersecurity solution implemented by IT Space allowed us to achieve ISO 27001 compliance in record time. Exemplary professionalism.',
      ar: 'أتاح لنا حل الأمن السيبراني الذي نفّذه IT Space تحقيق الامتثال لـ ISO 27001 في وقت قياسي. احترافية مثالية.',
    },
  },
  {
    name: 'Ahmed Tazi',
    role: 'CEO',
    company: 'Logistika Maroc',
    initials: 'AT',
    color: '#F59E0B',
    quote: {
      fr: "Notre migration cloud s'est déroulée sans aucune interruption de service. IT Space a livré exactement ce qui était promis, dans les délais et le budget convenus.",
      en: 'Our cloud migration went without any service interruption. IT Space delivered exactly what was promised, on time and on budget.',
      ar: 'جرى انتقالنا إلى السحابة دون أي انقطاع في الخدمة. قدّم IT Space ما وُعد به تماماً في الوقت المحدد وضمن الميزانية المتفق عليها.',
    },
  },
];

type Lang = 'fr' | 'en' | 'ar';

export function Testimonials({ locale }: { locale: Lang }) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle dot-grid bg */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{ backgroundImage: 'radial-gradient(rgba(0,180,255,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 text-[#00B4FF] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-5 h-px bg-[#00B4FF]" />
            {locale === 'fr' ? 'Témoignages' : locale === 'ar' ? 'آراء العملاء' : 'Testimonials'}
            <span className="w-5 h-px bg-[#00B4FF]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0D1B3E] mb-4">
            {locale === 'fr'
              ? 'Ce que disent nos clients'
              : locale === 'ar'
              ? 'ما يقوله عملاؤنا'
              : 'What Our Clients Say'}
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            {locale === 'fr'
              ? 'Des partenariats durables fondés sur la confiance, l\'expertise et des résultats mesurables.'
              : locale === 'ar'
              ? 'شراكات دائمة مبنية على الثقة والخبرة والنتائج الملموسة.'
              : 'Long-term partnerships built on trust, expertise, and measurable results.'}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Color accent top bar */}
              <div
                className="absolute top-0 inset-x-0 h-[3px] rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}44)` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-7 italic">
                &ldquo;{t.quote[locale]}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}99)` }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-[#0D1B3E] font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {[
            { value: '50+', label: locale === 'fr' ? 'Projets livrés' : locale === 'ar' ? 'مشاريع منجزة' : 'Projects delivered' },
            { value: '100+', label: locale === 'fr' ? 'Clients satisfaits' : locale === 'ar' ? 'عملاء راضون' : 'Satisfied clients' },
            { value: '99%', label: locale === 'fr' ? 'Taux de satisfaction' : locale === 'ar' ? 'معدل الرضا' : 'Satisfaction rate' },
            { value: '10+', label: locale === 'fr' ? 'Années d\'expérience' : locale === 'ar' ? 'سنوات خبرة' : 'Years experience' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black text-[#0D1B3E]">{value}</p>
              <p className="text-slate-400 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
