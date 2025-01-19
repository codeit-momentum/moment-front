import * as S from './MomentUploadStatus.style';

// 목 데이터
const moments = [
  {
    id: 1,
    title: '뜨개질 100코 뜨기',

    imgUrl:
      'https://soomgo.com/_next/image?url=https%3A%2F%2Fstatic.cdn.soomgo.com%2Fupload%2Fservice%2Fservice_popular_436.jpg%3Fwebp%3D1&w=3840&q=75',
  },
  { id: 2, title: '오픽 연습 진행하기', imgUrl: '' },
  { id: 3, title: '읽는 책 10pg 읽기', imgUrl: '' },
];

const MomentUploadStatus = () => {
  return (
    <S.MomentUploadStatusLayout>
      <S.TitleSpan>모멘트 인증하기</S.TitleSpan>
      <S.MomentContainer>
        {moments.length > 0 ? (
          moments.map((moment) => (
            <S.MomentItem key={moment.id}>
              {moment.imgUrl ? (
                <S.MomentImage src={moment.imgUrl} alt="인증이미지" />
              ) : (
                <S.UploadLinkWrapper>
                  {/* SVG 파일로 대체 */}
                  <S.UploadLink to="/home">+</S.UploadLink>
                </S.UploadLinkWrapper>
              )}
              <S.MomentTitleSpan>{moment.title}</S.MomentTitleSpan>
            </S.MomentItem>
          ))
        ) : (
          // 모멘트가 없는 경우
          <>
            <S.MomentItem />
            <S.MomentItem>
              <S.UploadLinkWrapper>
                {/* SVG 파일로 대체 */}
                <S.UploadLink to="">?</S.UploadLink>
              </S.UploadLinkWrapper>
              <S.MomentTitleSpan>새로운 모멘트를 등록하세요!</S.MomentTitleSpan>
            </S.MomentItem>
          </>
        )}
      </S.MomentContainer>
    </S.MomentUploadStatusLayout>
  );
};

export default MomentUploadStatus;
