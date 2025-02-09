import styled from 'styled-components';

export const SelectModalLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  width: 30rem;
  min-height: 16rem;
  border-radius: 10px;
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
  text-align: center;
`;
export const ModalContent = styled.p`
  font-size: 12px;
`;
export const SelectContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 100%;
`;
export const SelectButton = styled.button<{ $type?: 'add' | 'delete' }>`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ $type, theme }) =>
    $type === 'delete' ? theme.colors.red : theme.colors.white};
  width: 14.5rem;
  height: 4.5rem;
  margin-bottom: 0.5rem;
  border-left: 1px solid ${({ theme }) => theme.colors.blue};

  &:first-child {
    border-radius: 0 0 0 10px;
  }
  &:last-child {
    border-radius: 0 0 10px 0;
  }
`;
