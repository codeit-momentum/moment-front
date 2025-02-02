import { FormEvent } from 'react';

export const handleResizeHeight = (e: FormEvent<HTMLTextAreaElement>) => {
  const target = e.target as HTMLTextAreaElement;
  target.style.height = '20px';
  target.style.height = `${target.scrollHeight}px`;
};

export const setBucketState = (
  isCompleted: boolean,
  isChallenging: boolean,
) => {
  if (isCompleted) return 'completed';
  if (isChallenging) return 'inProgress';
  return 'pending';
};

export const checkDateRange = (startDate: string, endDate: string) => {
  const currentDate = new Date();
  return currentDate < new Date(startDate) || currentDate > new Date(endDate);
};
