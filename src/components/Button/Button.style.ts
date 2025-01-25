import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  width: 10rem;
  height: 3.5rem;
  border-radius: 10px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.32px;
`;
