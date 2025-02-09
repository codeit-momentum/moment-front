import { CreateMomentPayload } from '../types/moment/createMomentTypes';
import { formatApiDate } from './formatDate';

/**
 * 실행 빈도(frequency)에 따라 현재 날짜부터 duration까지 모멘트 날짜를 생성하는 함수
 */
export const generateMomentDates = (
  payload: CreateMomentPayload,
): { id: string; startDate: string; endDate: string; content: string }[] => {
  const { duration, frequency, todoList } = payload;
  if (!duration || !frequency || todoList.length === 0) return [];

  // 현재 날짜를 UTC 기준으로 설정
  const baseDate = new Date();
  baseDate.setUTCHours(0, 0, 0, 0); // 시간 초기화

  console.log('📌 현재 날짜 baseDate:', baseDate.toISOString());

  let interval = 1;
  if (frequency === 'every2days') interval = 2;
  if (frequency === 'weekly') interval = 7;
  if (frequency === 'monthly') interval = 30;

  return Array.from({ length: duration }, (_, i) => {
    const newStartDate = new Date(baseDate);
    newStartDate.setDate(baseDate.getDate() + i * interval);

    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newStartDate.getDate() + interval);

    const formattedStart = formatApiDate(newStartDate.toISOString());
    const formattedEnd = formatApiDate(newEndDate.toISOString());

    return {
      id: `moment-${i}`,
      startDate: formattedStart,
      endDate: formattedEnd,
      content: todoList[i % todoList.length],
    };
  }).filter((moment) => moment.startDate && moment.endDate);
};
