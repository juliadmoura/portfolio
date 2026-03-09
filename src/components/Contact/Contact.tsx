import { Button } from '../Atoms/Button';
import { Input, Textarea } from '../Atoms/Input';
import { Heading, Paragraph } from '../Atoms/Typography';
import Social from '../Banner/IconsBox';

export default function Contact() {
  return (
    <section className="flex py-15 flex-col md:flex-row md:px-20 w-full  px-6 justify-between  md:gap-0 gap-10 ">
      <div className=" flex flex-col gap-5 justify-center items-center md:w-125 w-full">
        <Input placeholder="Seu nome"></Input>
        <Input placeholder="Seu email"></Input>
        <Textarea placeholder="Sua mensagem" className="h-35" />
        <div className="flex items-center justify-between w-full">
          <Button label="Enviar" className="h-15 px-12" />
          <div className="flex gap-5">
            <Social />
          </div>
        </div>
      </div>
      <div className="flex md:w-1/2 w-full flex-col justify-center">
        <Heading className="pb-5">Vamos trabalhar juntos.</Heading>
        <Paragraph className="md:pb-10 pb-8">
          {' '}
          Sou apaixonada por transformar ideias em interfaces intuitivas e
          experiências digitais de qualidade. Se você tem um projeto ou
          oportunidade em mente, vamos conversar.
        </Paragraph>
        <Heading
          size="h2"
          className="md:text-[28px]/[32px] text-[20px]/[24px]"
          weight="semibold"
        >
          {' '}
          juliadamacenadev@gmail.com
        </Heading>
      </div>
    </section>
  );
}
