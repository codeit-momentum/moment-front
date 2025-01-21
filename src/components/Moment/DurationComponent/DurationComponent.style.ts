import styled from 'styled-components';
import {
  CommonBtn,
  CommonBtnContainer,
  CommonDiv,
} from '../../../styles/CommonStyles';
import mixin from '../../../styles/mixin';
/**
 * DurationContainer : DurationInput과 ActionButton을 포함하는 최상위 컨테이너
 */
export const DurationContainer = styled.div`
  ${mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
  position: relative;
`;

export const Divider = styled(CommonDiv)``;

/**
 * Label : 예상 소요 기간을 나타내는 라벨 텍스트
 */
export const Label = styled.h3`
  margin-top: 10px;
  font-size: 16px;
`;
/**
 * InputWarpper: 입력 필드와 버튼을 포함하는 컨테이너
 */
export const InputWarpper = styled.div`
  ${mixin.flexBox({ align: 'center', justify: 'center' })};
  margin: 15px;
  height: 40px;
`;
/**
 * DisplayWarpper: 텍스트와 버튼을 포함하는 컨테이너
 */
export const DisplayWarpper = styled.div`
  ${mixin.flexBox({ align: 'center', justify: 'center' })};
  margin: 15px;
  height: 40px;
`;

/**
 * DurationInput : 예상 소요 기간을 입력하는 input
 */
export const DurationInput = styled.input`
  width: 60px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.black};

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; // 브라우저 기본 스핀 버튼 제거
    margin: 0;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

/**
 * DurationText: 예상 소요 기간을 표시하는 텍스트
 */
export const DurationText = styled.span`
  font-size: 24px;
`;

/**
 * Unit : 예상 소요 기간의 단위를 나타내는 텍스트
 */
export const Unit = styled.span`
  font-size: 24px;
  margin-left: 10px;
`;

/**
 * BtnContainer : 버튼을 포함하는 컨테이너
 */
export const BtnContainer = styled(CommonBtnContainer)``;
/**
 * Btn : 수정 및 저장 버튼
 */
export const Btn = styled(CommonBtn)``;
