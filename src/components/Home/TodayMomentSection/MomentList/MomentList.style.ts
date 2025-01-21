import styled from 'styled-components';

export const MomentListWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 14px;
`;

export const MomentItemWrapper = styled.div<{ $isCompleted: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ $isCompleted }) => ($isCompleted ? 0.5 : 1)};
  width: 86px;
  height: auto;
`;

export const MomentCategory = styled.div<{ $isCompleted: boolean }>`
  width: 55px;
  height: 18px;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? '#9E9E9E' : '#000'};
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  margin-bottom: 0px;
  margin-bottom: -10px;
  position: relative;
  z-index: 1;
`;

export const MomentBox = styled.div<{ $isCompleted: boolean }>`
  width: 86px;
  height: 95px;
  background-color: ${({ $isCompleted }) =>
    $isCompleted ? '#D9D9D9' : '#FF67FA'};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
`;

export const ClearBadge = styled.div`
  position: absolute;
  top: 15px;
  left: 5px;
  background-color: red;
  color: white;
  font-size: 10px;
  padding: 2px 5px;
  border-radius: 3px;
`;

export const MomentTitle = styled.div`
  font-size: 14px;
  color: #000;
  text-align: center;
  margin-top: 10px;
`;
