import styled from 'styled-components';
import { ActionBtn } from '../../../styles/commonStyles';

/**
 * DurationContainer : DurationInput과 ActionButton을 포함하는 최상위 컨테이너
 */
export const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

/**
 * Label : 예상 소요 기간을 나타내는 라벨 텍스트
 */
export const Label = styled.h3`
  font-size: 16px;
  margin-right: 10px;
`;
/**
 * InputWarpper: 입력 필드와 버튼을 포함하는 컨테이너
 */
export const InputWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
/**
 * DisplayWarpper: 텍스트와 버튼을 포함하는 컨테이너
 */
export const DisplayWarpper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

/**
 * DurationInput : 예상 소요 기간을 입력하는 input
 */
export const DurationInput = styled.input`
  width: 60px;
  height: 40px;
  padding: 8px;
  font-size: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;

  &:focus {
  outline: none;
  border-color: ${({ theme }) => theme.colors.primary};
`;

/**
 * DurationText: 예상 소요 기간을 표시하는 텍스트
 */
export const DurationText = styled.span`
  font-size: 20px;
  margin-right: 5px;
`;

/**
 * Unit : 예상 소요 기간의 단위를 나타내는 텍스트
 */
export const Unit = styled.span`
  font-size: 20px;
  margin-left: 5px;
`;

/**
 * BtnContainer : 버튼을 포함하는 컨테이너
 */
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
/**
 * Btn : 수정 및 저장 버튼
 */
export const Btn = styled(ActionBtn)``;
