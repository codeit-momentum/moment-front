import styled from 'styled-components';
import { CommonBtn, CommonDiv } from '../../../styles/CommonStyles';
import mixin from '../../../styles/mixin';

/**
 * FrequencyBtnContainer : 실행 빈도 선택 버튼 전체를 감싸는 컨테이너
 */
export const FrequencyBtnContainer = styled.div`
  ${mixin.flexBox({ direction: 'column', align: 'center' })};
  gap: 20px;
`;

export const Divider = styled(CommonDiv)``;

/**
 * Label : 실행 빈도 선택 섹션의 제목
 */
export const Label = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 5px;
`;

/**
 * BtnGrid : 실행 빈도 선택 버튼을 감싸는 컨테이너
 */

export const BtnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  justify-content: center;
`;
/**
 * CircleBtn : 실행 빈도 선택 동그라미 버튼
 * - isSelected: 선택된 버튼인지 여부
 */
export const CircleBtn = styled.button<{ isSelected: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 20px;
  border: none;
  ${mixin.flexBox({ align: 'center', justify: 'center' })};
  background-color: ${({ isSelected }) => (isSelected ? '#000000' : '#E5E5E5')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? '#000000' : '#D3D3D3'};
  }
`;

export const BtnContainer = styled.div`
  ${mixin.flexBox({ justify: 'center' })};
  margin-top: 20px;
`;

/**
 * NextBtn : 다음 페이지로 이동하는 버튼
 * - disabled: 비활성화 여부
 */
export const NextBtn = styled(CommonBtn)``;
