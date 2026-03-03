import { Download } from 'lucide-react';
import { Code } from '../assets/icons/code';
import { Button } from './Button';
import { Display } from './Typography';

export function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex gap-12 justify-evenly max-w-7xl items-center px-20 py-6 sm:px-6 lg:px-8">
        <a className="block mr-auto" href="#">
          <Code />
        </a>
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm">
            <li>
              <a
                href="#"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Sobre mim" weight="semibold" color="black" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Habilidades" weight="semibold" color="black" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Projetos" weight="semibold" color="black" />
              </a>
            </li>

            <li>
              <a
                href="#"
                className="group text-(--primary-black) hover:text-(--primary-neutral) transition-colors"
              >
                <Display text="Contato" weight="semibold" color="black" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4 h-full">
            <Button label="Currículo" icon={<Download size={20} />}></Button>
          </div>

          {/* <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button> */}
        </div>
      </div>
    </header>
  );
}
