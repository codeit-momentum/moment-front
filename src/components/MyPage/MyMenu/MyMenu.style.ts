import styled from 'styled-components';

export const MyMenuLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
    })};
  width: 26rem;
  padding-top: 2.5rem;
  gap: 2rem;
`;
//교체 예정
export const Icon = styled.div`
  background-color: yellow;
  width: 3rem;
  height: 3rem;
`;
export const MyMenuItem = styled.ul`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'space-between' })};
  width: 100%;
  height: 3.5rem;
`;
export const ItemLabelSpan = styled.span<{ $isDelete: boolean }>`
  ${({ theme, $isDelete }) => $isDelete && `color: ${theme.colors.red}`};
  width: 14rem;
  text-align: left;
  font-size: 12px;
`;
//수정 예정
export const BtnNavigate = styled.button`
  background-color: yellow;
  width: 3rem;
  height: 3rem;
`;
