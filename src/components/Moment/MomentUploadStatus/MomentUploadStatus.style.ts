import styled from 'styled-components';

export const MomentContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'row',
      align: 'flex-start',
      justify: 'flex-start',
    })};
  width: 30.1rem;
  gap: 0.8rem;
`;

export const MomentItem = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 9.5rem;
  gap: 0.5rem;
`;

export const MomentImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 1rem;
  object-fit: cover;
  object-position: center;
`;

export const MomentTitleSpan = styled.span`
  padding: 0rem 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  overflow-wrap: anywhere;
  word-break: keep-all;
  text-align: center;
  line-height: 15px;
`;

export const MomentErrorSpan = styled.span`
  padding: 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 13px;
  overflow-wrap: anywhere;
  word-break: keep-all;
  text-align: center;
  line-height: 20px;
`;
