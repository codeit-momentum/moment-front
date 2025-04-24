import styled from 'styled-components';

export const MomentPlanSetupLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
`;

export const PlanTitle = styled.h3`
  margin-top: 3rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  line-height: 25px;
`;

export const PlanLoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  margin-top: 1.5rem;
`;
