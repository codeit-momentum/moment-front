import styled from 'styled-components';

export const MyPageLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding-top: 6rem;
`;
export const Horizontal = styled.hr`
  border: none;
  height: 0.3rem;
  background-color: ${({ theme }) => theme.colors.blue};
  width: 27.5rem;
  stroke-width: 3px;
  flex-shrink: 0;
`;
