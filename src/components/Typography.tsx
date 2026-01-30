import { TypographyProps } from '@/types/typography';

const fontWeightMap = {
  light: 'font-light',
  regular: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold',
} as const;

const fontColor = {
  zinc500: '--zinc-500',
  zinc300: '--zinc-300',
  black: '--primary-black',
  white: '--primary-white',
} as const;

export function Heading({
  weight = 'bold',
  text,
  outlined,
  color = 'black',
  ...props
}: TypographyProps) {
  return (
    <>
      {!outlined && (
        <h1
          style={{ color: `var(${fontColor[color]})` }}
          className={` text-5xl/[56px] ${fontWeightMap[weight]}`}
        >
          {text}
        </h1>
      )}
      {outlined && (
        <h1
          style={{ color: `var(${fontColor[color]})` }}
          className={` relative text-5xl/[56px] ${fontWeightMap[weight]}`}
        >
          {/* Stroke (fora) */}
          <span className="absolute inset-0 text-transparent tracking-[-0.02em] [-webkit-text-stroke:4px_black]">
            {text}
          </span>

          {/* Texto normal */}
          <span className="relative tracking-[-0.02em] text-(--primary-white)">
            {text}
          </span>
        </h1>
      )}
    </>
  );
}
export function Paragraph({
  weight = 'bold',
  text,
  color = 'zinc500',
  ...props
}: TypographyProps) {
  return (
    <p
      style={{ color: `var(${fontColor[color]})` }}
      className={` text-base tracking-[0.02em]`}
    >
      {text}
    </p>
  );
}

export function Display({
  weight = 'bold',
  text,
  color = 'black',
  ...props
}: TypographyProps) {
  return (
    <>
      <h1
        className={`
          text-[20px]/[24px]
          tracking-[0.02em]
          ${fontWeightMap[weight]}
          transition-colors duration-200
          text-(color:${fontColor[color]})
          group-hover:text-(color:--zinc-500)
        `}
      >
        {text}
      </h1>
    </>
  );
}
