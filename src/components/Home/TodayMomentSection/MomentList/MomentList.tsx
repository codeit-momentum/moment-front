import * as S from './MomentList.style';
import IcClip from '../../../../assets/svg/home/IcClip';
import IcClipOff from '../../../../assets/svg/home/IcClipOff';
import { MomentItemType } from './../../../../types/home/index.d';

interface MomentListProps {
  moments: MomentItemType[];
}

const MomentList = ({ moments }: MomentListProps) => {
  /*
  const handleMomentClick = (id: string, isCompleted: boolean) => {
    if (isCompleted) return;
    console.log(`Redirect to moment detail page for ID: ${id}`);
  };*/
  const momentItems = [
    ...moments,
    ...new Array(3 - moments.length).fill({
      id: 'empty',
      title: '-',
      isCompleted: false,
    }),
  ];

  return (
    <S.MomentListLayout>
      {moments.length > 0 ? (
        momentItems.map(({ id, title, isCompleted }) => (
          <S.MomentBox key={id} $isCompleted={isCompleted}>
            <S.IconWrapper>
              {isCompleted ? <IcClipOff /> : <IcClip />}
            </S.IconWrapper>
            {isCompleted && <S.ClearBadgeSpan>CLEAR</S.ClearBadgeSpan>}
            <S.MomentTitleSpan>{title}</S.MomentTitleSpan>
          </S.MomentBox>
        ))
      ) : (
        <S.MomentTitleSpan>-</S.MomentTitleSpan>
      )}
    </S.MomentListLayout>
  );
};

export default MomentList;
