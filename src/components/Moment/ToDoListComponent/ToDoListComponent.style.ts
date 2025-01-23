import styled from 'styled-components';
import { CommonBox, CommonBoxLabel } from '../../../styles/CommonStyles';

/**
 * ToDoListContainer : 투두리스트 전체를 감싸는 컨테이너
 */

export const ToDoListLayout = styled.div`
  $${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
    position: relative;
  width: 100%;
  padding: 0rem 3rem;
`;

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
`;

/**
 * Label : 투두리스트 제목 라벨 텍스트
 */
export const Label = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  white-space: pre-wrap;
  margin-top: 3.2rem;
`;

export const ToDoBox = styled(CommonBox)`
  margin-top: 2rem;
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
  background: ${({ readOnly, theme }) =>
    readOnly ? theme.colors.gray : theme.colors.white};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
  cursor: ${({ readOnly }) => (readOnly ? 'default' : 'text')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus {
    outline: none;
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
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin: 20px 0;
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
