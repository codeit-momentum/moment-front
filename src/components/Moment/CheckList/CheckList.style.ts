import styled from 'styled-components';

export const InputContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-start' })};
  width: 100%;
  min-height: 4rem;
  padding: 1rem 0.5rem;
  gap: 1rem;
`;

export const CheckBoxWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const NewItemInput = styled.textarea`
  width: 100%;
  height: 2rem;
  background-color: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 0.15rem solid ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  font-family: inherit;
  font-size: 12px;
  line-height: 2rem;
  resize: none;
  padding: 0;
  overflow: hidden;
  &:focus {
    background-color: ${({ theme }) => theme.colors.white};
    outline: none;
    color: ${({ theme }) => theme.colors.black};
  }
`;
