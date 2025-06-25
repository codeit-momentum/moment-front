import styled from 'styled-components';

export const MomentCompleteLayout = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({
      direction: 'column',
      justify: 'flex-start',
    })};
  width: 100%;
  gap: 1rem;
  position: relative;
`;

export const MomentCompleteTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.white};
`;

export const DateContainer = styled.div`
  position: relative;
  width: 29.5rem;
  height: 4.7rem;
  margin-top: 2rem;
`;

export const DateText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({ direction: 'row' })};
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  gap: 2.2rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const MethodList = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'column', align: 'flex-start' })};
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 0;
`;

export const MethodItem = styled.div`
  ${({ theme: { mixin } }) =>
    mixin.flexBox({ direction: 'row', justify: 'flex-start' })};
  height: 2.8rem;
  gap: 1rem;
`;

export const MethodItemDate = styled.span`
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.yellow};
`;

export const MethodItemContent = styled.span`
  font-size: 12px;
  white-space: pre-wrap;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.white};
`;
