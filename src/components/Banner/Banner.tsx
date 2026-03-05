import bannerImage from '@/assets/images/banner-girl.jpg';
import Image from 'next/image';
import { Heading, Paragraph } from '../Atoms/Typography';
import Social from './IconsBox';

export default function Banner() {
  return (
    <main className="flex flex-col-reverse justify-center md:flex-row items-center gap-6 px-6 md:px-20 py-12 ">
      <div className="flex flex-col gap-5">
        <div>
          <Heading as="h1">
            <span className="font-normal">Olá, eu sou a </span>
            <span className="font-extrabold">Julia Damacena.</span>
          </Heading>

          <Heading as="h2">
            <span className="font-normal">Desenvolvedora </span>
            <span className="font-extrabold">Front-end</span>
          </Heading>

          <Heading as="h2" outlined>
            Web & Mobile.
          </Heading>
        </div>
        <div className="max-w-xl">
          <Paragraph color="zinc500">
            Sou Desenvolvedora com foco em front-end e com sólida base em
            desenvolvimento web e mobile, atuando com React.js, React Native,
            JavaScript e TypeScript, além de vivência prática em metodologias
            ágeis (Scrum e Kanban).
          </Paragraph>
        </div>
        <div className="flex gap-8">
          <Social />
        </div>
      </div>

      {/* Imagem */}
      <div className="md:w-2/5 flex justify-center">
        <Image
          src={bannerImage}
          alt="Imagem do banner"
          className="md:w-150 h-auto object-contain"
          priority
        />
      </div>
    </main>
  );
}
