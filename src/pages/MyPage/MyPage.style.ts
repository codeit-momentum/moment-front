import styled from 'styled-components';

export const MyPageLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding-top: 6rem;
`;
export const ProfileContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 2rem;
`;
export const ProfileImage = styled.img`
  width: 13rem;
  height: 13rem;
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
export const Horizontal = styled.hr`
  border-color: ${({ theme }) => theme.colors.blue};
  width: 27.5rem;
  stroke-width: 3px;
  flex-shrink: 0;
`;
export const MyPageList = styled.li`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
    })};
  width: 26rem;
  padding-top: 2.5rem;
  gap: 2rem;
`;
//교체 예정
export const Icon = styled.div`
  background-color: yellow;
  width: 3rem;
  height: 3rem;
`;
export const MyPageItem = styled.ul`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  width: 100%;
  height: 3.5rem;
`;
export const ItemLabelSpan = styled.span`
  width: 14rem;
  text-align: left;
  font-size: 12px;
`;
//수정 예정
export const BtnNavigate = styled.button`
  background-color: yellow;
  width: 3rem;
  height: 3rem;
`;
