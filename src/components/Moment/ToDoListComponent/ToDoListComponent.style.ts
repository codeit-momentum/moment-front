import styled from 'styled-components';

/**
 * ToDoListContainer : 투두리스트 전체를 감싸는 컨테이너
 */

export const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

/**
 * Label : 투두리스트 제목 라벨 텍스트
 */
export const Label = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: 10px;
`;

export const ToDoBoxLabel = styled.div`
  position: absolute; /*ToDoBox 내부에서 겹치도록 설정*/
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  padding: 4px 16px;
  border-radius: 15px;
  white-space: nowrap;
  z-index: 1; /*ToDoBox 내부에서 겹치도록 설정*/
`;

export const ToDoBox = styled.div`
  position: relative; /*ToDoBox 내부에서 겹치도록 설정*/
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px;
  witdh: 100%;
  max-width: 400px;
`;

export const ToDoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

/**
 * ToDoItem : 각 투두리스트 항목 스타일
 */
export const ToDoItem = styled.li`
  display: flex;
  algign-items: flex-start;
  gap: 12px;
  font-size: 12px;
  padding: 8px 0;

  input[type='checkbox'] {
    width: 24px;
    height: 24px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.colors.black};
    background-color: #white;
    appearance: none;

    &:checked { //필요한가..? 
      background-color: ${({ theme }) => theme.colors.white};
    }
      &:after {
      content: '✔';
      position: absolute;
      left: 6px;
      top: 1px;
      height: 24px;
      border: solid ${({ theme }) => theme.colors.black};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
  }
`;
/**
 * TodoInput : 투두리스트 항목 입력창
 */
export const ToDoInput = styled.input`
  padding: 8px;
  font-size: 12px;
  flex: 1;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};

  &:disabled {
    background-color: trasparent;
    border: none;
    padding: 0;
  }
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
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

/**
 * ActionButton : 수정 및 완료 버튼
 */
export const ActionButton = styled.button`
  margin-left: 10px;
  width: 107px;
  height: 43px;
  padding: 16px 12px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;
