import styled from 'styled-components';

export const DayCheckboxGroupLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })};
  gap: 1rem;
  width: 100%; /* 부모 크기에 맞게 확장 */

  /* 위치 조정을 위한 설정 */
  position: relative;
  top: 5rem; /* 원하는 만큼 아래로 이동 */
`;

export const DayWrapperList = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      justify: 'flex-start',
    })}; /* space-between 대신 flex-start 사용 */
  width: 100%;
  gap: 0.1rem; /* 간격을 좁힘 */
  flex-wrap: wrap; /* 여러 줄로 배치되도록 */
`;

export const DayWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })};
  gap: 0.5rem;
  flex: 1; /* flex 1로 동적 크기 조정 */
  max-width: 14%; /* 최대 너비 설정 */
`;

export const DayTextItem = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.white}; /* 요일 글자를 흰색으로 설정 */
  text-align: center; /* 텍스트 정렬 */
`;

export const DayCheckboxBox = styled.div<{ $isChecked: boolean }>`
  width: 2rem; /* 크기를 상대적으로 늘림 */
  height: 2rem;
  border: 0.1875rem solid ${({ theme }) => theme.colors.white}; /* mixin으로 흰색 사용 */
  border-radius: 0.25rem; /* 모서리를 살짝 둥글게 (4px) */
  background-color: ${({ $isChecked, theme }) =>
    $isChecked
      ? theme.colors.blue
      : 'transparent'}; /* 체크된 상태: mixin 블루, 기본: 투명 */
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })};
`;
