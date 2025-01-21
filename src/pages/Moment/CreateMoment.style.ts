import styled from 'styled-components';

export const MomentLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  padding: 20px;
  width: 100%;
  justify-content: flex-start;
  height: calc(100vh - 60px); // 네비게이션 바 높이를 제외한 전체 높이 설정
  overflow-y: auto; // 스크롤 가능
`;
