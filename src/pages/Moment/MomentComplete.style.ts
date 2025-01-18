import styled from 'styled-components';
import { CommonBox, CommonBoxLabel } from '../../styles/CommonStyles';

/**
 * Container : 전체 페이지 컨테이너
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
  height: calc(100vh - 60px); // 네비게이션 바 높이를 제외한 전체 높이 설정
  overflow-y: auto; // 스크롤 가능
`;
/**
 * Title: 상단 제목
 */
export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

/**
 * DateContainer : 날짜 박스 컨테이너
 */
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 26px 36px;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 100%;
`;

/**
 * DateBox : 날짜 박스
 */
export const DateBox = styled.div`
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  width: 100%;
  text-align: center;
`;
/**
 * Arrow : 날짜 박스 사이 화살표
 */
export const Arrow = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * MethodBox : 방법 리스트를 감싸는 컨테이너
 */
export const MethodBox = styled(CommonBox)`
  margin-top: 15px;
`;

/**
 * MethodLabel : 방법 섹션의 제목
 */
export const MethodLabel = styled(CommonBoxLabel)``;

/**
 * MethodList : 방법 리스트
 */
export const MethodList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

/**
 * MethodItem : 각각의 방법 항목
 */
export const MethodItem = styled.li`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 14px;
  padding: 10px 5px;
  border-radius: 4px;
`;

/**
 * MethodId : 방법 항목 ID
 */
export const MethodId = styled.span`
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * MethodDescription : 방법 항목 설명
 */
export const MethodDescription = styled.span`
  font-size: 14px;
  white-space: pre-wrap;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
