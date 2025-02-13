import styled from 'styled-components';

/**
 * Container : 전체 페이지 컨테이너
 */
export const MomentCompleteLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  gap: 1rem;
  position: relative;
`;
/**
 * Title: 상단 제목
 */
export const MomentCompleteTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.white};
`;

/**
 * DateContainer : 날짜 박스 컨테이너
 */
export const DateContainer = styled.div`
  position: relative;
  width: 29.5rem;
  height: 4.7rem;
  margin-top: 2rem;
`;

/**
 * DateBox : 날짜 박스
 */
export const DateText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  gap: 2.2rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

/**
 * MethodList : 방법 리스트
 */
export const MethodListItemWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem 0;
`;

/**
 * MethodItem : 방법 항목
 */
export const MethodItem = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'flex-start' })};
  gap: 1rem;
`;

/**
 * MethodId : 방법 항목 ID
 */
export const MethodId = styled.span`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })};
  width: 3.7rem;
  height: 2.8rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.yellow};
`;

/**
 * MethodDescription : 방법 항목 설명
 */
export const MethodDescription = styled.span`
  width: 24.2rem;
  height: auto;
  font-size: 12px;
  white-space: pre-wrap;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.white};
`;

export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
  margin-top: 2rem;
`;
