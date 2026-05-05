import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' });

const locales = ['fr', 'en', 'ar'];

export const metadata: Metadata = {
  title: {
    default: 'IT Space — Tanger | IT Consulting & Cybersecurity',
    template: '%s — IT Space Tanger',
  },
  description:
    'IT Space is your trusted technology partner in Tanger, Morocco. IT Consulting, Cybersecurity, Cloud Solutions, Digital Transformation & Software Development.',
  keywords: ['IT consulting', 'cybersecurity', 'cloud solutions', 'digital transformation', 'software development', 'Tanger', 'Morocco', 'North Africa'],
  authors: [{ name: 'IT Space', url: 'https://itspace.ma' }],
  creator: 'IT Space',
  metadataBase: new URL('https://itspace.ma'),
  alternates: {
    canonical: '/',
    languages: {
      fr: '/fr',
      en: '/en',
      ar: '/ar',
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'IT Space',
    title: 'IT Space — IT Consulting & Cybersecurity | Tanger, Morocco',
    description:
      'Your trusted technology partner in North Africa. IT Consulting, Cybersecurity, Cloud Solutions & Digital Transformation.',
    url: 'https://itspace.ma',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IT Space — Technology Solutions in Tanger, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Space — IT Consulting & Cybersecurity | Tanger',
    description: 'Your trusted technology partner in North Africa.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale)) notFound();
  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={inter.variable}>
      <body className="font-sans antialiased bg-white text-slate-900">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
