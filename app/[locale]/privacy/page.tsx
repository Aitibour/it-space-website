import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

const BG = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80&auto=format&fit=crop';

type Props = { params: Promise<{ locale: string }> };

const meta: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'Privacy Policy', subtitle: 'How we collect, use, and protect your personal data' },
  fr: { title: 'Politique de Confidentialité', subtitle: 'Comment nous collectons, utilisons et protégeons vos données personnelles' },
  ar: { title: 'سياسة الخصوصية', subtitle: 'كيف نجمع بياناتك الشخصية ونستخدمها ونحميها' },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.en;
  return { title: `${m.title} — IT Space`, description: m.subtitle, alternates: { canonical: `/${locale}/privacy` } };
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

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  const m = meta[locale] ?? meta.en;

  return (
    <>
      <PageHero title={m.title} subtitle={m.subtitle} breadcrumb="Legal" bgImage={BG} />
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-slate-400 text-sm mb-10 border-b border-slate-100 pb-6">Last updated: May 2026</p>

          <Section title="1. Data Controller">
            <p>IT Space SARL, registered in Tanger, Morocco (hereinafter &quot;IT Space&quot;, &quot;we&quot;, &quot;us&quot;) is the data controller responsible for your personal information collected through <strong className="text-[#0D1B3E]">itspace.ma</strong>.</p>
            <p>Contact: <a href="mailto:contact@itspace.ma" className="text-[#00B4FF] hover:underline">contact@itspace.ma</a> · +212 539 94 00 00</p>
          </Section>

          <Section title="2. Data We Collect">
            <p>We collect information you voluntarily provide when you:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Complete the contact form (name, email, company, message)</li>
              <li>Request a quotation or consultation</li>
              <li>Subscribe to our newsletter</li>
            </ul>
            <p className="mt-2">We also automatically collect technical data: IP address, browser type, pages visited, and referral source via standard server logs.</p>
          </Section>

          <Section title="3. How We Use Your Data">
            <ul className="list-disc list-inside space-y-1">
              <li>Responding to your enquiries and service requests</li>
              <li>Sending requested quotations and proposals</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
            <p className="mt-2">We do <strong className="text-[#0D1B3E]">not</strong> sell, rent, or trade your personal data to third parties.</p>
          </Section>

          <Section title="4. Legal Basis for Processing">
            <p>Processing is based on: (a) your consent when submitting forms; (b) legitimate interest in operating and improving our business; (c) compliance with Moroccan Law 09-08 on personal data protection and applicable international regulations including the GDPR for EU visitors.</p>
          </Section>

          <Section title="5. Data Retention">
            <p>We retain contact form data for a maximum of 3 years from the last interaction. Server logs are retained for 12 months. You may request deletion at any time.</p>
          </Section>

          <Section title="6. Your Rights">
            <p>You have the right to: access, rectify, erase, restrict processing, and port your personal data. To exercise these rights, contact us at <a href="mailto:contact@itspace.ma" className="text-[#00B4FF] hover:underline">contact@itspace.ma</a>.</p>
          </Section>

          <Section title="7. Cookies">
            <p>Our website uses only essential technical cookies necessary for site operation. We do not use advertising or tracking cookies. No cookie consent banner is required as we only use strictly necessary cookies.</p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>Our site embeds Google Maps and YouTube iframes on specific pages. These services may set their own cookies when you interact with embedded content. Please refer to their respective privacy policies.</p>
          </Section>

          <Section title="9. Security">
            <p>We implement appropriate technical and organisational measures to protect your data, including HTTPS encryption, access controls, and regular security reviews.</p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>We may update this policy periodically. Significant changes will be communicated via the website. Continued use of our site after changes constitutes acceptance.</p>
          </Section>

          <Section title="11. Contact">
            <p>For any privacy-related questions or to exercise your rights: <a href="mailto:contact@itspace.ma" className="text-[#00B4FF] hover:underline">contact@itspace.ma</a></p>
          </Section>
        </div>
      </section>
    </>
  );
}
