import styled from 'styled-components';

export const MomentContainer = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', align: 'flex-start' })};
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
  // 피그마에 명시된 padding은 없지만 줄 바꿈이 되어있어서 padding 약간 넣음
  padding: 0rem 0.2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  overflow-wrap: anywhere;
  word-break: keep-all;
  text-align: center;
  line-height: 15px;
`;
