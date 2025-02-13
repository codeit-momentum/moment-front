import { useLocation } from 'react-router-dom';
import { CreateMomentResponse } from '../types/moment/createMomentTypes';

const useMomentData = (
  bucketId: string,
): {
  momentData: CreateMomentResponse | null;
  saveMomentData: (data: CreateMomentResponse) => void;
} => {
  const location = useLocation();
  const key = `momentConfig-${bucketId}`;

  // momentData 불러오기
  const getMomentData = (): CreateMomentResponse | null => {
    try {
      const storedMomentData =
        localStorage.getItem(key) || sessionStorage.getItem(key);

      if (storedMomentData) {
        const parsedData = JSON.parse(storedMomentData);

        // sessionStorage 복구
        if (!sessionStorage.getItem(key)) {
          console.log(`sessionStorage 데이터 복구: ${key}`, parsedData);
          sessionStorage.setItem(key, JSON.stringify(parsedData));
        }
        return parsedData;
      } else if (location.state) {
        console.log(`location.state에서 momentData 복구됨:`, location.state);
        localStorage.setItem(key, JSON.stringify(location.state));
        sessionStorage.setItem(key, JSON.stringify(location.state));
        return location.state;
      }

      console.error(
        ` useMomentData: ${key}에 해당하는 momentData를 찾을 수 없음.`,
      );
      return null;
    } catch (error) {
      console.error(`useMomentData 오류:`, error);
      return null;
    }
  };

  // momentData 저장하기
  const saveMomentData = (data: CreateMomentResponse) => {
    try {
      const dataString = JSON.stringify(data);
      localStorage.setItem(key, dataString);
      sessionStorage.setItem(key, dataString);
      console.log(`momentData 저장됨 (${key}):`, data);
    } catch (error) {
      console.error(`sessionStorage/localStorage 저장 실패:`, error);
      alert('세션 데이터 저장 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return { momentData: getMomentData(), saveMomentData };
};

export default useMomentData;
