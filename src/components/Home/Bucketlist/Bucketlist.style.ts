import styled from 'styled-components';

export const BucketlistLayout = styled.div`
  ${({ theme }) =>
    theme.mixin.flexBox({ direction: 'column', align: 'center' })}
  width: 19.5rem;
  padding: 1.25rem;
  gap: 1.75rem;
  border: 0.125rem solid #000;
  background-color: #fff;
`;

export const BucketlistTitle = styled.h2`
  font-size: 1.25rem;
  color: #000;
  text-align: center;
`;

export const ImageContainer = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })}
  width: 19.5rem;
  height: 14.75rem;
  border: 0.125rem solid #000;
  background-color: rgba(217, 217, 217, 0.4);
  position: relative;
`;

export const BucketlistImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
`;

export const BucketlistLabel = styled.span`
  font-size: 1.125rem;
  color: #000;
  position: absolute;
  bottom: 1.25rem;
`;

export const NoDataMessageBox = styled.div`
  ${({ theme }) => theme.mixin.flexBox({ justify: 'center', align: 'center' })}
  text-align: center;
  font-size: 0.875rem;
  color: #000;
  width: 100%;
  height: 100%;
`;
