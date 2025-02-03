import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed; /* 화면 전체 기준으로 중앙 배치 */
  top: 0;
  left: 0;
  width: 100%; /* 부모 레이아웃 크기에 맞춤 */
  height: 100%; /* 부모 레이아웃 크기에 맞춤 */
  background-color: rgba(0, 0, 0, 0.5); /* 배경을 반투명하게 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 모달이 항상 위에 표시되도록 설정 */
`;

export const ModalLayout = styled.div`
  width: 300px; /* 모달 너비를 규격에 맞게 설정 */
  height: 70px; /* 모달 높이를 규격에 맞게 설정 */
  background: var(--Momentum_Black, #020202);
  border-radius: 16px;
  border: 2px solid var(--Momentum_Blue, #6a7cb7);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box; /* 크기 계산 문제 방지 */
`;

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: var(--Momentum_Blue, #6a7cb7);
`;

export const Title = styled.h2`
  font-family: 'NeoDunggeunmo Pro';
  font-size: 16px;
  font-weight: bold;
  color: var(--Momentum_White, #fcfcfc);
`;

export const CloseIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
`;

export const NotificationList = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  background: var(--Momentum_White, #fcfcfc);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  gap: 12px;
`;

export const IconContainer = styled.div`
  width: 42px;
  height: 42px;
  background-color: var(--Momentum_Blue, #6a7cb7);
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: var(--Momentum_Blue, #6a7cb7);
`;

export const Message = styled.span`
  font-size: 12px;
  color: var(--Momentum_White, #fcfcfc);
`;
