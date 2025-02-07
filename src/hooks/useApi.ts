import { useState } from 'react';
import fetchMockData from '../apis/mockApi';

/**
 * useApi
 * - 목데이터 기반 가상 API 요청 및 상태 관리
 * - 실제 API와의 교체를 고려한 구조
 */
export const useApi = () => {
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 관리
  const [data, setData] = useState<any | null>(null); // API 응답 데이터 저장

  /**
   * fetchData
   * - 가상 API 호출 함수
   * - fetchMockData 호출 및 로딩 상태 관리
   */
  const fetchData = async () => {
    setIsLoading(true); // 로딩 시작
    const result = await fetchMockData(); // 목데이터 요청
    setData(result); // 데이터 저장
    setIsLoading(false); // 로딩 종료
  };

  // 훅에서 로딩 상태, 데이터, fetchData 함수 반환
  return { isLoading, data, fetchData };
};
