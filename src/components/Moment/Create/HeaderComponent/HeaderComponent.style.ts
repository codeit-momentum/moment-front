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
  position: relative;
  padding-top: 2.3rem;
  gap: 1rem;
`;

export const HeaderTitleContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'center', justify: 'center' })};
  gap: 1.5rem;
  display: flex;
`;
export const IconWrapper = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })}
`;

export const HeaderTitle = styled.h1`
  font-size: 20px;
  line-height: 37px;
  word-break: keep-all;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderSubtitle = styled.p`
  font-size: 16px;
  text-align: center;
  line-height: 37px;
  color: ${({ theme }) => theme.colors.white};
`;
