import React from 'react';
import * as S from './MyPageTitle.style';
import IcBack from '../../../assets/svg/IcBack';

interface MyPageTitleProps {
  children: React.ReactNode;
}

const MyPageTitle = ({ children }: MyPageTitleProps) => {
  return (
    <S.MyPageTitleLayout>
      <S.IconWrapper>
        <IcBack />
      </S.IconWrapper>
      <S.TitleSpan>{children}</S.TitleSpan>
    </S.MyPageTitleLayout>
  );
};

export default MyPageTitle;
