import styled from 'styled-components';

export const GNBLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ justify: 'space-between', align: 'flex-start' })};
  background-color: ${({ theme }) => theme.colors.black};
  position: fixed;
  width: 33.5rem;
  height: 6rem;
  bottom: 0;
`;
export const NavItem = styled.ul`
  display: flex;
`;
