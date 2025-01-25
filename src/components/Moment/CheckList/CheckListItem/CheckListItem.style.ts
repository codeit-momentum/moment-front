import styled from 'styled-components';

export const CheckListItemLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-start' })};
  width: 100%;
  min-height: 4rem;
  padding: 1rem;
  gap: 1rem;
`;

export const CheckBoxWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 20px;
`;

export const ListItemInput = styled.textarea`
  width: 100%;
  height: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-family: inherit;
  font-size: 12px;
  line-height: 2rem;
  resize: none;
  padding: 0;
  color: ${({ theme }) => theme.colors.black};
  &:focus {
    outline: none;
  }
  &:read-only {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;
