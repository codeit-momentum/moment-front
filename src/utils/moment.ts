import { FormEvent } from 'react';
import { BucketType } from '../types/moment';

export const BUCKET_MAX_LENGTH = 30;
export const MOMENT_MAX_LENGTH = 20;
export const MAX_MOMENT_COUNT = 3;

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

export const getAchievementRate = (
  completedMomentsCount: number,
  momentsCount: number,
): number => {
  if (momentsCount === 0) return 0;
  return Math.round((completedMomentsCount / momentsCount) * 100);
};

export const getMaxLength = (type: BucketType | '생성형') =>
  type === '생성형' ? MOMENT_MAX_LENGTH : BUCKET_MAX_LENGTH;
