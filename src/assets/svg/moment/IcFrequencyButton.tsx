type IcFrequencyButtonProp = {
  isSelected: boolean;
};

const IcFrequencyButton = ({ isSelected }: IcFrequencyButtonProp) => (
  <svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 0H86V4H82V8H86V4H90V86H86V82H82V86V90H4V86H8V82H4V86H0V8H4V4H8V0Z"
      fill={isSelected ? '#6A7CB7' : '#DBDBDB'}
    />
  </svg>
);

export default IcFrequencyButton;
