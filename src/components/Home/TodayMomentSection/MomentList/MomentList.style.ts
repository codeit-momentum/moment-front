import styled from 'styled-components';

export const MomentListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  gap: 1rem;
  width: 100%;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: -1rem;
`;
export const MomentBox = styled.div<{ $isCompleted: boolean }>`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 9rem;
  height: 10rem;
  position: relative;
  padding: 2rem 1rem 1rem 1rem;
  background-color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.gray : theme.colors.yellow};
  color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.darkGray : theme.colors.black};
  border-radius: 5px;

  ${({ $isCompleted, theme }) =>
    !$isCompleted && `box-shadow: 0px 0px 10px 1px ${theme.colors.yellow};`};
`;
export const ClearBadgeSpan = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-50deg);
`;

export const MomentTitleSpan = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  overflow-wrap: anywhere;
  word-break: keep-all;
  text-align: center;
`;
