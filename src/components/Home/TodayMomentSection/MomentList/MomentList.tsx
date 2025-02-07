import * as S from './MomentList.style';
import IcClip from '../../../../assets/svg/IcClip';

// ✅ MomentListProps & MomentProps 인터페이스 추가
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
          <S.MomentItem key={`moment-${id}`} $isCompleted={isCompleted}>
            <S.StyledIcClip as={IcClip} />
            <S.MomentBox $isCompleted={isCompleted}>
              {isCompleted && <S.ClearBadgeSpan>CLEAR</S.ClearBadgeSpan>}
              <S.MomentTitleSpan>{title}</S.MomentTitleSpan>
            </S.MomentBox>
          </S.MomentItem>
        ))
      ) : (
        <S.MomentTitleSpan>모멘트가 없습니다.</S.MomentTitleSpan>
      )}
    </S.MomentListLayout>
  );
};

export default MomentList;
