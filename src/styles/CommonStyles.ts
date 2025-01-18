import styled from 'styled-components';

/** 공통 구분선 */

export const CommonDiv = styled.hr`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray};
  border: none;
  margin: 10px;
`;

/**
 * 공통 버튼 스타일
 */
export const CommonBtn = styled.button`
  display: flex;
  width: 107px;
  height: 43px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 16px;
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
 * 공통 박스 컨테이너
 */

export const CommonBtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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
`;

/**
 * 투두리스트 박스 공통 라벨 (방법) (예: ToDoBoxLabel, MethodLabel)
 */
export const CommonBoxLabel = styled.div`
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  padding: 5px 16px;
  border-radius: 15px;
  justify-content: center;
`;
