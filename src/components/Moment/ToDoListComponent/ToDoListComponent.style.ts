import styled from 'styled-components';

/**
 * ToDoListContainer : 투두리스트 전체를 감싸는 컨테이너
 */

export const ToDoListLayout = styled.div`
  $${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
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
export const TodoContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', align: 'center', justify: 'center' })};
  margin: 2rem 0rem;
  width: 100%;
  padding: 1rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const TodoHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  height: 3rem;
`;

export const TodoHeader = styled.span`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })};
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
  position: absolute; /* 부모 컨테이너를 기준으로 중앙에 위치 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const IconWrapper = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ align: 'center', justify: 'center' })};
  position: absolute; /* 부모 컨테이너를 기준으로 우측에 배치 */
  top: 50%;
  right: 0rem;
  transform: translateY(-50%); /* 수직 중앙 정렬 */
`;

export const ListItemWrapper = styled.form`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  width: 100%;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
`;

/**
 * ToDoItem : 각 투두리스트 항목 스타일
 */
export const ToDoItem = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'center' })};
  gap: 1rem;
  font-size: 12px;
  width: 100%;
`;
export const TodoIndex = styled.span`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.yellow};
`;
export const CheckBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 0.2rem solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
`;

/**
 * Input 태그는 줄바꿈 지원 안함,,, -> display 로 따로 빼야 하는가,,
 */
export const ListItemInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: inherit;
  line-height: 26px;
  padding: 0; /* padding 제거 */

  white-space: pre-wrap;
  word-break: break-word;

  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }
  &:read-only {
    border: none;
    box-shadow: none;
    cursor: pointer;
    &:focus {
      background-color: transparent;
    }
  }
`;
export const ListDisplay = styled.div`
  flex: 1;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 26px;
  white-space: pre-wrap;
  word-break: break-word;
  padding: 0;
`;

export const TodoLoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  margin-top: 1rem;
`;
