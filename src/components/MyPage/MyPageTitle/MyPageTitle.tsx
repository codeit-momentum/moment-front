import React from 'react';
import * as S from './MyPageTitle.style';
import IcBack from '../../../assets/svg/IcBack';
import { useNavigate } from 'react-router-dom';

interface MyPageTitleProps {
  children: React.ReactNode;
}

const MyPageTitle = ({ children }: MyPageTitleProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <S.MyPageTitleLayout>
      <S.IconButton onClick={handleNavigate}>
        <IcBack />
      </S.IconButton>
      <S.TitleSpan>{children}</S.TitleSpan>
    </S.MyPageTitleLayout>
  );
};

export default MyPageTitle;
