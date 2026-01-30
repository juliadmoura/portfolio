export type TypographyProps = {
  weight: FontWeight;
  text: string;
  outlined?: boolean;
  color?: FontColor;
};

export type FontWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

export type FontColor = 'zinc500' | 'zinc300' | 'white' | 'black';
