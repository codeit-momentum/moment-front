import styled from 'styled-components';

export const CommonDiv = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
`;
