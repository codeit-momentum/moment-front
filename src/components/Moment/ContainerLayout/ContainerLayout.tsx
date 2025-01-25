import { ReactNode } from 'react';
import * as S from './ContainerLayout.style';

type ContainerLayoutProps = {
  children: ReactNode;
  title: string;
};

const ContainerLayout = ({ children, title }: ContainerLayoutProps) => {
  return (
    <S.ContainerLayout>
      <S.TitleSpan>{title}</S.TitleSpan>
      <S.TopRightPixel />
      <S.TopLeftPixel />
      <S.BottomRightPixel />
      <S.BottomLeftPixel />
      {children}
    </S.ContainerLayout>
  );
};
export default ContainerLayout;
