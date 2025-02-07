import styled from 'styled-components';

export const ToastLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.black};
  position: fixed;
  bottom: 10rem;
  min-width: 23rem;
  height: 3.2rem;
  padding: 0.3rem 2.4rem;
  border-radius: 20px;
  font-size: 14px;
  line-height: 25px;
`;
