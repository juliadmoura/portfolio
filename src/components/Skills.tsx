import { Git } from '@/assets/icons/skills/git';
import { JavaScript } from '@/assets/icons/skills/javascript';
import { React } from '@/assets/icons/skills/react';
import { Tailwind } from '@/assets/icons/skills/tailwind';

import { Html } from '@/assets/icons/skills/html';
import { Java } from '@/assets/icons/skills/java';
import { Kotlin } from '@/assets/icons/skills/kotlin';
import { Next } from '@/assets/icons/skills/next';
import { Redux } from '@/assets/icons/skills/redux';
import { Scss } from '@/assets/icons/skills/scss';
import { Sql } from '@/assets/icons/skills/sql';
import { TypeScript } from '@/assets/icons/skills/typescript';
import { SkillBox } from './Button';
import { Heading } from './Typography';

export default function Skills() {
  return (
    <>
      <section className="flex justify-center flex-col items-center gap-6 px-4 md:px-20 2xl:px-44 py-12 ">
        <div className="py-5">
          <Heading as="h2">
            <span className="font-normal">Minhas </span>
            <span className="font-extrabold">Habilidades</span>
          </Heading>
        </div>
        <div
          className="py-5
  grid
  gap-8
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-4
  lg:grid-cols-5
  xl:grid-cols-6
  2xl:grid-cols-6
  justify-items-center"
        >
          <SkillBox icon={<JavaScript size={56} />} label="JavaScript" />
          <SkillBox icon={<React size={56} />} label="React" />
          <SkillBox icon={<Next size={56} />} label="Next.js" />
          <SkillBox icon={<Tailwind size={56} />} label="Tailwindcss" />
          <SkillBox icon={<TypeScript size={56} />} label="Typescript" />
          <SkillBox icon={<Git size={56} />} label="Git" />
          <SkillBox icon={<Html size={56} />} label="Html" />
          <SkillBox icon={<Redux size={56} />} label="Redux" />
          <SkillBox icon={<Kotlin size={56} />} label="Kotlin" />
          <SkillBox icon={<Java size={56} />} label="Java" />
          <SkillBox icon={<Sql size={56} />} label="SQL" />

          <SkillBox
            icon={<Scss size={56} />}
            label="Sass/Scss
          "
          />
        </div>
      </section>
    </>
  );
}
