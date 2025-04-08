import styled from 'styled-components';

export const Divider = styled.hr`
  width: 27.5rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
`;
