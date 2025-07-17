import styled from 'styled-components';

export const ProgressBar = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-start' })};
  position: relative;
  width: 100%;
  height: 2.7rem;
  padding: 0rem 0.4rem;
  gap: 0.1rem;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const ProgressBarTopCorners = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    top: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    top: 0;
    right: 0;
  }
`;

export const ProgressBarBottomCorners = styled.div`
  &::before {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    bottom: 0;
    left: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0.4rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.colors.black};
    bottom: 0;
    right: 0;
  }
`;
