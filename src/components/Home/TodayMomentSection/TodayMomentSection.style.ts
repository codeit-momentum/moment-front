import styled from 'styled-components';

export const TodayMomentLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'column',
      align: 'center',
      justify: 'flex-start',
    })};
  width: 20.3rem;
  height: 18.3rem;
  border: 0.1rem solid #000;
  background-color: #fff;
  padding: 2.25rem 2rem;
  gap: 1rem;
`;

export const DividerLine = styled.div`
  width: 17.1rem;
  height: 0.063rem;
  background-color: #bababa;
`;

export const TodayMessageBox = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({
      direction: 'row',
      align: 'center',
      justify: 'center',
    })};
  width: 16.25rem;
  height: 2.19rem;
  text-align: center;
  color: #000;
  font-size: 1.25rem;
  line-height: 2.31rem;

  span {
    color: #c60707;
  }
`;
