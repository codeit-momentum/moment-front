import * as S from './MomentList.style';
import IcClip from '../../../../assets/svg/IcClip';

interface MomentProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface MomentListProps {
  moments: MomentProps[];
}

const MomentList = ({ moments }: MomentListProps) => {
  return (
    <S.MomentListLayout>
      {moments.length > 0 ? (
        moments.map(({ id, title, isCompleted }) => (
          <S.MomentBox key={id} $isCompleted={isCompleted}>
            <S.IconWrapper>
              <IcClip />
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
