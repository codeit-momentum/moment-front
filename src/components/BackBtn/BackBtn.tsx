import IcBack from '../../assets/svg/IcBack';
import * as S from './BackBtn.style';

interface BackBtnProps {
  onClick: () => void; // 클릭 이벤트 핸들러
}

const BackBtn = ({ onClick }: BackBtnProps) => {
  return (
    <S.BackBtnField>
      <S.BackBtnWrapper
        onClick={() => {
          onClick();
        }}
      >
        <IcBack />
      </S.BackBtnWrapper>
    </S.BackBtnField>
  );
};

export default BackBtn;
