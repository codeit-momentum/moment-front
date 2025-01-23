import styled from 'styled-components';

export const GNBLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  width: 37.5rem;
  height: 5.7rem;
  padding: 0 4rem 2rem 4rem;
  bottom: 0;
`;
export const NavItem = styled.ul`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 3.6rem;
`;
