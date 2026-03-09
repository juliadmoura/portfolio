import { ReactNode } from 'react';

export type TypographyProps = {
  weight?: FontWeight;
  text?: string;
  outlined?: boolean;
  color?: FontColor;
  children?: ReactNode;
  size?: FontSize;
  className?: string;
  inheritColor?: boolean;
};

export type FontWeight =
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold';

export type FontColor = 'zinc500' | 'zinc300' | 'white' | 'black';

export type FontSize = 'h1' | 'h2';
