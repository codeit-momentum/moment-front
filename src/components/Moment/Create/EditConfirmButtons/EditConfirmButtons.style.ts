import styled from 'styled-components';

export const EditConfirmButtonsLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
    })};
  gap: 3rem;
  margin-bottom: 3rem;
`;
