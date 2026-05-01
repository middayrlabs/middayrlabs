import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Apps from '@/components/Apps';
import Privacy from '@/components/Privacy';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Apps />
        <Privacy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
