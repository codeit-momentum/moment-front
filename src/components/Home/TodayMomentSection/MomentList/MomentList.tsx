import * as S from './MomentList.style';
import IcClip from '../../../../assets/svg/IcClip';

// ✅ 명시적으로 내보내기
export interface MomentProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface MomentListProps {
  moments: MomentProps[];
}

const MomentList = ({ moments }: MomentListProps) => {
  const handleMomentClick = (id: string, isCompleted: boolean) => {
    if (isCompleted) return;
    console.log(`Redirect to moment detail page for ID: ${id}`);
  };

  return (
    <S.MomentListLayout>
      {moments.length > 0 ? (
        moments.map(({ id, title, isCompleted }) => (
          <S.MomentItem
            key={`moment-${id}`}
            $isCompleted={isCompleted}
            onClick={() => handleMomentClick(id, isCompleted)}
          >
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
