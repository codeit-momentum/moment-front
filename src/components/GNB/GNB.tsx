import * as S from './GNB.style';

const GNB = () => {
  const navList = [
    { label: 'main', path: '/main', icon: null },
    { label: 'moment', path: '/moment', icon: null },
    { label: 'feed', path: '/feed', icon: null },
    { label: 'mypage', path: '/mypage', icon: null },
  ];
  return (
    <S.GNBLayout>
      {navList.map((nav) => (
        <S.NavItem key={nav.label}>
          <S.NavIcon />
          <S.NavLabelSpan>{nav.label}</S.NavLabelSpan>
        </S.NavItem>
      ))}
    </S.GNBLayout>
  );
};

export default GNB;
