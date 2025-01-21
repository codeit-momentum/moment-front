import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #000;
  margin-top: 20px;
  margin-bottom: 0px;
`;

export const SingleImageContainer = styled.div`
  width: 312px;
  height: 236px;
  border: 2px solid #000;
  background-color: rgba(217, 217, 217, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  position: relative;
`;

export const Image = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`;

export const Label = styled.span`
  font-size: 18px;
  color: #000;
  position: absolute;
  bottom: 20px;
`;
export const NoDataMessage = styled.div`
  font-size: 14px; /* 글자 크기를 줄임 */
  line-height: 20px; /* 텍스트 간격 조정 */
  color: #000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%; /* 박스 중앙 정렬을 위해 높이 100%로 설정 */
`;
