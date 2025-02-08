import styled from 'styled-components';

export const MyProfileLayout = styled.div`
  width: 100%;
  padding-bottom: 2rem;
`;
export const ProfileContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 2rem;
`;
export const ProfileImage = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  object-position: center;
`;
export const UserInfoContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 0.5rem;
`;
export const NicknameSpan = styled.span`
  display: block;
  line-height: 3rem;
  font-size: 20px;
  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;
export const EmailSpan = styled.span`
  line-height: 2rem;
  font-size: 16px;
`;
