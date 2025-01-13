import * as S from './GNB.style';

const GNB = () => {
  const navList = [
    { label: 'home', name: '홈', path: '/home', icon: null },
    { label: 'moment', name: '모멘트', path: '/moment', icon: null },
    { label: 'feed', name: '피드', path: '/feed', icon: null },
    { label: 'mypage', name: '마이', path: '/mypage', icon: null },
  ];
  return (
    <S.GNBLayout>
      {navList.map((nav) => (
        <S.NavItem key={nav.label}>
          <S.NavIcon />
          <S.NavLabelSpan>{nav.name}</S.NavLabelSpan>
        </S.NavItem>
      ))}
    </S.GNBLayout>
  );
};

export default GNB;
