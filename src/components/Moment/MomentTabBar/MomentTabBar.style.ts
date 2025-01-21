import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MomentTabBarLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 3.7rem;
  border-radius: 1.5rem;
  background-color: #f0f0f0;
  margin-bottom: 0.8rem;
`;

export const TabWrapper = styled(NavLink)`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 100%;
`;

export const TabSpan = styled.span<{ $isActive: boolean }>`
  font-size: 16px;
  color: ${({ $isActive }) => ($isActive ? `#000` : `#999`)};
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 2.7rem;
  background-color: #8a8a8a;
`;
