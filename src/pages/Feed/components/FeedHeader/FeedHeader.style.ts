import styled from 'styled-components';

export const FeedHeaderLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  z-index: 100;
  width: 37.5rem;
`;
export const FeedTitleContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
  position: relative;
  width: 37.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;
export const FeedTitleHeader = styled.h1`
  font-size: 20px;
  letter-spacing: 0.6px;
`;

//임시 설정
export const IconWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: absolute;
  right: 2rem;
`;
