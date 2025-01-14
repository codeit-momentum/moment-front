import { useNavigate } from 'react-router-dom';
import * as S from './GNB.style';
import { useState } from 'react';

const GNB = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>('home');
  const handldeActive = (label: string, path: string) => {
    setActive(label);
    navigate(path);
  };
  const navList = [
    { label: 'home', name: '홈', path: '/home', icon: null },
    { label: 'moment', name: '모멘트', path: '/moment', icon: null },
    { label: 'feed', name: '피드', path: '/feed', icon: null },
    { label: 'mypage', name: '마이', path: '/mypage', icon: null },
  ];

  return (
    <S.GNBLayout>
      {navList.map((nav) => (
        <S.NavItem
          key={nav.label}
          onClick={() => handldeActive(nav.label, nav.path)}
        >
          {active === nav.label ? <S.AciteTab /> : <S.UnActiveTab />}
          <S.NavLabelSpan>{nav.name}</S.NavLabelSpan>
        </S.NavItem>
      ))}
    </S.GNBLayout>
  );
};

export default GNB;
