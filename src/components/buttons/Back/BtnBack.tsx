import { useNavigationType, useNavigate } from 'react-router-dom';
import IcBack from '../../../assets/svg/common/IcBack';
import * as S from './BtnBack.style';

interface BtnBackProps {
  navigateURL: string;
}

const BtnBack = ({ navigateURL }: BtnBackProps) => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();

  const handleBack = () => {
    if (navigationType === 'POP') {
      navigate(navigateURL);
    } else {
      navigate(-1);
    }
  };
  return (
    <S.BackBtnField>
      <S.BackBtnWrapper onClick={handleBack}>
        <IcBack />
      </S.BackBtnWrapper>
    </S.BackBtnField>
  );
};

export default BtnBack;
