import styled from 'styled-components';

export const NotFoundLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  gap: 3rem;
  padding-top: 20rem;
`;
export const TitleSpan = styled.span`
  ${({ theme: { mixin } }) => mixin.flexBox({ align: 'center' })};
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 80px;
`;
export const IconWrapper = styled.div`
  width: 8rem;
  heigth: 8rem;
`;
export const ContentContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  text-align: center;
  gap: 1rem;
`;
export const ContentSpan = styled.span`
  text-align: center;
  font-size: 16px;
`;
export const SubcontentSpan = styled.span`
  font-size: 12px;
  line-height: 15px;
`;
