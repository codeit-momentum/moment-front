import styled from 'styled-components';

export const EditProfileLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
`;
export const EditForm = styled.form`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 27.5rem;
  padding-top: 6.3rem;
  gap: 3rem;
`;
export const Label = styled.label`
  width: 13rem;
  height: 13rem;
`;
export const PreviewImage = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  object-position: center;
`;
export const ProfileImage = styled.img`
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  object-position: center;
`;
export const ImageInput = styled.input`
  display: none;
`;
export const InputContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  gap: 2.5rem;
  padding-bottom: 2rem;
`;
export const InputItemContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', align: 'flex-start' })};
  width: 100%;
  gap: 1rem;
`;
export const InputTitleSpan = styled.span`
  font-size: 16px;
`;
export const ProfileItemInput = styled.input`
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  width: 100%;
  height: 3.8rem;
  padding-left: 1rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.yellow};

  font-size: 12px;
  letter-spacing: -0.32px;
`;
export const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  width: 140px;
  height: 40px;
`;
