import * as S from './Button.style';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  customStyle?: React.CSSProperties;
  onClick: () => void;
  disabled?: boolean;
  type: 'button' | 'submit';
};

const Button = ({
  children,
  customStyle,
  onClick,
  disabled,
  type,
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      disabled={disabled}
      style={customStyle}
      onClick={onClick}
      type={type}
    >
      {children}
    </S.ButtonWrapper>
  );
};

export default Button;
