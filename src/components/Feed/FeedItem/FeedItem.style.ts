import styled from 'styled-components';

export const FeedItemLayout = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 14rem;
  width: 33.5rem;
  height: 14rem;
  flex-shrink: 0;
  padding: 1rem 2.5rem;
  gap: 2.5rem;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.colors.blue};
  box-shadow: 0px 0px 10px 5px ${({ theme }) => theme.colors.blue} inset;
`;
export const FeedInfoContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
      align: 'center',
    })};
  text-align: left;
  width: 14rem;
  height: 100%;
  padding: 1rem 0;
  gap: 1rem;
`;
export const FeedTitleParagraph = styled.p`
  width: 14rem;
  font-size: 12px;
  line-height: 20px;
  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
export const FeedContentParagraph = styled.p`
  width: 14rem;
  max-height: 7rem;
  font-size: 12px;
  line-height: 15px;
  white-space: pre-line;
`;
export const FeedImageContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 12rem;
  height: 12rem;
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
export const FeedImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
`;
export const DateBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;

  width: 7.2rem;
  height: 1.9rem;
  flex-shrink: 0;
  border-radius: 10px;
  font-size: 12px;
`;
