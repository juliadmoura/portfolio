import { Code } from '@/assets/icons/code';
import { Paragraph } from '../Atoms/Typography';

export default function Footer() {
  return (
    <footer className="bg-(--primary-black)">
      <div className="relative w-full md:px-15 px-4 py-6 sm:px-6 lg:px-15 lg:pt-6 flex items-center md:justify-between gap-4">
        <div className="text-(--primary-white)">
          <Code></Code>
        </div>

        <Paragraph className="text-xs md:text-base text-center">
          © 2026 Julia Damacena. Todos os direitos reservados.
        </Paragraph>
        <div className="">
          <a
            className="inline-block rounded-full bg-(--primary-white) p-2 text-(--primary-black) shadow-sm transition hover:bg-(--zinc-300) sm:p-3 lg:p-4"
            href="#header"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
