import styled from 'styled-components';

export const TodayMomentLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'flex-start',
    })};
  width: 33.5rem;
  height: 45rem; /* 기존 높이 유지 */
  background-color: ${({ theme }) => theme.colors.blue};
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  border-radius: 2rem;
  padding: 3rem 2.86rem;
  gap: 2.5rem; /* 간격 */
  box-shadow: inset 0 0 0 0.1rem ${({ theme }) => theme.colors.black};

  /* 전체 박스를 아래로 이동 */
  position: relative;
  top: 3rem; /* 원하는 높이만큼 아래로 이동 */
`;

export const DividerLine = styled.div`
  width: 100%;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.1rem;

  /* 위치 조정을 위한 설정 */
  position: relative;
  top: 5rem; /* 원하는 만큼 아래로 이동 */
`;

export const TodayMessageBox = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'center',
    })};
  width: 100%;
  max-width: 16.25rem;
  height: auto;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.5rem; /* 적절한 폰트 크기 */
  line-height: 1.8rem; /* 줄 간격 조정 */

  position: relative; /* 기준점 설정 */
  top: 10.5rem; /* 원하는 만큼 아래로 이동 */

  /* 텍스트 줄바꿈 방지 */
  white-space: nowrap;

  span {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: inherit;
    font-weight: bold;
  }
`;
