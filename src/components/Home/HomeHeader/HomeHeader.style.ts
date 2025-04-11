import styled from 'styled-components';

export const HeaderLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
    })};
  position: relative;
  padding-top: 1rem;
  padding-bottom: 0.9rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 0.6px;
`;

export const DateSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow}; /* mixin 노랑 적용 */
  font-size: 30px;
  letter-spacing: 0.96px;
  padding-left: 0.8rem;
`;

export const IconWrapper = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
`;
