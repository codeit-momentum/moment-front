import * as S from './FrequentBtn.style';

interface FrequentBtnProps {
  isSelected: boolean;
  onClick: () => void;
  label: string;
}

const FrequentBtn = ({ isSelected, onClick, label }: FrequentBtnProps) => {
  return (
    <S.BtnWrapper onClick={onClick} $isSelected={isSelected}>
      <S.SvgWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90"
          height="90"
          viewBox="0 0 90 90"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0H86V4H82V8H86V4H90V86H86V82H82V86V90H4V86H8V82H4V86H0V8H4V4H8V0Z"
            fill={isSelected ? '#6A7CB7' : '#DBDBDB'}
          />
        </svg>
      </S.SvgWrapper>
      <S.Label isSelected={isSelected}>{label}</S.Label>
    </S.BtnWrapper>
  );
};

export default FrequentBtn;
