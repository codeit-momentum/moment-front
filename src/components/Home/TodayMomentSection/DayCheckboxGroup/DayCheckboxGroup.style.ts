import styled from 'styled-components';

export const DayCheckboxGroupLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })}
  gap: 1rem;
`;

export const DayWrapperList = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'row', justify: 'space-between' })}
  width: 100%;
`;

export const DayWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })}
  gap: 0.5rem;
`;

export const DayTextItem = styled.div`
  font-size: 1rem;
  color: #000;
`;

export const DayCheckboxBox = styled.div<{ $isChecked: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.125rem solid #ccc;
  background-color: ${({ $isChecked }) => ($isChecked ? '#6A7CB7' : '#FCFCFC')};
  ${({ theme }) => theme.mixin.flexBox({ align: 'center', justify: 'center' })}
`;
