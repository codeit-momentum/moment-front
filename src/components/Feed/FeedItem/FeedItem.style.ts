import styled from 'styled-components';

export const FeedItemLayout = styled.div`
  display: flex;
  width: 33rem;
  height: 18rem;
  border-radius: 8px;
  border: 1px solid #000;
`;
export const FeedInfoContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  text-align: center;
  width: 50%;
  height: 100%;
  gap: 2rem;
`;
export const FeedTitleParagraph = styled.p`
  width: 100%;

  font-size: 12px;
  span {
    font-size: 16px;
  }
`;
export const FeedContentParagraph = styled.p`
  width: 100%;
  font-size: 12px;
  white-space: pre-line;
`;
export const FeedImageContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 15.7rem;
  height: 18rem;
  padding-right: 1.5rem;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;
export const FeedImage = styled.img`
  width: 100%;
  height: 15.7rem;
`;
export const DateBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  width: 8rem;
  height: 1.4rem;
  flex-shrink: 0;
  font-size: 12px;
`;
