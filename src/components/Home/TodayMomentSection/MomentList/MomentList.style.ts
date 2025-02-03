import styled from 'styled-components';

export const MomentListLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'center',
    })};
  gap: 0.875rem;
`;

export const MomentItem = styled.div<{ $isCompleted: boolean }>`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'flex-start',
    })};
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
  width: 5.375rem;
`;

export const MomentCategoryBox = styled.div<{ $isCompleted: boolean }>`
  width: 3.4375rem;
  height: 1.125rem;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? '#9E9E9E' : '#000'};
  color: #fff;
  border-radius: 0.625rem;
  text-align: center;
  line-height: 1.125rem;
  font-size: 0.75rem;
  margin-bottom: -0.625rem;
  position: relative;
  z-index: 1;
`;

export const MomentBox = styled.div<{ $isCompleted: boolean }>`
  width: 5.375rem;
  height: 5.9375rem;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? '#D9D9D9' : '#FF67FA'};
  border-radius: 0.3125rem;
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'center',
    })};
  position: relative;
  z-index: 0;
`;

export const ClearBadgeSpan = styled.div`
  position: absolute;
  top: 0.9375rem;
  left: 0.3125rem;
  background-color: red;
  color: white;
  font-size: 0.625rem;
  padding: 0.125rem 0.3125rem;
  border-radius: 0.1875rem;
`;

export const MomentTitleSpan = styled.div`
  font-size: 0.875rem;
  color: #000;
  text-align: center;
  margin-top: 0.625rem;
`;
