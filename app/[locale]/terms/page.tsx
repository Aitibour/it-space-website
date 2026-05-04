import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

const BG = 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&q=80&auto=format&fit=crop';

type Props = { params: Promise<{ locale: string }> };

const meta: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Terms of Service', subtitle: 'The rules governing use of IT Space services and this website' },
  fr: { title: "Conditions d'Utilisation", subtitle: "Les règles régissant l'utilisation des services IT Space et de ce site web" },
  ar: { title: 'شروط الخدمة', subtitle: 'القواعد التي تحكم استخدام خدمات IT Space وهذا الموقع' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.en;
  return { title: `${m.title} — IT Space`, description: m.subtitle, alternates: { canonical: `/${locale}/terms` } };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-black text-[#0D1B3E] mb-3 flex items-center gap-3">
        <span className="w-1 h-6 rounded-full bg-[#00B4FF] inline-block flex-shrink-0" />
        {title}
      </h2>
      <div className="text-slate-600 text-[15px] leading-relaxed space-y-2 pl-4">{children}</div>
    </div>
  );
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const m = meta[locale] ?? meta.en;

  return (
    <>
      <PageHero title={m.title} subtitle={m.subtitle} breadcrumb="Legal" bgImage={BG} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-slate-400 text-sm mb-10 border-b border-slate-100 pb-6">Last updated: May 2026</p>

          <Section title="1. Company Information">
            <p>IT Space SARL (&quot;IT Space&quot;, &quot;we&quot;, &quot;us&quot;) is a technology consulting company registered in Tanger, Morocco. Email: <a href="mailto:contact@itspace.ma" className="text-[#00B4FF] hover:underline">contact@itspace.ma</a></p>
          </Section>

          <Section title="2. Acceptance of Terms">
            <p>By accessing <strong className="text-[#0D1B3E]">itspace.ma</strong> or engaging IT Space for services, you agree to these Terms of Service. If you do not agree, please do not use our website or services.</p>
          </Section>

          <Section title="3. Services">
            <p>IT Space provides IT consulting, cybersecurity, cloud solutions, digital transformation, software development, and AI &amp; data solutions. Specific terms for each engagement are defined in a separate Statement of Work (SOW) or service agreement signed by both parties.</p>
          </Section>

          <Section title="4. Intellectual Property">
            <p>All content on itspace.ma (texts, graphics, logos, code) is the exclusive property of IT Space and protected by Moroccan and international copyright law. Deliverables produced for clients under contract become client property upon full payment unless otherwise agreed in writing.</p>
          </Section>

          <Section title="5. Confidentiality">
            <p>Both parties agree to keep confidential all non-public information shared during the course of an engagement. This obligation survives termination of the agreement for a period of 3 years.</p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>IT Space&apos;s liability for any claim arising from services shall not exceed the total fees paid for the specific project in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>
          </Section>

          <Section title="7. Website Use">
            <p>You may use itspace.ma for lawful purposes only. You must not: scrape content, attempt to breach security, transmit malware, or use the site in a way that impairs its operation or accessibility.</p>
          </Section>

          <Section title="8. Third-Party Links">
            <p>Our website may contain links to third-party sites. IT Space has no control over their content and accepts no responsibility for them.</p>
          </Section>

          <Section title="9. Governing Law">
            <p>These terms are governed by Moroccan law. Any disputes shall be subject to the exclusive jurisdiction of the courts of Tanger, Morocco, unless otherwise agreed.</p>
          </Section>

          <Section title="10. Modifications">
            <p>We reserve the right to modify these terms at any time. Material changes will be posted on this page with an updated date. Continued use of our services after changes constitutes acceptance.</p>
          </Section>

          <Section title="11. Contact">
            <p>Questions about these terms: <a href="mailto:contact@itspace.ma" className="text-[#00B4FF] hover:underline">contact@itspace.ma</a> · +212 539 94 00 00</p>
          </Section>
        </div>
      </section>
    </>
  );
}
