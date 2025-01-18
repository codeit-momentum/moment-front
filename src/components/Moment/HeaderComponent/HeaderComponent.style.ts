import styled from 'styled-components';

/**
 * HeaderContainer
 * - 제목과 부제목을 포함하는 최상위 컨테이너
 */

export const HeaderContainer = styled.div`
  margin-top: 76px;
  margin-bottom: 5px;
  text-align: center;
`;

/**
 * Title : 화면 상단의 주요 제목
 */

export const Title = styled.h1`
  font-size: 36px;
  line-height: 37px;
  text-align: center;
  letter-spacing: -0.32px;
  margin-bottom: 15px; //제목과 부제목 사이의 간격
`;

/**
 * Subtitle : 제목 아래의 표시될 부제목
 */
export const Subtitle = styled.h2`
  font-size: 24px;
  line-height: 37px;
  letter-spacing: -0.32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
`;
