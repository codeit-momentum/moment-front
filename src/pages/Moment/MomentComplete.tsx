import React from 'react';
import * as S from './MomentComplete.style';

/**
 * 임시 데이터 (뷰작업을 위한)
 */
const mockMomentData = [
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
export const MomentComplete: React.FC = () => {
  return (
    <S.Container>
      <S.Title>모멘트 설계 완료 !</S.Title>
      <S.DateContainer>
        <S.DateBox>2024.01.01</S.DateBox>
        <S.Arrow>▼</S.Arrow>
        <S.DateBox>2024.01.14</S.DateBox>
      </S.DateContainer>
      <S.MethodBox>
        <S.MethodLabel>방법</S.MethodLabel>
        <S.MethodList>
          {mockMomentData.map((item) => (
            <S.MethodItem key={item.id}>
              <S.MethodId>{item.id}</S.MethodId>
              <S.MethodDescription>{item.description}</S.MethodDescription>
            </S.MethodItem>
          ))}
        </S.MethodList>
      </S.MethodBox>
    </S.Container>
  );
};

export default MomentComplete;
