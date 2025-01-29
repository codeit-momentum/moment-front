import styled from 'styled-components';

export const ProgressBar = styled.div`
  width: 100%;
  height: 2.3rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ProgressValue = styled.div<{ $value: number }>`
  width: ${({ $value }) => `${$value}%`};
  height: 2.3rem;
  border-radius: 2rem;
  background: ${({ theme }) => theme.colors.yellow};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
`;
