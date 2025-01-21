import styled from 'styled-components';

export const ImageUploadLayout = styled.form`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 2.5rem;
`;

export const ImageInputLabel = styled.label`
  position: relative;
  width: 27.3rem;
  height: 27.3rem;
  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
  background-color: red;
`;

export const PreviewPlaceholder = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background: #eee;
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  object-fit: cover;
  object-position: center;
`;

export const DescriptionSpan = styled.span`
  color: #000;
  text-align: center;
  font-size: 24px;
  line-height: 37px;
`;

export const UploadButton = styled.button`
  padding: 1.2rem 1.6rem;
  border-radius: 8px;
  background: #1b1b1b;
  color: #fff;
  font-size: 20px;
  &:disabled {
    background: #eee;
    cursor: not-allowed;
  }
`;
