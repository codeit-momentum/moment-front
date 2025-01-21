import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100vh;
`;
//임시 아이콘 mockBackIcon.png 적용
export const BackBtn = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  margin-top: 20px;
`;
export const ContentWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding: 80px 0 0;
`;
export const TitleWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  margin-top: 64px;
  margin-bottom: 37px;
`;
export const Header = styled.h1`
  font-size: 36px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 60px;
  width: 100%;
  align-items: center;
`;

export const SelectButton = styled.button`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })};
  width: 100%;
  max-width: 300px; // 최대 너비 설정
  height: 100px; // 고정 높이 설정
  padding: 32px 50px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ButtonText = styled.span`
  font-size: 16px;
  font-weight: 500;
  white-space: pre-wrap; // \n 줄 바꿈 처리
  text-align: center;
  line-height: 30px;
  letter-spacing: -0.32px;
  color: ${({ theme }) => theme.colors.black};
`;

// 임시 아이콘 플레이스홀더
export const IconPlaceholder = styled.div`
  width: 48px;
  height: 48px;
  background-color: white;
  border-radius: 50%;
  margin-left: auto;
`;
