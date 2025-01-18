/**
 * fetchMockData
 * - 가상 API 요청 함수
 * - Promise를 사용해 비동기 흐름 시뮬레이션
 * - 2초 후 목데이터 반환
 */
export const fetchMockData = async (): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        duration: 7, // 예상 소요 기간
        todoList: [
          '코 잡기: 원하는 길이로 코를 잡기',
          '첫 줄 뜨기: 기본 코를 고르게 뜨기',
          '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
          '마무리 뜨기: 끝 코를 정리하며 마감',
        ], // 투두리스트 데이터
      });
    }, 2000); // 2초 지연 후 데이터 반환
  });
};
