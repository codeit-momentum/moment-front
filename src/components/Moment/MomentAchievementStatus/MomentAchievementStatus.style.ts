import styled from 'styled-components';

export const MomentAchievementStatusLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  position: relative;
  width: 100%;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #d9d9d9;
`;

export const TitleSpan = styled.span`
  position: absolute;
  top: -1.9rem;
  padding: 0.3rem 1.7rem;
  border-radius: 1.5rem;
  background-color: #000;
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
`;

export const MomentContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding: 2.5rem;
  gap: 1.1rem;
  border-radius: 2.5rem;
  background-color: #fff;
`;

export const MomentItem = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
  padding-bottom: 1.6rem;
  gap: 1.1rem;
  border-bottom: 1px solid #b8b8b8;
  &:last-child {
    border-bottom: 0px;
    padding-bottom: 0rem;
  }
`;

export const MomentDetailsBox = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ justify: `space-between` })};
  width: 100%;
  color: #000;
  font-size: 18px;
  line-height: 26px;
`;

export const EmptyMomentSpan = styled.span`
  color: #000;
  text-align: center;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.32px;
`;
