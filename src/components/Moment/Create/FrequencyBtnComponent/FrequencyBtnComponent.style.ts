import styled from 'styled-components';

/**
 * FrequencyBtnContainer : 실행 빈도 선택 버튼 전체를 감싸는 컨테이너
 */
export const FrequencyBtnLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  position: relative;
  width: 100%;
  padding: 0rem 3rem;
`;

/**
 * Label : 실행 빈도 선택 섹션의 제목
 */
export const Label = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  white-space: pre-wrap;
  margin-top: 3.2rem;
`;
export const FrequencyBtnContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })}
  width: 100%;
`;

/**
 * BtnGrid : 실행 빈도 선택 버튼을 감싸는 컨테이너
 */

export const FrequencyBtnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.5rem;
  justify-content: center;
  margin: 3rem auto;
`;

export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
`;
