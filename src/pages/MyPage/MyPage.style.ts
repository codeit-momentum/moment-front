import styled from 'styled-components';

export const MyPageLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  height: 100vh;
`;
export const ProfileImage = styled.img`
  width: 13rem;
  height: 13rem;
`;
export const NicknameSpan = styled.span`
  font-size: 20px;
`;
export const EmailSpan = styled.span`
  font-size: 16px;
`;
export const Horizontal = styled.hr``;
export const MyPageList = styled.li`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
    })};
  gap: 2rem;
`;
export const MyPageItem = styled.ul``;
export const BtnNavigate = styled.button``;
