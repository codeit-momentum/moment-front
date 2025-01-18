import styled from 'styled-components';

/**
 * 공통 버튼 스타일
 */
export const ActionBtn = styled.button`
  display: flex;
  width: 107px;
  height: 43px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  border: 4px solid var ${({ theme }) => theme.colors.black};
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`;

/**
 * 공통 박스 스타일 (예: ToDoBox, MethodBox)
 */
export const CommonBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 16px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`;

/**
 * 투두리스트 박스 공통 라벨 (방법) (예: ToDoBoxLabel, MethodLabel)
 */
export const CommonBoxLabel = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
  padding: 4px 16px;
  border-radius: 15px;
  white-space: nowrap;
  z-index: 1;
`;
