import { NavLink } from 'react-router-dom';
import * as S from './GNB.style';
import IcActiveHome from '../../assets/svg/IcActiveHome';
import IcActiveMoment from '../../assets/svg/IcActiveMoment';
import IcActiveFriends from '../../assets/svg/IcActiveFriends';
import IcActiveMyPage from '../../assets/svg/IcActiveMyPage';
import IcUnactiveHome from '../../assets/svg/IcUnactiveHome';
import IcUnactiveMoment from '../../assets/svg/IcUnactiveMoment';
import IcUnactiveFriends from '../../assets/svg/IcUnactiveFriends';
import IcUnactiveMyPage from '../../assets/svg/IcUnactiveMyPage';

const GNB = () => {
  const navList = [
    {
      label: 'home',
      name: '홈',
      path: '/home',
      activeIcon: <IcActiveHome />,
      unactiveIcon: <IcUnactiveHome />,
    },
    {
      label: 'moment',
      name: '모멘트',
      path: '/moment',
      activeIcon: <IcActiveMoment />,
      unactiveIcon: <IcUnactiveMoment />,
    },
    {
      label: 'feed',
      name: '피드',
      path: '/feed',
      activeIcon: <IcActiveFriends />,
      unactiveIcon: <IcUnactiveFriends />,
    },
    {
      label: 'mypage',
      name: '마이',
      path: '/mypage',
      activeIcon: <IcActiveMyPage />,
      unactiveIcon: <IcUnactiveMyPage />,
    },
  ];

  return (
    <S.GNBLayout>
      {navList.map((nav) => (
        <NavLink key={nav.label} to={nav.path}>
          {({ isActive }) => (
            <S.NavItem>
              {isActive ? nav.activeIcon : nav.unactiveIcon}
            </S.NavItem>
          )}
        </NavLink>
      ))}
    </S.GNBLayout>
  );
};

export default GNB;
