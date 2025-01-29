import styled from 'styled-components';

export const CheckListModalLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 30rem;
  border-radius: 1rem;
  border: 0.5rem solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const ModalHeader = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const ModalTitle = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  line-height: 20px;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background: none;
  right: 1.5rem;
  top: 1rem;
`;

export const ModalOptionContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 0.05rem;
`;

export const ModalOptionButton = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  height: 4.5rem;
  width: 100%;
  padding: 1.3rem 7.5rem 1.2rem 7.5rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.gray};
  font-size: 12px;
  line-height: 20px;
  &:last-child {
    border-radius: 0 0 1rem 1rem;
    color: ${({ theme }) => theme.colors.red};
  }
`;
