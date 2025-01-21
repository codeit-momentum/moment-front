import { useState } from 'react';

/**
 * useEditable
 * - 편집 가능한 상태를 관리하는 커스텀 훅
 * - isEditing: 현재 수정 상태
 * - toggleEditing: 수정 상태 전환하는 함수
 */

export const useEditable = () => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((prev) => !prev);
  return { isEditing, toggleEditing };
};
