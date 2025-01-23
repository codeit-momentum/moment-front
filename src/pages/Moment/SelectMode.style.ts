import styled from 'styled-components';

export const SelectModeLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const BtnContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
    })};
  gap: 5.7rem;
`;
export const BtnHighlightedText = styled.span<{ color: string }>`
  color: ${(props) => props.color || 'inherit'};
  font-weight: bold;
`;
