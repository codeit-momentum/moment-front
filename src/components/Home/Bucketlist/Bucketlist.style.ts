import styled from 'styled-components';

export const BucketlistLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })};
  width: 100%; /* 가로 너비 100%로 확장 */
  padding: 2rem 1.25rem; /* 패딩 조정 */
  gap: 2rem; /* 간격 조정 */
  border: 0.125rem solid ${({ theme }) => theme.colors.black}; /* 테두리 검정색 */
  background-color: ${({ theme }) => theme.colors.black}; /* 내부 배경 검정색 */

  /* 전체적으로 아래로 이동 */
  position: relative;
  top: 3rem; /* 원하는 높이만큼 아래로 이동 */
`;

export const BucketlistTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  /* 년도(2025) 부분을 노랑색으로 적용 */
  span {
    color: ${({ theme }) => theme.colors.yellow};
    font-weight: bold;
  }
`;

export const ImageContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })};
  width: 100%; /* 가로 너비 100% */
  height: 20rem; /* 높이를 늘림 */
  border: 0.125rem solid ${({ theme }) => theme.colors.black}; /* 테두리 검정색 */
  background-color: ${({ theme }) => theme.colors.gray}; /* 내부 배경 회색 */
  position: relative;
`;

export const BucketlistImage = styled.img`
  width: 80%; /* 이미지 가로 크기 */
  height: auto;
  object-fit: contain;
`;

export const BucketlistLabel = styled.span`
  font-size: 1.25rem; /* 텍스트 크기 확대 */
  color: ${({ theme }) => theme.colors.white}; /* 글씨색 흰색 */
  position: absolute;
  bottom: 1.5rem; /* 위치 조정 */
`;

export const NoDataMessageBox = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })};
  text-align: center;
  font-size: 1rem; /* 텍스트 크기 확대 */
  color: ${({ theme }) => theme.colors.white}; /* 글씨색 흰색 */
  width: 100%;
  height: 100%;
`;
