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
  width: 26.81rem;
  height: 40.31rem;
  background: var(--Momentum_Black, #020202);
  border-radius: 1.43rem;
  border: 0.18rem solid var(--Momentum_Blue, #6a7cb7);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
`;

export const Header = styled.div`
  width: 100%;
  height: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.04rem;
  background: var(--Momentum_Blue, #6a7cb7);
  position: relative; /* 문구 위치 조정을 위한 기준 */
`;

export const Title = styled.h2`
  font-family: 'NeoDunggeunmo Pro';
  font-size: 1.43rem;
  font-weight: bold;
  color: var(--Momentum_White, #fcfcfc);
  position: absolute;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const CloseIcon = styled.div`
  width: 1.43rem; /* 16px * 1.43 */
  height: 1.43rem;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  position: absolute; /* 위치 설정 */
  top: 1.34rem; /* 15px * 1.43 / 16 */
  right: 1.79rem; /* 20px * 1.43 / 16 */
`;

export const NotificationList = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow-y: auto;
  max-height: calc(40.31rem - 4.47rem); /* 모달 전체 높이에서 헤더 높이 제외 */
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
  padding: 1.07rem;
  background: var(--Momentum_Black, #020202);
  box-shadow: 0 0.18rem 0.36rem rgba(0, 0, 0, 0.1);
  gap: 1.07rem;
  border-bottom: 0.15rem solid var(--Momentum_Blue, #6a7cb7); /* 구분선 추가 */
`;

export const IconContainer = styled.div`
  width: 3.75rem;
  height: 3.75rem;
  background-color: var(--Momentum_Blue, #6a7cb7);
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 1.0725rem;
  font-weight: bold;
  color: var(--Momentum_Blue, #6a7cb7);
`;

export const Message = styled.span`
  font-size: 1.0725rem;
  color: var(--Momentum_White, #fcfcfc);
`;
export const EmptyMessage = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray};
  padding: 2rem;
  text-align: center;
`;
