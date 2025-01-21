import styled from 'styled-components';

/**
 * SpinnerContainer : 로딩 스피너 전체를 감싸는 컨테이너
 */

export const SpinnerContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  height: 100vh;
  margin: 20px 0;
`;

/**
 * Spinner : 로딩 스피너 : 아마 디자인 측에서 이미지 제공 받을 것 같음
 */
export const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

/**
 * LoadingText : 로딩 중 텍스트
 */
export const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
