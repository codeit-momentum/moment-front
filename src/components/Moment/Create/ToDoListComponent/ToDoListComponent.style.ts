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

/**
 * Label : 투두리스트 제목 라벨 텍스트
 */
export const TodoLabel = styled.h3`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  white-space: pre-wrap;
  margin-top: 3rem;
  line-height: 25px;
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
