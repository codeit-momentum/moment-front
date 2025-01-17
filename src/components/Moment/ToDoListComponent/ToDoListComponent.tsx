import React, { useState, useEffect } from 'react';
import * as S from './ToDoListComponent.style';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';
import { useEditable } from '../../../hooks/useEditable';

/**
 * ToDoListComponent Props
 * - mode: auto | manual => 자동/수동 모드 구분
 * -todoList: 투두리스트 항목 배열
 * -isLoading: 투두리스트 로딩 여부
 * -onUpdate : 투두리스트 수정 콜백 함수
 */

interface ToDoListProps {
  mode: 'auto' | 'manual';
  todoList: string[];
  duration: number;
  isLoading: boolean;
  onUpdate: (updateList: string[]) => void;
}

/**
 * ToDoListComponent
 * - 투두리스트를 표시하며, 로딩 중일 때 로딩 상태를 표시
 * - 수정 버튼을 통해 투두리스트를 수정 가능
 */

export const ToDoListComponent: React.FC<ToDoListProps> = ({
  mode,
  todoList,
  duration,
  isLoading,
  onUpdate,
}) => {
  const { isEditing, toggleEditing } = useEditable(); //수정 상태 관리
  const [currentList, setCurrentList] = useState(todoList);

  useEffect(() => {
    if (mode === 'auto') {
      setCurrentList(todoList); //자동 모드에서는 API 값 초기화
    }
  }, [mode, todoList]);

  const handleInputChange = (index: number, value: string) => {
    const updatedList = [...currentList];
    updatedList[index] = value;
    setCurrentList(updatedList);
    onUpdate(updatedList); //실시간 업데이트 반영
  };

  /**
   * handleSave
   * - 수정된 투두리스트를 최종 저장하고, 수정 완료 상태로 변경
   * - 수정 중일 때 비활성화하여, 사용자가 수정 완료 후에만 확정 가능
   */
  const handleSave = () => {
    onUpdate(currentList); //최종 저장
    toggleEditing(); //수정 완료 상태로 변경
    alert('확정되었습니다.');
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <S.ToDoListContainer>
      <S.Label>{duration}일 동안 진행할 모멘트는 다음과 같습니다!</S.Label>
      <S.ToDoBox>
        <S.ToDoBoxLabel>방법</S.ToDoBoxLabel>
        <S.ToDoList>
          {currentList.map((item, index) => (
            <S.ToDoItem key={index}>
              <input
                type="checkbox"
                id={`todo-${index}`}
                defaultChecked={false}
                disabled={!isEditing}
              />
              {isEditing ? (
                <S.ToDoInput
                  type="text"
                  value={item}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ) : (
                <label htmlFor={`todo-${index}`}>{item}</label>
              )}
            </S.ToDoItem>
          ))}
        </S.ToDoList>
      </S.ToDoBox>
      <S.BtnContainer>
        <S.ActionButton onClick={toggleEditing}>
          {isEditing ? '수정완료' : '수정하기'}
        </S.ActionButton>
        <S.ActionButton onClick={handleSave} disabled={isEditing}>
          확정하기
        </S.ActionButton>
      </S.BtnContainer>
    </S.ToDoListContainer>
  );
};
