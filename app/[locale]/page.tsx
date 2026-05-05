import { getLocale } from 'next-intl/server';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { Process } from '@/components/Process';
import { WhyUs } from '@/components/WhyUs';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { CtaBanner } from '@/components/CtaBanner';

type Lang = 'fr' | 'en' | 'ar';

export default async function HomePage() {
  const locale = (await getLocale()) as Lang;

  return (
    <>
      <Hero />
      <Stats />
      <Services preview />
      <Process />
      <WhyUs />
      <Testimonials locale={locale} />
      <Contact />
      <CtaBanner />
    </>
  );
}
