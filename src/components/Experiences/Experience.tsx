import { Heading } from '../Atoms/Typography';
import Container from './Container';

export default function Experiences() {
  return (
    <>
      <section className="flex justify-center flex-col items-center gap-6 px-4 md:px-20 2xl:px-44 py-12 bg-(--primary-black)">
        <div className="py-5">
          <Heading as="h2" color="white">
            <span className="font-normal">Minha </span>
            <span className="font-extrabold">Experiência</span>
          </Heading>
        </div>
        <Container />
      </section>
    </>
  );
}
