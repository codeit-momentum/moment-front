import styled from 'styled-components';

export const DayCheckListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  gap: 1rem;
  width: 23.8rem;
`;

export const CheckContainer = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })};
  width: 2rem;
  gap: 1rem;
`;

export const DaySpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  line-height: 20px;
`;
