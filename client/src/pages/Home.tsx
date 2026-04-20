import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import About from '@/pages/sections/About';
import Classes from '@/pages/sections/Classes';
import Benefits from '@/pages/sections/Benefits';
import Testimonials from '@/pages/sections/Testimonials';
import FAQ from '@/pages/sections/FAQ';
import Contact from '@/pages/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <About />
        <Classes />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
