import styled from 'styled-components';

export const FeedLayout = styled.div`
  width: 100%;
  height: 100vh;
`;
export const FeedHeaderContatiner = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'center' })};
  width: 100%;
`;
export const FeedTitleHeader = styled.div`
  font-size: 30px;
`;

//임시 설정
export const MenuIcon = styled.div`
  width: 2rem;
  height: 2rem;
`;
