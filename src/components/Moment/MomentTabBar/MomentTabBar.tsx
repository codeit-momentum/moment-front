import * as S from './MomentTabBar.style';

interface MomentTabBarProps {
  selected: 'moment' | 'bucket';
  setSelected: (value: 'moment' | 'bucket') => void;
}

const MomentTabBar = ({ selected, setSelected }: MomentTabBarProps) => {
  return (
    <S.MomentTabBarLayout>
      <S.TabButton
        $isSelected={selected === 'moment'}
        onClick={() => setSelected('moment')}
      >
        모멘트
      </S.TabButton>
      <S.Divider />
      <S.TabButton
        $isSelected={selected === 'bucket'}
        onClick={() => setSelected('bucket')}
      >
        버킷리스트
      </S.TabButton>
    </S.MomentTabBarLayout>
  );
};

export default MomentTabBar;
