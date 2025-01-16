import styled from 'styled-components';

export const ProgressBar = styled.div`
  width: 100%;
  height: 2.3rem;
  border-radius: 2rem;
  background: #d9d9d9;
`;

export const ProgressValue = styled.div<{ $value: number }>`
  width: ${({ $value }) => `${$value}%`};
  height: 2.3rem;
  border-radius: 2rem;
  background: #000;
`;
