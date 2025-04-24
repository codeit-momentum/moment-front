import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MomentTabBarLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 31.5rem;
  height: 3.7rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const TabWrapper = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

export const TabBox = styled.div<{ $isActive: boolean }>`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.darkGray};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.black : theme.colors.yellow};
`;

export const ActiveBorder = styled.div`
  position: absolute;
  width: 16rem;
  height: 4.1rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
`;
