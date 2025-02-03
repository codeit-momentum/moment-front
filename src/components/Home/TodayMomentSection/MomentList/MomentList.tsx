import * as S from './MomentList.style';

const MomentList = ({
  moments,
}: {
  moments: {
    id: number;
    title: string;
    category: string;
    isCompleted: boolean;
  }[];
}) => {
  return (
    <S.MomentListLayout>
      {moments.map((moment) => (
        <S.MomentItem key={moment.id} $isCompleted={moment.isCompleted}>
          <S.MomentCategoryBox $isCompleted={moment.isCompleted}>
            {moment.category}
          </S.MomentCategoryBox>
          <S.MomentBox $isCompleted={moment.isCompleted}>
            {moment.isCompleted && <S.ClearBadgeSpan>CLEAR</S.ClearBadgeSpan>}
            <S.MomentTitleSpan>{moment.title}</S.MomentTitleSpan>
          </S.MomentBox>
        </S.MomentItem>
      ))}
    </S.MomentListLayout>
  );
};

export default MomentList;
