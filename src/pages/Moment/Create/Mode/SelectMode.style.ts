import styled from 'styled-components';

export const SelectModeLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
`;

export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
    })};
  gap: 5rem;
  margin-top: 7.6rem;
`;
export const BtnHighlightedText = styled.span<{ color: string }>`
  color: ${(props) => props.color || 'inherit'};
  font-weight: bold;
`;
