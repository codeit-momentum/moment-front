import IcBack from '../../assets/svg/IcBack';
import * as S from './BackBtn.style';

interface BackBtnProps {
  onClick: () => void; // 클릭 이벤트 핸들러
}

const BackBtn = ({ onClick }: BackBtnProps) => {
  return (
    <S.BackBtnWrapper
      onClick={() => {
        console.log('BackBtn clicked');
        onClick();
      }}
    >
      <IcBack />
    </S.BackBtnWrapper>
  );
};

export default BackBtn;
