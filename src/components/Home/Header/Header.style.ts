import styled from 'styled-components';

export const HeaderLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; /* 중앙 정렬 */
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.black};

  /* 부모 레이아웃에서 필요한 간격을 설정 */
  padding-left: 1.25rem; /* 좌측 내부 여백 */
  padding-right: 1.25rem; /* 우측 내부 여백 */
`;

export const StreakTextContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ justify: 'center', align: 'center' })};
  width: 100%;
  gap: 0.5rem; /* 글자 간 간격 */
  font-size: 1.25rem; /* 기본 글씨 크기 */
  line-height: 2.31rem; /* 줄 간격 */
  text-align: center;

  /* 내부에서만 간격 처리 */
  padding: 0 1.5rem; /* 좌우 여백 */
`;

export const StreakText = styled.span`
  color: ${({ theme }) => theme.colors.white}; /* mixin 화이트 적용 */
  font-size: 2rem;
  font-weight: 400;
`;

export const StreakHighlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow}; /* mixin 노랑 적용 */
  font-size: 1.875rem; /* 30px */
  font-weight: bold; /* 굵은 텍스트 */
  text-align: center;
`;

export const BellIconBox = styled.div`
  position: absolute;
  top: 50%;
  right: 1.25rem; /* 오른쪽 여백 */
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: transparent;
`;
