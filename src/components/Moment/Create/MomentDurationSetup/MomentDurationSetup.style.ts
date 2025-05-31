import styled from 'styled-components';

export const MomentDurationSetupLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  margin-top: 0.5rem;
`;

export const DurationTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 16px;
  line-height: 37px;
`;

export const DurationLoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  margin-top: 0.5rem;
`;

export const DurationInputContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  gap: 1rem;
`;

export const DurationInput = styled.input`
  width: 8rem;
  height: 4rem;
  margin-bottom: 3rem;
  font-size: 32px;
  text-align: center;
  border: none;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; // 브라우저 기본 스핀 버튼 제거
    margin: 0;
  }
`;

export const DurationTextSpan = styled.span`
  margin-bottom: 3rem;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.yellow};
`;
