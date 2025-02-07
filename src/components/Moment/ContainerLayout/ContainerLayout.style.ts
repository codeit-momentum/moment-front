import styled from 'styled-components';

export const ContainerLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 33.5rem;
  padding: 0.5rem 1.7rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleSpan = styled.span`
  padding: 0.5rem 1.6rem;
  margin-bottom: 1rem;
  border-radius: 1.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: 18px;
  border-radius: 1rem;
  line-height: 20px;
`;

export const TopRightPixel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 1.7rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.blue};
    left: 0;
    bottom: 0;
  }
`;

export const TopLeftPixel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 1.7rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.blue};
    right: 0;
    bottom: 0;
  }
`;

export const BottomRightPixel = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1.7rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.blue};
    left: 0;
    top: 0;
  }
`;

export const BottomLeftPixel = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 1.7rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.black};
  &::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 0.6rem;
    background-color: ${({ theme }) => theme.colors.blue};
    right: 0;
    top: 0;
  }
`;
