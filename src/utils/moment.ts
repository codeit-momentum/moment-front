import { FormEvent } from 'react';

export const handleResizeHeight = (e: FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = '20px';
  target.style.height = `${target.scrollHeight}px`;
};
