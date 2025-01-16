import styled from 'styled-components';

export const FeedLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
`;
export const FeedHeaderContatiner = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
  width: 100%;
  padding-bottom: 10rem;
`;
export const FeedTitleHeader = styled.div`
  font-size: 20px;
`;

//임시 설정
export const MenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;
