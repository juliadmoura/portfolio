import Banner from '@/components/Banner/Banner';
import Experiences from '@/components/Experiences/Experience';
import Header from '@/components/Header/Header';
import Skills from '@/components/Skills/Skills';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Skills />
      <Experiences />
    </>
  );
}
