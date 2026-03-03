import Banner from '@/components/Banner';
import Experiences from '@/components/Experience';
import { Header } from '@/components/Header';
import Skills from '@/components/Skills';

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
