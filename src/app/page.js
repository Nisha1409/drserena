import About from '@/components/about';
import Aof from '@/components/aof';
import Contact from '@/components/contact';
import Faq from '@/components/faq';
import Hero from '@/components/hero';
import Quote from '@/components/quote';
import Rai from '@/components/rai';
import Therapy from '@/components/therapy';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Therapy/>
      <Aof />
      <Rai />
      <Faq />
      <Quote />
      <Contact />
    </>
  );
}
