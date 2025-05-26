import styled from 'styled-components';

export const EmptyFeedLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  gap: 2rem;
`;
export const EmptyFeedTitleBox = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.48px;
  text-align: center;
  white-space: pre-line;
`;
//추후 img 태그 수정 예정
export const EmptyFeedIcon = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 12.8rem;
  height: 12.8rem;
`;
