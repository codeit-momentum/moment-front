import IcGaugeBar from '../../../assets/svg/moment/IcGaugeBar';
import * as S from './ProgressBar.style';

type ProgressBarProps = {
  value: number;
};

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <S.ProgressBar>
      <S.ProgressBarTopCorners />
      <S.ProgressBarBottomCorners />
      {Array.from({ length: Math.ceil(value / 10) }, (_, i) => (
        <IcGaugeBar key={i} />
      ))}
    </S.ProgressBar>
  );
};

export default ProgressBar;
