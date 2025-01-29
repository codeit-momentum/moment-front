import styled from 'styled-components';

export const SelectModalLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  background-color: ${({ theme }) => theme.colors.blue};
  width: 30rem;
  height: 16rem;
  border-radius: 14px;
  backdrop-filter: blur(27.182817459106445px);
  box-sizing: border-box;
`;
export const InfoContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding: 3.5rem 0;
  gap: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue};
`;
export const ModalTitle = styled.p`
  font-size: 16px;
`;
export const ModalContent = styled.p`
  font-size: 12px;
`;
export const SelectContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 100%;
`;
export const SelectButton = styled.button`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 14.5rem;
  height: 4.5rem;
  margin-bottom: 0.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.blue};

  &:first-child {
    border-radius: 0 0 0 14px;
  }
  &:last-child {
    border-radius: 0 0 14px 0;
  }
`;
