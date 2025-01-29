import styled from 'styled-components';

export const OKModalLayout = styled.div`
  width: 30rem;
  background-color: ${({ theme }) => theme.colors.blue};
  border: 5px solid ${({ theme }) => theme.colors.blue};
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const ModalHeader = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding: 2rem 2rem 3rem 2rem;
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const SubTextSpan = styled.span`
  font-size: 12px;
`;

export const OKButton = styled.button`
  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 1rem 1rem;
`;
