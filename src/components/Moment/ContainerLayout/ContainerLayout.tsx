import { CSSProperties, ReactNode } from 'react';
import * as S from './ContainerLayout.style';

interface ContainerLayoutProps {
  title: string;
  containerStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  children: ReactNode;
}

const ContainerLayout = ({
  title,
  containerStyle,
  titleStyle,
  children,
}: ContainerLayoutProps) => {
  return (
    <S.ContainerLayout style={containerStyle}>
      <S.TitleSpan style={titleStyle}>{title}</S.TitleSpan>
      <S.TopRightPixel />
      <S.TopLeftPixel />
      <S.BottomRightPixel />
      <S.BottomLeftPixel />
      {children}
    </S.ContainerLayout>
  );
};
export default ContainerLayout;
