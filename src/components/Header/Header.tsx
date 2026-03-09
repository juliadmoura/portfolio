import { Download } from 'lucide-react';
import { Code } from '../../assets/icons/code';
import { Button } from '../Atoms/Button';
import { Display } from '../Atoms/Typography';

export default function Header() {
  return (
    <header id="header" className="bg-white">
      <div className="mx-auto flex gap-12 justify-evenly max-w-7xl items-center px-20 py-6 sm:px-6 lg:px-8">
        <a className="block mr-auto" href="#">
          <Code />
        </a>
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
            <li>
              <a
                href="#skills"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Habilidades" weight="semibold" color="black" />
              </a>
            </li>

            <li>
              <a
                href="#experiences"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Experiência" weight="semibold" color="black" />
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Sobre mim" weight="semibold" color="black" />
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Projetos" weight="semibold" color="black" />
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Contato" weight="semibold" color="black" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 h-full">
            <Button
              href="/cv-julia-damacena.pdf"
              label="Currículo"
              icon={<Download size={20} />}
              download
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
}
