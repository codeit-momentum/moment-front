import styled from 'styled-components';

export const DayCheckboxGroupLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  gap: 1rem;
  width: 23.8rem;
`;

export const DayWrapper = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })};
  width: 2rem;
  gap: 1rem;
`;

export const DayTextItem = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  line-height: 20px;
`;

export const DayCheckboxBox = styled.div<{ $isChecked: boolean }>`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 2rem;
  height: 2rem;
  border-radius: 2px;
  outline: 2px solid ${({ theme }) => theme.colors.white};
`;
