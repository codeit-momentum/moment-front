import styled from 'styled-components';

/**
 * DurationLayout : DurationInput과 ActionButton을 포함하는 최상위 컨테이너
 */
export const DurationLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding: 0rem 3rem;
`;

/**
 * Label : 예상 소요 기간을 나타내는 라벨 텍스트
 */
export const Label = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 16px;
  line-height: 37px;
`;

export const DurationLoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  margin-top: 1rem;
`;

/**
 * InputContainer: 입력 필드와 버튼을 포함하는 컨테이너
 */
export const InputContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
    })};
  height: 4rem;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.yellow};
`;

/**
 * DurationInput : 날짜을 입력하는 input
 */
export const DurationInput = styled.input`
  width: 8rem;
  height: 100%;
  margin-right: 1rem;
  font-size: inherit;
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

/**
 * BtnContainer : 버튼을 포함하는 컨테이너
 */
export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
    })};
  gap: 3rem;
  margin-top: 3rem;
`;
