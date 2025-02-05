import styled from 'styled-components';

export const MomentContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  width: 100%;
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
  gap: 1rem;
  font-size: 12px;
  line-height: 26px;
  word-break: keep-all;
  overflow-wrap: anywhere;
`;

export const PercentageSpan = styled.span`
  width: 4rem;
  flex-shrink: 0;
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 16px;
  text-align: right;
`;

export const Divider = styled.hr`
  width: 26.5rem;
  height: 5px;
  margin: 1.5rem 0rem;
  border: none;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.blue};
`;

export const EmptyContainer = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()};
  padding: 3.7rem 7.4rem;
  margin: 1.5rem 0rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
`;

export const EmptyStateSpan = styled.span`
  text-align: center;
  font-size: 12px;
  line-height: 26px;
`;

export const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
`;
