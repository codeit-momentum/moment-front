import style from 'styled-components';
import { ActionBtn } from '../../../styles/commonStyles';

/**
 * ㄹFrequencyBtnContainer : 실행 빈도 선택 버튼 전체를 감싸는 컨테이너
 */
export const FrequencyBtnContainer = style.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 20px;
`;

/**
 * Label : 실행 빈도 선택 섹션의 제목
 */
export const Label = style.h3`
font-size: 16px;
margin-bottom: 15px;
`;

/**
 * BtnGrid : 실행 빈도 선택 버튼을 감싸는 컨테이너
 */

export const BtnGrid = style.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 24px;
justify-content: center;
margin: 20px 0;
`;
/**
 * CircleBtn : 실행 빈도 선택 동그라미 버튼
 * - isSelected: 선택된 버튼인지 여부
 */
export const CircleBtn = style.button<{ isSelected: boolean }>`
width: 100px;
height: 100px;
border-radius: 50%;
font-size: 20px;
border: none;
display: flex;
align-items: center;
justify-content: center;
background-color: ${({ isSelected }) => (isSelected ? '#000000' : '#E5E5E5')};
color: ${({ isSelected }) => (isSelected ? '#fff' : '#000')};
cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? '#000000' : '#D3D3D3')};
  }
`;

export const BtnContainer = style.div`
display: flex;
justify-content: center;
margin-top: 20px;
`;

/**
 * NextBtn : 다음 페이지로 이동하는 버튼
 * - disabled: 비활성화 여부
 */
export const NextBtn = style(ActionBtn)``;
