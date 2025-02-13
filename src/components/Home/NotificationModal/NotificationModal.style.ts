import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalLayout = styled.div`
  width: 30rem;
  height: 45rem;
  background: var(--Momentum_Black, #020202);
  border-radius: 10px;
  border: 5px solid var(--Momentum_Blue, #6a7cb7);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--Momentum_Blue, #6a7cb7);
  position: relative; /* 문구 위치 조정을 위한 기준 */
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 20px;
  color: var(--Momentum_White, #fcfcfc);
`;

export const CloseIcon = styled.button`
  background: transparent;
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

export const NotificationList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  font-size: 12px;
  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.8rem;
  background: var(--Momentum_Black, #020202);
  box-shadow: 0 0.18rem 0.36rem rgba(0, 0, 0, 0.1);
  gap: 1.3rem;
  border-bottom: 0.15rem solid var(--Momentum_Blue, #6a7cb7); /* 구분선 추가 */
`;

export const IconContainer = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  background-color: var(--Momentum_Blue, #6a7cb7);
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ justify: 'flex-start', align: 'center' })};
  display: flex;
  align-items: center;
  width: 21rem;
  height: 5rem;
  line-height: 20px;
  text-align: left;
`;
export const Message = styled.span`
  color: var(--Momentum_White, #fcfcfc);
`;
export const EmptyMessage = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })};
  color: ${({ theme }) => theme.colors.gray};
  padding: 2rem;
  text-align: center;
`;
