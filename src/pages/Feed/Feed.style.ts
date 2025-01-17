import styled from 'styled-components';

export const FeedLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  height: 100vh;
`;
export const FeedHeaderContatiner = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  z-index: 100;
  width: 100%;
  padding-bottom: 1rem;
`;
export const FeedTitleContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
export const FeedTitleHeader = styled.div`
  font-size: 20px;
`;

//임시 설정
export const MenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;
