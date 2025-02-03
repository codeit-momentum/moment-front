import styled from 'styled-components';

export const HeaderLayout = styled.div`
  position: relative; /* BellIconBox의 위치 기준 설정 */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  height: 3.75rem; /* 헤더 높이 수정 (기존: 2.875rem -> 새 비율 적용) */
`;

export const BellIconBox = styled.div`
  position: absolute; /* HeaderLayout 내에서 위치 조정 */
  top: 30px; /* 피그마 기준 상단 여백 적용 */
  right: 20px; /* 피그마 기준 오른쪽 여백 적용 */
  width: 42px; /* 아이콘 크기 */
  height: 42px; /* 아이콘 크기 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  /* 디버깅용 스타일 */
  background-color: transparent; /* 배경 투명 */
`;
