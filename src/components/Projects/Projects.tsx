import { Heading } from '../Atoms/Typography';
import Container from './Container';

export default function Projects() {
  return (
    <>
      <div className="flex justify-center flex-col items-center gap-6 px-4 md:px-20 2xl:px-44 py-15 bg-(--primary-black)">
        <div className="py-5">
          <Heading as="h2" color="white" className="selection-light">
            <span className="font-normal">Meus </span>
            <span className="font-extrabold">Projetos</span>
          </Heading>
        </div>
        <Container />
      </div>
    </>
  );
}
