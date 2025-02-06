import styled from 'styled-components';

export const HeaderLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  padding-top: 1rem;
  padding-bottom: 0.9rem;
`;

export const StreakTextContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ justify: 'center', align: 'center' })};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.6px;
`;

export const StreakHighlight = styled.span`
  color: ${({ theme }) => theme.colors.yellow}; /* mixin 노랑 적용 */
  font-size: 30px;
  letter-spacing: 0.96px;
`;

export const BellIconWrapper = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
`;
