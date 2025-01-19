import * as S from './ProgressBar.style';

type ProgressBarProps = {
  value: number;
};

const ProgressBar = ({ value }: ProgressBarProps) => {
  return (
    <S.ProgressBar>
      <S.ProgressValue $value={value} />
    </S.ProgressBar>
  );
};

export default ProgressBar;
