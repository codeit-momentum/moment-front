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

export const SelectModeBackBtn = styled.button`
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 4rem; /* 40px */
  height: 4rem; /* 40px */
  background: none;
  border: none;
  padding: 0.5rem;
`;
export const ContentContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'column' })};
  width: 100%;
  padding: 9.5rem 4rem 0;
`;
export const SelectModeTitleContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'center', justify: 'center' })};
  margin-bottom: 2rem;
  gap: 1.5rem;
`;
export const IconWrapper = styled.div`
width:4.2rem
height:4.2rem
${({ theme: { mixin } }) => mixin.flexBox({ align: 'center', justify: 'center' })}
`;
export const SelectModeTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const SelectModeSubtitle = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 8.5rem;
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
