import styled from 'styled-components';

export const CheckListLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding: 4rem 2rem;
  gap: 2rem;
  background-color: #d9d9d9;
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

export const ListItemWrapper = styled.form`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'flex-end' })};
  width: 100%;
  height: 3rem;
  gap: 1.3rem;
`;

export const CheckBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 2.5rem;
  height: 2.6rem;
  flex-shrink: 0;
  border-radius: 0.5rem;
  border: 0.2rem solid #000;
  background-color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const ListItemInput = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.05);
  color: #000;
  font-family: inherit;
  font-size: 18px;
  &:focus {
    background-color: #fff;
  }
  &:read-only {
    border: none;
    box-shadow: none;
    cursor: pointer;
    &:focus {
      background-color: transparent;
    }
  }
`;
