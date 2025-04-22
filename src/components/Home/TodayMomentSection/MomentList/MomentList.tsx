import * as S from './MomentList.style';
import IcClip from '../../../../assets/svg/home/IcClip';
import IcClipOff from '../../../../assets/svg/home/IcClipOff';
import { MomentItemType } from './../../../../types/home/index.d';
import formatMomentList from '../../../../utils/formatMomentList';
import IcStamp from '../../../../assets/svg/home/IcStamp';

interface MomentListProps {
  moments: MomentItemType[];
}

const MomentList = ({ moments }: MomentListProps) => {
  const momentItems: MomentItemType[] = formatMomentList(moments);

  return (
    <S.MomentListLayout>
      {momentItems.map(({ momentID, content, isCompleted }) => (
        <S.MomentBox key={momentID} $isCompleted={isCompleted}>
          <S.IconWrapper>
            {isCompleted ? <IcClipOff /> : <IcClip />}
          </S.IconWrapper>
          {isCompleted && (
            <S.ClearBadgeSpan>
              <IcStamp />
            </S.ClearBadgeSpan>
          )}
          <S.MomentTitleSpan>{content}</S.MomentTitleSpan>
        </S.MomentBox>
      ))}
    </S.MomentListLayout>
  );
};

export default MomentList;
