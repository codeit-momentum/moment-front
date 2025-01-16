import styled from 'styled-components';

export const EmptyFeedLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 3.5rem;
`;
export const EmptyFeedTitleBox = styled.div`
  font-size: 16px;
  text-align: center;
  white-space: pre-line;
`;

//추후 img 태그 수정 예정
export const EmptyFeedImage = styled.div`
  width: 11.3rem;
  height: 11.3rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
//추후 수정 예정
export const Button = styled.button`
  width: 15.7rem;
  height: 4.3rem;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;
