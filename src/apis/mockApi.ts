export type TodoResponse = {
  duration: number;
  todoList: string[];
};

const fetchMockData = async (): Promise<TodoResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        duration: 7,
        todoList: [
          '코 잡기: 원하는 길이로 코를 잡기',
          '첫 줄 뜨기: 기본 코를 고르게 뜨기',
          '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
          '마무리 뜨기: 끝 코를 정리하며 마감',
        ],
      });
    }, 2000);
  });
};

export default fetchMockData;
