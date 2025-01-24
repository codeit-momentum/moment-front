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
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'center', justify: 'center' })};
  gap: 2.2rem;
  width: 29.5rem;
  height: 4.7rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

/**
 * DateBox : 날짜 박스
 */
export const DateText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

/**
 * MethodBox : 방법 리스트를 감싸는 컨테이너
 */
export const MethodContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
  margin-top: 1rem;
  width: 100%;
  padding: 1rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.blue};
`;

/**
 * MethodLabel : 방법 섹션의 제목
 */
export const MethodLabel = styled.span`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })};
  padding: 0.5rem 2.4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
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
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.white};
`;

export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
  margin-top: 2rem;
`;
