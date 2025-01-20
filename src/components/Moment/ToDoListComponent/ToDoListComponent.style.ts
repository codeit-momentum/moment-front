import styled from 'styled-components';
import {
  CommonBox,
  CommonBoxLabel,
  CommonDiv,
  CommonBtnContainer,
  CommonBtn,
} from '../../../styles/CommonStyles';
import mixin from '../../../styles/mixin';

/**
 * ToDoListContainer : 투두리스트 전체를 감싸는 컨테이너
 */

export const ToDoListContainer = styled.div`
  ${mixin.flexBox({ direction: 'column', align: 'center' })};
`;

export const Divider = styled(CommonDiv)``;

/**
 * Label : 투두리스트 제목 라벨 텍스트
 */
export const Label = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  white-space: pre-wrap;
  line-height: 25px;
  margin: 10px;
`;

export const ToDoBox = styled(CommonBox)`
  margin: 20px;
`;
export const ToDoBoxLabel = styled(CommonBoxLabel)``;

export const ToDoList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

/**
 * ToDoItem : 각 투두리스트 항목 스타일
 */
export const ToDoItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 12px;
  padding: 8px 0;
`;
export const Checkbox = styled.input`
  width: 25px;
  height: 25px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 5px;
  cursor: pointer;

  &:checked {
    background-color: ${({ theme }) => theme.colors.black};
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;

  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const TodoContent = styled.span`
  flex: 1;
  font-size: 14px;
  border: none;
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * LoadingText : 로딩 상태를 표시하는 텍스트
 */
export const LoadingText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin: 20px 0;
`;
/**
 * BtnContainer : 버튼을 포함하는 컨테이너
 */
export const BtnContainer = styled(CommonBtnContainer)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * Btn : 수정 및 완료 버튼
 */
export const Btn = styled(CommonBtn)``;
