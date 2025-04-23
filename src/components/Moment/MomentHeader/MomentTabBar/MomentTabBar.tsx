import * as S from './MomentTabBar.style';

const MomentTabBar = () => {
  return (
    <S.MomentTabBarLayout>
      <S.TabWrapper to="/moment" end>
        {({ isActive }) => (
          <S.TabBox $isActive={isActive}>
            모멘트{isActive && <S.ActiveBorder />}
          </S.TabBox>
        )}
      </S.TabWrapper>
      <S.TabWrapper to="/moment/bucket">
        {({ isActive }) => (
          <S.TabBox $isActive={isActive}>
            버킷리스트{isActive && <S.ActiveBorder />}
          </S.TabBox>
        )}
      </S.TabWrapper>
    </S.MomentTabBarLayout>
  );
};

export default MomentTabBar;
