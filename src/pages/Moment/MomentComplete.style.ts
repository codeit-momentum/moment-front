import styled from 'styled-components';
import { CommonBox, CommonBoxLabel } from '../../styles/commonStyles';

/**
 * Container : 전체 페이지 컨테이너
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;
/**
 * Title: 상단 제목
 */
export const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
`;

/**
 * DateContainer : 날짜 박스 컨테이너
 */
export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
`;

/**
 * DateBox : 날짜 박스
 */
export const DateBox = styled.div`
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
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
export const MethodBox = styled(CommonBox)``;

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
  gap: 8px;
`;

/**
 * MethodItem : 각각의 방법 항목
 */
export const MethodItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
`;

/**
 * MethodId : 방법 항목 ID
 */
export const MethodId = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
`;

/**
 * MethodDescription : 방법 항목 설명
 */
export const MethodDescription = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black};
`;
