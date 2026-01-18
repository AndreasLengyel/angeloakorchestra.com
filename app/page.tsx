import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Music from '@/components/Music';
import Members from '@/components/Members';
import Shows from '@/components/Shows';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Music />
        <Members />
        <Shows />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
