import React from 'react';
import * as S from './LoadingSpinner.style';

/**
 * LoadingSpinner
 * - 데이터를 로드하는 동안 로딩 상태를 시각적으로 표시하는 컴포넌트
 * - 디자이너가 제공한 로딩 이미지로 사용할 것으로 예상,,, 아마도...?????????
 */

export const LoadingSpinner: React.FC = () => (
  <S.SpinnerContainer>
    <S.Spinner />
    <S.LoadingText>모멘트를 가져오는 중...</S.LoadingText>
  </S.SpinnerContainer>
);
