import { useQuery } from '@tanstack/react-query';
import { fetchMockData } from '../../apis/mockApi';

export const useTodoList = (mode: 'auto' | 'manual') => {
  return useQuery({
    queryKey: ['todos', mode],
    queryFn: async () => {
      // 수동 모드일 때는 빈 데이터 반환
      if (mode === 'manual') {
        return {
          duration: 0,
          todoList: [''], // 빈 문자열로 시작하는 1개의 항목
        };
      }
      // 자동 모드일 때는 목데이터 가져오기
      return fetchMockData();
    },
    enabled: mode === 'auto', // 자동 모드에서만 쿼리 실행
    initialData: {
      duration: 0,
      todoList: [''],
    },
  });
};
