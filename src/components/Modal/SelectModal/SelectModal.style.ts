import styled from 'styled-components';

export const SelectModalLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  background-color: ${({ theme }) => theme.colors.white};
  width: 27rem;
  height: 12.3rem;
  border-radius: 14px;
  border: 1px solid var(--Grey-900, #020202);
  backdrop-filter: blur(27.182817459106445px);
  box-sizing: border-box;
`;
export const InfoContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding: 1.9rem 0;
  gap: 1rem;
  border-bottom: 1px solid var(--Grey-900, #020202);
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
  width: 100%;
  height: 100%;
  border-left: 1px solid var(--Grey-900, #020202);

  &:first-child {
    border-left: none;
  }
`;
