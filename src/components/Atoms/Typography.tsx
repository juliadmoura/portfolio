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
  as: Tag = 'h1',
  weight = 'bold',
  outlined,
  color = 'black',
  children,
  className = '',
}: TypographyProps) {
  const baseStyles = `text-5xl/[56px] tracking-[-0.02em] ${fontWeightMap[weight]} ${className}`;

  if (!outlined) {
    return (
      <Tag style={{ color: `var(${fontColor[color]})` }} className={baseStyles}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      style={{ color: `var(${fontColor[color]})` }}
      className={`relative ${baseStyles}`}
    >
      {/* Stroke */}
      <span className="absolute inset-0 text-transparent [-webkit-text-stroke:4px_black]">
        {children}
      </span>

      {/* Texto normal */}
      <span className="relative text-(--primary-white)">{children}</span>
    </Tag>
  );
}
export function Paragraph({
  weight = 'regular',
  text,
  color = 'zinc500',
  children,
  ...props
}: TypographyProps) {
  return (
    <p
      style={{ color: `var(${fontColor[color]})` }}
      className={` text-base 
        leading-relaxed 
        tracking-[0.01em] 
        ${fontWeightMap[weight]} 
        `}
    >
      {children}
    </p>
  );
}

export function Display({
  weight = 'bold',
  color = 'black',
  children,
  text,
  inheritColor = false,
  ...props
}: TypographyProps) {
  return (
    <h1
      className={`
      text-[20px]/[24px]
      tracking-[0.02em]
      ${fontWeightMap[weight]}
      ${!inheritColor ? `text-[var(${fontColor[color]})]` : ''}
      transition-colors duration-200
    `}
      {...props}
    >
      {children ?? text}
    </h1>
  );
}
export function Title({
  weight = 'semibold',
  text,
  color = 'white',
  children,
  ...props
}: TypographyProps) {
  return (
    <p
      style={{ color: `var(${fontColor[color]})` }}
      className={` text-2xl
        leading-relaxed 
        tracking-[0.01em] 
        ${fontWeightMap[weight]} 
         `}
    >
      {children}
    </p>
  );
}
