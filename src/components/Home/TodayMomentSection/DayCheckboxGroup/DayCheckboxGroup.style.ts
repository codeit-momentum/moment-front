import styled from 'styled-components';

export const DayCheckboxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DayTextRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DayText = styled.div`
  font-size: 16px;
  color: #000;
`;

export const DayCheckboxRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;
`;

export const DayCheckbox = styled.div<{ $isChecked: boolean }>`
  width: 24px;
  height: 24px;
  border: 2px solid #ccc;
  background-color: ${({ $isChecked }) =>
    $isChecked ? '#6A7CB7' : '#FCFCFC'}; /* 상태에 따라 색상 변경 */
  display: flex;
  align-items: center;
  justify-content: center;
`;
