import styled from 'styled-components';

export const MomentAchievementStatusLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #d9d9d9;
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleSpan = styled.span`
  position: absolute;
  top: -1.9rem;
  padding: 0.3rem 1.7rem;
  border-radius: 1.5rem;
  background-color: #000;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
`;

export const MomentContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  padding: 1.4rem 1.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
`;

export const MomentItem = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding-right: 0.4rem;
  gap: 0.5rem;
`;

export const MomentDetailsBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: `space-between` })};
  width: 100%;
  padding: 0rem 1rem;
  font-size: 12px;
  line-height: 26px;
`;

export const PercentageSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 16px;
`;

export const Divider = styled.hr`
  width: 26.5rem;
  height: 5px;
  margin: 1.5rem 0rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const EmptyStateSpan = styled.span`
  padding: 2.3rem 5.9rem;
  text-align: center;
  font-size: 12px;
  line-height: 26px;
  letter-spacing: -0.32px;
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;
