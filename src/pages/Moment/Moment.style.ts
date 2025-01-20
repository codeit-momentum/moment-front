import styled from 'styled-components';
import mixin from '../../styles/mixin';

export const MomentLayout = styled.div`
  ${mixin.flexBox({ direction: 'column', align: 'center' })};
  padding: 20px;
  width: 100%;
  justify-content: flex-start;
  height: calc(100vh - 60px); // 네비게이션 바 높이를 제외한 전체 높이 설정
  overflow-y: auto; // 스크롤 가능
`;
