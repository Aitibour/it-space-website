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
  title: 'IT Space — Tanger | IT Consulting & Cyber Security',
  description:
    'IT Space is your trusted technology partner in Tanger, Morocco. IT Consulting, Cyber Security, Cloud Solutions, Digital Transformation.',
  alternates: {
    canonical: 'https://itspace.ma',
  },
  other: {
    'sitemap': '/sitemap.xml',
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
