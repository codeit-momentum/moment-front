import styled from 'styled-components';

export const GNBLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
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

//추후 아이콘 확적 시 수정하겠습니다.
export const NavIcon = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  background-color: black;
`;
export const NavLabelSpan = styled.span`
  font-size: 12px;
`;
