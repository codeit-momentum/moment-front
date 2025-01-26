import styled from 'styled-components';

export const UploadLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', justify: 'flex-start' })};
  width: 100%;
`;

export const Header = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: 'flex-start' })};
  width: 100%;
`;

export const BackButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
`;

export const TitleSpan = styled.span`
  margin-bottom: 3.2rem;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  line-height: 37px;
`;

export const SubTitleSpan = styled.span`
  font-size: 24px;
`;
