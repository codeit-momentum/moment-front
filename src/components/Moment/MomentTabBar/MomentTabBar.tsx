import * as S from './MomentTabBar.style';

const MomentTabBar = () => {
  return (
    <S.MomentTabBarLayout>
      <S.TabWrapper to="/moment" end>
        {({ isActive }) => <S.TabSpan $isActive={isActive}>모멘트</S.TabSpan>}
      </S.TabWrapper>
      <S.Divider />
      <S.TabWrapper to="/moment/bucket">
        {({ isActive }) => (
          <S.TabSpan $isActive={isActive}>버킷리스트</S.TabSpan>
        )}
      </S.TabWrapper>
    </S.MomentTabBarLayout>
  );
};

export default MomentTabBar;
