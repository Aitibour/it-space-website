import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { About } from '@/components/About';
import { CtaBanner } from '@/components/CtaBanner';

const BG = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return {
    title: `${t('page_title')} — IT Space Tanger`,
    description: t('body'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { fr: '/fr/about', en: '/en/about', ar: '/ar/about' },
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  return (
    <>
      <PageHero
        title={t('title')}
        subtitle={t('subtitle')}
        breadcrumb="About"
        bgImage={BG}
      />
      <About />
      <CtaBanner />
    </>
  );
}
