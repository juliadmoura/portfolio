import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={` w-full border-(--primary-black) border-[1.5px] rounded-sm shadow-sm h-14 sm:text-sm py-4 px-6 ${className}`}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={`w-full border-(--primary-black) border-[1.5px] rounded-sm shadow-sm sm:text-sm py-4 px-6 ${className}`}
    />
  );
}
