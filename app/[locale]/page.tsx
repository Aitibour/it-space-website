import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Services } from '@/components/Services';
import { WhyUs } from '@/components/WhyUs';
import { CtaBanner } from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services preview />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
