import { ButtonProps } from '@/types/button';
import { Display } from './Typography';

export function Button({ label, icon, ...props }: ButtonProps) {
  return (
    <>
      <a
        className="inline-flex items-center gap-2 rounded-sm bg-(--primary-black) px-7 py-3 text-(--primary-white) hover:bg-(--primary-neutral) hover:text-(--primary-white)"
        href="#"
      >
        <span className="text-[20px]"> {label} </span>

        <span>{icon}</span>
      </a>
    </>
  );
}

export function IconButton({ icon, url, ...props }: ButtonProps) {
  return (
    <>
      <a
        className="inline-flex items-center rounded-sm border-2 duration-300 ease-in-out hover:border-transparent bg-(--primary-white) p-4 text-(--primary-black) hover:bg-(--primary-black) hover:text-(--primary-white) transition-colors"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>{icon}</span>
      </a>
    </>
  );
}

export function SkillBox({ icon, url, label, ...props }: ButtonProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-8 flex-col rounded-sm border-2 duration-300 ease-in-out hover:border-transparent bg-(--primary-white) h-48 w-48 text-(--primary-black) hover:bg-(--primary-black) hover:text-(--primary-white) transition-colors">
        <span>{icon}</span>
        <Display weight="bold" color="black" text={label} />
      </div>
    </>
  );
}
