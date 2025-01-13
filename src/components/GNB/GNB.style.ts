import styled from 'styled-components';

export const GNBLayout = styled.div`
  ${({ theme: mixin }) => mixin.flexBox({ justify: 'space-between' })};
  position: fixed;
  bottom: 0;
`;
export const NavItem = styled.ul`
  width: 100%;
`;

//추후 아이콘 확적 시 수정하겠습니다.
export const NavIcon = styled.div``;
export const NavLabelSpan = styled.span``;
