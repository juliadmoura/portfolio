import About from '@/components/About/About';
import Banner from '@/components/Banner/Banner';
import Contact from '@/components/Contact/Contact';
import Experiences from '@/components/Experiences/Experience';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <Experiences />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
