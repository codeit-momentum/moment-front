import IcArrow from '../../assets/svg/IcArrow';
import * as S from './MomentComplete.style';
import { useEffect, useState } from 'react';
import Button from '../../components/Button/Button';

// API 응답 타입
interface MomentCompleteResponse {
  startDate: string;
  endDate: string;
  momentList: { id: string; description: string }[];
}
/**
 * 임시 데이터 (뷰작업을 위한)
 */
const mockMomentData: MomentCompleteResponse = {
  startDate: '2024.01.01',
  endDate: '2024.01.14',
  momentList: [
    { id: '0102', description: '코 잡기: 원하는 길이로 코를 잡기' },
    { id: '0104', description: '첫 줄 뜨기: 기본 코를 고르게 뜨기' },
    {
      id: '0106',
      description:
        '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
    },
    { id: '0108', description: '마무리 뜨기: 끝 코를 정리하며 마감' },
    { id: '0112', description: '첫 줄 뜨기: 기본 코를 고르게 뜨기' },
    {
      id: '0114',
      description:
        '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
    },
    { id: '0116', description: '마무리 뜨기: 끝 코를 정리하며 마감' },
  ],
};

/**
 * MomentComlete
 * 임시 데이터를 사용하여 "모멘트 설계 완료" 페이지 렌더링
 */
const MomentComplete = () => {
  const [data, setData] = useState<{ id: string; description: string }[]>([]); // 초기값은 목데이터
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [loading, setLoading] = useState(false); // 로딩 상태 관리 -> 로딩 상태 관리 해야하는가..? -> 백연결시 필요한가,,
  const [error, setError] = useState<string | null>(null); // 에러 메시지 관리 -> 추후 작업
  console.log(error, loading);
  // API 연동 로직
  const fetchMomentCompleteData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Mock 데이터 사용
      setStartDate(mockMomentData.startDate);
      setEndDate(mockMomentData.endDate);
      setData(mockMomentData.momentList);
      // 실제 API 호출 (나중에 API가 준비되면 주석을 해제)
      // const response =
      //   await axiosInstance.get<MomentCompleteResponse>('/moments/complete');

      // const { startDate, endDate, momentList } = response.data;
      // setStartDate(startDate);
      // setEndDate(endDate);
      // setData(momentList);
    } catch (err) {
      console.error('API 호출 실패, Mock 데이터 사용:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMomentCompleteData();
  }, []);

  return (
    <S.MomentCompleteLayout>
      {/* 타이틀 */}
      <S.MomentCompleteTitle>모멘트 설계 완료 !</S.MomentCompleteTitle>
      {/* 날짜 범위 */}
      <S.DateContainer>
        <S.DateText>{startDate}</S.DateText>
        <IcArrow />
        <S.DateText>{endDate}</S.DateText>
      </S.DateContainer>
      {/* 방법 리스트 */}
      <S.MethodContainer>
        <S.MethodLabel>방법</S.MethodLabel>
        <S.MethodListItemWrapper>
          {data.map((item) => (
            <S.MethodItem key={item.id}>
              <S.MethodId>{item.id}</S.MethodId>
              <S.MethodDescription>{item.description}</S.MethodDescription>
            </S.MethodItem>
          ))}
        </S.MethodListItemWrapper>
      </S.MethodContainer>
      <S.BtnContainer>
        <Button>확인</Button> {/* 버튼 로직 구현 추후 */}
      </S.BtnContainer>
    </S.MomentCompleteLayout>
  );
};

export default MomentComplete;
