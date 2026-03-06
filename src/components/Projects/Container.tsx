import { projects } from '@/data/projects';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Heading, Paragraph } from '../Atoms/Typography';

export default function Container() {
  function getOrderByIndex(index: number) {
    return index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse';
  }
  return (
    <>
      {projects.map((proj, index) => (
        <div
          key={proj.id}
          className={`flex selection-light md:gap-0 gap-7 items-center justify-around px-8 flex-col ${getOrderByIndex(
            index,
          )}`}
        >
          <div className="">
            <Image
              src={proj.image}
              alt="Imagem do banner"
              width={400}
              priority
              className="rounded-2xl"
            ></Image>
          </div>
          <div className="md:w-1/2 gap-8 flex flex-col ">
            <Heading
              as={'h2'}
              color="white"
              weight="bold"
              className="selection-light text-[32px]/[40px]"
            >
              {proj.titulo}
            </Heading>
            <Paragraph color="zinc500" weight="regular">
              {proj.descricao}
            </Paragraph>
            <a className="selection-light" href={proj.url}>
              <ExternalLink color="#fff" />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
