import styled from 'styled-components';

export const BackBtnWrapper = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      display: 'flex',
      justify: 'center',
      align: 'center',
    })};
`;
