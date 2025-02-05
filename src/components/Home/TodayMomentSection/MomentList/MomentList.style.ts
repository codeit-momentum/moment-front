import styled from 'styled-components';

export const MomentListLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'center',
    })};
  gap: 1.1rem;
  width: 100%;
  position: relative;
  top: 6.5rem;
`;

export const MomentItem = styled.div<{ $isCompleted: boolean }>`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'flex-start',
    })};
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
  width: 42.9%;
  min-width: 9.11rem;
  max-width: 11.44rem;
`;

export const MomentBox = styled.div<{ $isCompleted: boolean }>`
  width: 9.5rem;
  height: 12rem;
  background-color: ${({ $isCompleted, theme }) =>
    $isCompleted ? theme.colors.gray : theme.colors.yellow};
  border-radius: 0.71rem;
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'center',
    })};
  position: relative;

  ${({ $isCompleted, theme }) =>
    !$isCompleted &&
    `box-shadow: 0px 0px 1.43rem 0.14rem ${theme.colors.yellow};`};
`;

export const ClearBadgeSpan = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(40deg);
  width: 8rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.25rem solid ${({ theme }) => theme.colors.red};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.red};
  font-size: 1.25rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const MomentTitleSpan = styled.div`
  font-size: 1.07rem;
  line-height: 2.32rem;
  color: #000;
  text-align: center;
  margin-top: 0.89rem;
`;

export const StyledIcClip = styled.svg`
  width: 5rem;
  height: 2rem;
`;
