import styled from 'styled-components';
import backgroundImage from '../../../assets/images/bucketAcheiveBackgroundImage.png';

export const BucketlistLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%; /* 가로 너비 100%로 확장 */
  gap: 1rem;
`;

export const BucketlistTitle = styled.span`
  font-size: 16px;
  text-align: center;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.white};

  /* 년도(2025) 부분을 노랑색으로 적용 */
  span {
    color: ${({ theme }) => theme.colors.yellow};
  }
`;

export const ImageContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })};
  width: 25.6rem;
  height: 16.8rem;
  position: relative;
  background-image: url(${backgroundImage});
  background-size: cover;
`;

export const BucketlistImage = styled.img`
  width: 80%; /* 이미지 가로 크기 */
  height: auto;
  object-fit: contain;
`;

export const BucketlistLabel = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 2rem;
  left: 2.5rem;
`;
export const IconWRapper = styled.div`
  width: 100%;
  position: absolute;
  left: 10rem;
  top: 10rem;
`;
