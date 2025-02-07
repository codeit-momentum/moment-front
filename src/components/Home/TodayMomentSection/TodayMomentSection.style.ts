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
  position: relative;
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

export const TopLeftArea = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  left: 0;
  box-shadow:
    -0.5rem 0.5rem 0 0 ${({ theme }) => theme.colors.black},
    -1rem 1rem 0 0 ${({ theme }) => theme.colors.black},
    -1.5rem 1.5rem 0 0 ${({ theme }) => theme.colors.black},
    -2rem 2rem 0 0 ${({ theme }) => theme.colors.black};
`;

export const TopRightArea = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  top: 0;
  right: 0;
  box-shadow:
    0.5rem 0.5rem 0 0 ${({ theme }) => theme.colors.black},
    1rem 1rem 0 0 ${({ theme }) => theme.colors.black},
    1.5rem 1.5rem 0 0 ${({ theme }) => theme.colors.black},
    2rem 2rem 0 0 ${({ theme }) => theme.colors.black};
`;
export const BottomLeftArea = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  bottom: 0;
  left: 0;
  box-shadow:
    -0.5rem -0.5rem 0 0 ${({ theme }) => theme.colors.black},
    -1rem -1rem 0 0 ${({ theme }) => theme.colors.black},
    -1.5rem -1.5rem 0 0 ${({ theme }) => theme.colors.black},
    -2rem -2rem 0 0 ${({ theme }) => theme.colors.black};
`;
export const BottomRightArea = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  bottom: 0;
  right: 0;
  box-shadow:
    0.5rem -0.5rem 0 0 ${({ theme }) => theme.colors.black},
    1rem -1rem 0 0 ${({ theme }) => theme.colors.black},
    1.5rem -1.5rem 0 0 ${({ theme }) => theme.colors.black},
    2rem -2rem 0 0 ${({ theme }) => theme.colors.black};
`;
