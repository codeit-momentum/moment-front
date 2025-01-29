import React from 'react';
import * as S from './Divider.style';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  customStyle?: React.CSSProperties;
}

const Divider = ({ ...props }: DividerProps) => {
  return <S.CommonDiv {...props} style={props.customStyle} />;
};
export default Divider;
