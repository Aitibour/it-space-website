import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Contact } from '@/components/Contact';

const BG = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80&auto=format&fit=crop';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });
  return {
    title: `${t('title')} — IT Space Tanger`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { fr: '/fr/contact', en: '/en/contact', ar: '/ar/contact' },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb="Contact"
        bgImage={BG}
      />
      <Contact showMap />
    </>
  );
}
