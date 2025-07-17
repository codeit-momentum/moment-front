import { ReactNode } from 'react';
import * as S from './ContainerLayout.style';
import IcTitleBox from '../../../assets/svg/moment/IcTitleBox';

interface ContainerLayoutProps {
  title: string;
  children: ReactNode;
}

const ContainerLayout = ({ title, children }: ContainerLayoutProps) => {
  return (
    <S.ContainerLayout>
      <S.TitleBox>
        <IcTitleBox />
        <S.TitleSpan>{title}</S.TitleSpan>
      </S.TitleBox>
      <S.TopRightPixel />
      <S.TopLeftPixel />
      <S.BottomRightPixel />
      <S.BottomLeftPixel />
      {children}
    </S.ContainerLayout>
  );
};
export default ContainerLayout;
