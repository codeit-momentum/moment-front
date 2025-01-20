import styled from 'styled-components';

export const UploadLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
  gap: 1.5rem;
  padding: 2rem;
  // GNB 높이
  padding-bottom: 7.7rem;
`;

export const Header = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-start' })};
  width: 100%;
  height: 7.6rem;
`;

export const TitleContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  gap: 0.7rem;
  margin-top: 2rem;
  color: #000;
  text-align: center;
  line-height: 37px;
  letter-spacing: -0.32px;
`;

export const TitleSpan = styled.span`
  font-size: 36px;
`;

export const SubTitleSpan = styled.span`
  font-size: 24px;
`;
