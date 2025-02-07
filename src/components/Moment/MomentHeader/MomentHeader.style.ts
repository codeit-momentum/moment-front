import styled from 'styled-components';

export const MomentHeaderLayout = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 4rem 3rem 3rem 3rem;
`;
