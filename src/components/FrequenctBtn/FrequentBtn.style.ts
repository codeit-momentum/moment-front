import styled from 'styled-components';

export const BtnWrapper = styled.button<{ $isSelected: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  width: 90px;
  height: 90px;
`;

export const SvgWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
`;

export const Label = styled.span<{ isSelected: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: ${({ isSelected }) => (isSelected ? '#FCFCFC' : '#999')};
  text-align: center;
  white-space: pre-wrap;
  line-height: 2.5rem
letter-spacing: -0.32rem;
`;
