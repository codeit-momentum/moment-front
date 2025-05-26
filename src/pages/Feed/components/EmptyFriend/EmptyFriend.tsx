import * as S from './EmptyFriend.style.ts';
import IcNoFreind from '../../../../assets/svg/feed/IcNoFriend';

const EmptyFriend = () => {
  return (
    <S.EmptyFriendLayout>
      <S.EmptyFriendTitleBox>
        친구를 추가해서
        <br /> 달성기록을 공유해보세요.
      </S.EmptyFriendTitleBox>
      <S.EmptyFriendIcon>
        <IcNoFreind />
      </S.EmptyFriendIcon>
      <S.ButtonLink to="/mypage/friend">친구 찾으러 가기</S.ButtonLink>
    </S.EmptyFriendLayout>
  );
};

export default EmptyFriend;
