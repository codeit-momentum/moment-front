import styled from 'styled-components';

/**
 * ToDoListContainer : 투두리스트 전체를 감싸는 컨테이너
 */

export const ToDoListLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  position: relative;
  width: 100%;
`;

export const TodoDivider = styled.hr`
  width: 27.5rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
`;

/**
 * Label : 투두리스트 제목 라벨 텍스트
 */
export const TodoLabel = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  white-space: pre-wrap;
  margin-top: 3.2rem;
`;

export const IconWrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })};
  position: absolute; /* 부모 컨테이너를 기준으로 우측에 배치 */
  top: 1.3rem;
  right: 2rem;
`;

export const TodoLoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  margin-top: 1rem;
`;

export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
    })};
  gap: 3rem;
  margin-bottom: 2rem;
`;
