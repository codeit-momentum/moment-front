import React from 'react';
import * as S from './Divider.style';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  customStyle?: React.CSSProperties;
}

const Divider = ({ customStyle }: DividerProps) => {
  return <S.CommonDiv style={customStyle} />;
};
export default Divider;
