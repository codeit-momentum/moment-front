import styled from 'styled-components';

export const TodayMomentLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'flex-start',
    })};
  width: 33.5rem;
  height: 33.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 2rem;
  padding: 4rem 2rem 2rem 2rem;
`;

export const DividerLine = styled.hr`
  width: 24.5rem;
  height: 0.2rem;
  margin: 2rem 0 3.5rem 0;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const TodayMessageBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  padding-top: 4.2rem;
  font-size: 16px;
  line-height: 20px;

  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
