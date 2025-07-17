import styled from 'styled-components';

export const ContainerLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 33.5rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleBox = styled.div`
  position: relative;
  ${({ theme: { mixin } }) => mixin.flexCenter()}
  width: 19.2rem;
  height: 3.6rem;
  margin-bottom: 1rem;
`;

export const TitleSpan = styled.span`
  position: absolute;
  top: 0;
  text-align: center;
  font-size: 16px;
  border-radius: 1rem;
  line-height: 3.6rem;
`;

export const TopRightPixel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 2.2rem;
  height: 0.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow:
    0.5rem 0.5rem 0 0 ${({ theme }) => theme.colors.black},
    1.1rem 1.1rem 0 0 ${({ theme }) => theme.colors.black},
    1.6rem 1.6rem 0 0 ${({ theme }) => theme.colors.black};
`;

export const TopLeftPixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 2.2rem;
  height: 0.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow:
    -0.5rem 0.5rem 0 0 ${({ theme }) => theme.colors.black},
    -1.1rem 1.1rem 0 0 ${({ theme }) => theme.colors.black},
    -1.6rem 1.6rem 0 0 ${({ theme }) => theme.colors.black};
`;

export const BottomRightPixel = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2.2rem;
  height: 0.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow:
    0.5rem -0.5rem 0 0 ${({ theme }) => theme.colors.black},
    1.1rem -1.1rem 0 0 ${({ theme }) => theme.colors.black},
    1.6rem -1.6rem 0 0 ${({ theme }) => theme.colors.black};
`;

export const BottomLeftPixel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2.2rem;
  height: 0.6rem;
  background-color: ${({ theme }) => theme.colors.black};
  box-shadow:
    -0.5rem -0.5rem 0 0 ${({ theme }) => theme.colors.black},
    -1.1rem -1.1rem 0 0 ${({ theme }) => theme.colors.black},
    -1.6rem -1.6rem 0 0 ${({ theme }) => theme.colors.black};
`;
