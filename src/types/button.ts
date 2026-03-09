import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonProps = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  url?: string;
  href?: string;
  download?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;
