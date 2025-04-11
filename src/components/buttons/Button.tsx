import * as S from './Button.style';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $customstyle?: React.CSSProperties;
}

const Button = ({ ...props }: ButtonProps) => {
  return <S.ButtonWrapper {...props} style={props.$customstyle} />;
};

export default Button;
