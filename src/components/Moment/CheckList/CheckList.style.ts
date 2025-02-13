import styled from 'styled-components';

export const CheckListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const TitleSpan = styled.span`
  position: absolute;
  top: -1.9rem;
  padding: 0.3rem 1.7rem;
  border-radius: 1.5rem;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
`;

export const InputContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-start' })};
  width: 100%;
  min-height: 4rem;
  padding: 1rem;
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
