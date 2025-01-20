import styled from 'styled-components';

export const GNBLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  width: 33.5rem;
  height: 6rem;
  bottom: 0;
`;
export const NavItem = styled.ul`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 3.6rem;
`;

//추후 아이콘 확정 시 수정하겠습니다.
export const AciteTab = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  background-color: black;
`;
export const UnActiveTab = styled.div`
  width: 3.6rem;
  height: 3.6rem;
  background-color: gray;
`;
export const NavLabelSpan = styled.span`
  font-size: 12px;
`;
