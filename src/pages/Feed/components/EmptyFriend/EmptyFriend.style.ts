import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmptyFriendLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  gap: 2rem;
  padding-top: 17rem;
`;
export const EmptyFriendTitleBox = styled.div`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.48px;
  text-align: center;
  white-space: pre-line;
`;
export const EmptyFriendIcon = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 12.8rem;
  height: 12.8rem;
`;
export const ButtonLink = styled(Link)`
  ${({ theme: { mixin } }) => mixin.flexCenter()};

  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  width: 13rem;
  height: 3.5rem;
  border-radius: 10px;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: -0.32px;

  &:visited {
    color: ${({ theme }) => theme.colors.white};
  }
`;
