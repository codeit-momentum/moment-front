import { CreateMomentPayload } from '../types/moment/createMomentTypes';
import { formatApiDate } from './formatDate';

/**
 * 실행 빈도(frequency)에 따라 현재 날짜부터 duration까지 모멘트 날짜를 생성하는 함수
 */
export const generateMomentDates = (
  startDate: string,
  payload: CreateMomentPayload,
): { startDate: string; endDate: string; content: string }[] => {
  const { duration, frequency, todoList } = payload;
  if (!duration || !frequency || todoList.length === 0) return [];

  // 현재 날짜를 UTC 기준으로 설정
  let baseDate = new Date(startDate);
  baseDate.setHours(0, 0, 0, 0); // 시간 초기화

  console.log('📌 현재 날짜 baseDate:', baseDate.toISOString());

  let interval = 1;
  if (frequency === 'every2days') interval = 2;
  if (frequency === 'weekly') interval = 7;
  if (frequency === 'monthly') interval = 30;

  const momentDates = [];
  let currentDate = new Date(baseDate);

  for (let i = 0; i < duration; i += interval) {
    const newStartDate = new Date(currentDate);
    const newEndDate = new Date(newStartDate);
    newEndDate.setDate(newEndDate.getDate() + (interval - 1));

    // duration 초과 방지 (startDate + duration - 1 → startDate + duration)
    if (
      newEndDate.getTime() >
      baseDate.getTime() + duration * 24 * 60 * 60 * 1000
    ) {
      newEndDate.setTime(baseDate.getTime() + duration * 24 * 60 * 60 * 1000);
    }

    const formattedStart = formatApiDate(newStartDate.toISOString());
    const formattedEnd = formatApiDate(newEndDate.toISOString());

    if (!formattedStart || !formattedEnd) {
      console.error('Invalid moment date:', newStartDate, newEndDate);
      continue;
    }

    momentDates.push({
      startDate: formattedStart,
      endDate: formattedEnd,
      content: todoList[i % todoList.length],
    });

    console.log('추가된 moment:', momentDates[momentDates.length - 1]);

    currentDate.setDate(currentDate.getDate() + interval);
  }

  console.log('최종 momentDates:', momentDates);
  return momentDates;
};
