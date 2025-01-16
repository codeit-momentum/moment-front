import styled from 'styled-components';

export const MomentTabBarLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 3.7rem;
  border-radius: 1.5rem;
  background: #f0f0f0;
  margin-bottom: 0.8rem;
`;

export const TabButton = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  height: 100%;
  text-align: center;
  font-family: inherit;
  font-size: 16px;
  color: ${({ $isSelected }) => ($isSelected ? '#000' : '#999')};
`;

export const Divider = styled.div`
  width: 0.1rem;
  height: 2.7rem;
  background: #8a8a8a;
`;
