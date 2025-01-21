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
    <S.MomentListWrapper>
      {moments.map((moment) => (
        <S.MomentItemWrapper
          key={moment.id}
          $isCompleted={moment.isCompleted} // $isCompleted로 전달
        >
          <S.MomentCategory $isCompleted={moment.isCompleted}>
            {moment.category}
          </S.MomentCategory>
          <S.MomentBox $isCompleted={moment.isCompleted}>
            {moment.isCompleted && <S.ClearBadge>CLEAR</S.ClearBadge>}
            <S.MomentTitle>{moment.title}</S.MomentTitle>
          </S.MomentBox>
        </S.MomentItemWrapper>
      ))}
    </S.MomentListWrapper>
  );
};

export default MomentList;
