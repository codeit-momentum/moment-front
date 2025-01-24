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

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  margin-top: 1.5rem;
`;

/**
 * Label : 예상 소요 기간을 나타내는 라벨 텍스트
 */
export const Label = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 3rem;
  margin-bottom: 1rem;
  font-size: 16px;
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
  margin: 1rem;
  gap: 1rem;
`;
/**
 * DisplayWarpper: 텍스트와 버튼을 포함하는 컨테이너
 */
export const DisplayContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
    })};
  margin-top: 0.5rem;
`;

/**
 * DurationInput : 날짜을 입력하는 input
 */
export const DurationInput = styled.input`
  width: 8rem;
  height: 4rem;
  font-size: 24px;
  text-align: center;
  border: 0.5px solid $ ${({ theme }) => theme.colors.white};
  background-color: ${({ readOnly, theme }) =>
    readOnly ? theme.colors.white : theme.colors.white};
  color: ${({ readOnly, theme }) =>
    readOnly ? theme.colors.black : theme.colors.black};
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'text')};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; // 브라우저 기본 스핀 버튼 제거
    margin: 0;
  }
`;

/**
 * DurationText: 날짜을 표시하는 텍스트
 */
export const DurationText = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.yellow};
`;

/**
 * Unit : 날짜의 단위를 나타내는 텍스트
 */
export const Unit = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.yellow};
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
  margin-top: 2rem;
`;
