import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MomentTabBarLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 31.5rem;
  height: 3.7rem;
  margin-bottom: 1rem;
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
  // gray -> darkGray로 수정
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.white : theme.colors.gray};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.black : theme.colors.yellow};
`;

export const ActiveBorder = styled.div`
  // 이거 동작은 잘되는데 참조하는 부모요소가 뭔지 모르겠음..
  position: absolute;
  width: 16rem;
  height: 4.1rem;
  border-radius: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
`;
