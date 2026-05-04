import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Services } from '@/components/Services';
import { CtaBanner } from '@/components/CtaBanner';

const BG = 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&q=80&auto=format&fit=crop';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return {
    title: `${t('title')} — IT Space Tanger`,
    description: t('subtitle'),
    alternates: {
      canonical: `/${locale}/services`,
      languages: { fr: '/fr/services', en: '/en/services', ar: '/ar/services' },
    },
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb="Services"
        bgImage={BG}
      />
      <Services />
      <CtaBanner />
    </>
  );
}
