import IcArrow from '../../assets/svg/IcArrow';
import * as S from './MomentComplete.style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';

interface MomentData {
  id: string;
  description: string;
}

interface MomentCompleteProps {
  apiUrl?: string; // API URL을 외부에서 주입받을 수 있도록
}
/**
 * 임시 데이터 (뷰작업을 위한)
 */
const mockMomentData: MomentData[] = [
  { id: '0102', description: '코 잡기: 원하는 길이로 코를 잡기' },
  { id: '0104', description: '첫 줄 뜨기: 기본 코를 고르게 뜨기' },
  {
    id: '0106',
    description: '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
  },
  { id: '0108', description: '마무리 뜨기: 끝 코를 정리하며 마감' },
  { id: '0112', description: '첫 줄 뜨기: 기본 코를 고르게 뜨기' },
  {
    id: '0114',
    description: '패턴 반복: 원하는 무늬로 꾸준히 뜨고 이 행동을 10번 반복하기',
  },
  { id: '0116', description: '마무리 뜨기: 끝 코를 정리하며 마감' },
];

/**
 * MomentComlete
 * 임시 데이터를 사용하여 "모멘트 설계 완료" 페이지 렌더링
 */
const MomentComplete = ({ apiUrl }: MomentCompleteProps) => {
  const [data, setData] = useState<MomentData[]>(mockMomentData); // 초기값은 목데이터
  const [startDate, setStartDate] = useState('2024.01.01'); // 임시 시작 날짜
  const [endDate, setEndDate] = useState('2024.01.14'); // 임시 종료 날짜
  const [loading, setLoading] = useState(false); // 로딩 상태 관리 -> 로딩 상태 관리 해야하는가..?
  const [error, setError] = useState<string | null>(null); // 에러 메시지 관리 -> 추후 작업

  // API 연동 로직
  useEffect(() => {
    if (!apiUrl) return; // API URL이 없으면 요청하지 않음

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(apiUrl);
        const { startDate, endDate, momentList } = response.data;

        setStartDate(startDate);
        setEndDate(endDate);
        setData(momentList);
      } catch (err) {
        setError('데이터를 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

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
