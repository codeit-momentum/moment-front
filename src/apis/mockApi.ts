import axiosInstance from './client';

// AI API 응답 타입 정의
export type TodoResponse = {
  duration: number;
  todoList: string[];
};

// AI API 호출 함수
export const fetchTodoListFromAI = async (): Promise<TodoResponse> => {
  const response = await axiosInstance.post<TodoResponse>('/ai/moment', {
    // 필요한 데이터가 있다면 여기에 추가
  });
  return response.data;
};

// Mock 데이터 함수 (현재 사용 중)
export const fetchMockData = async (): Promise<TodoResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        duration: 7,
        todoList: [
          '코 잡기: 원하는 길이로 코를 잡기',
          '첫 줄 뜨기: 기본 코를 고르게 뜨기',
          '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
          '마무리 뜨기: 끝 코를 정리하며 마감',
          '첫 줄 뜨기: 기본 코를 고르게 뜨기',
          '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
          '마무리 뜨기: 끝 코를 정리하며 마감',
        ],
      });
    }, 2000);
  });
};
