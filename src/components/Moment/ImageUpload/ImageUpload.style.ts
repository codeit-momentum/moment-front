import styled from 'styled-components';

export const ImageUploadLayout = styled.form`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
`;

export const ImageInputLabel = styled.label`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 28rem;
  height: 28rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  border: 3px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const DescriptionSpan = styled.span`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: 16px;
  line-height: 37px;
  margin-bottom: 1.3rem;
`;
