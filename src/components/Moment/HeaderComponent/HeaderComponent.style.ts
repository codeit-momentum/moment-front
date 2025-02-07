import styled from 'styled-components';

/**
 * HeaderContainer
 * - 제목과 부제목을 포함하는 최상위 컨테이너
 */

export const HeaderLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  position: relative;
  padding-top: 5rem;
`;

export const HeaderTitleContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'center', justify: 'center' })};
  margin-bottom: 2rem;
  gap: 1.5rem;
  display: flex;
  margin-top: 2rem;
`;
export const IconWrapper = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })}
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderSubtitle = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
