import aboutImage from '@/assets/images/about.jpg';
import Image from 'next/image';
import { Heading, Paragraph } from '../Atoms/Typography';

export default function About() {
  return (
    <>
      <section className="flex py-15 flex-col md:flex-row md:px-20 px-6 justify-between">
        <div className="md:w-1/2 flex  justify-center items-center">
          <div className="shadow-xl/50 rounded-2xl overflow-hidden md:m-0 mx-4">
            <Image
              src={aboutImage}
              alt="Imagem do banner"
              height={520}
              priority
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col md:w-1/2 gap-8 p-6">
          <Heading as="h2" color="black">
            <span className="font-normal">Sobre </span>
            <span className="font-extrabold">Mim</span>
          </Heading>
          <div className="flex flex-col gap-5">
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              exercitationem veniam corrupti magni ipsum totam magnam corporis
              officia dignissimos eaque, animi obcaecati, fugit fugiat harum
              quod beatae nihil deserunt distinctio.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              exercitationem veniam corrupti magni ipsum totam magnam corporis
              officia dignissimos eaque, animi obcaecati, fugit fugiat harum
              quod beatae nihil deserunt distinctio.
            </Paragraph>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              exercitationem veniam corrupti magni ipsum totam magnam corporis
              officia dignissimos eaque, animi obcaecati, fugit fugiat harum
              quod beatae nihil deserunt distinctio.
            </Paragraph>
          </div>
        </div>
      </section>
    </>
  );
}
