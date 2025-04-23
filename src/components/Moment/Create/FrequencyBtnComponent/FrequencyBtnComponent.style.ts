import styled from 'styled-components';

export const FrequencyBtnLayout = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter()}
  position: relative;
  width: 100%;
  margin-top: 2rem;
`;

export const FrequencyBtnTitle = styled.h3`
  margin-top: 3rem;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  line-height: 25px;
`;

export const FrequencyBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem 4.5rem;
  justify-content: center;
  margin: 3rem auto;
`;

export const FrequencyBtnWrapper = styled.button`
  ${({ theme: { mixin } }) => mixin.flexCenter()}
  position: relative;
  border: none;
  background: none;
`;

export const FrequencyBtnLabel = styled.span<{ $isSelected: boolean }>`
  width: 4rem;
  position: absolute;
  font-size: 16px;
  color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.white : theme.colors.darkGray};
  text-align: center;
  line-height: 2.5rem;
`;
