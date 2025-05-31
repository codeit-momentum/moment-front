import { FrequencyType } from '../types/moment/create';

const formatFrequency = (frequency: FrequencyType) => {
  switch (frequency) {
    case 'daily':
      return `1일에 1번`;
    case 'every2days':
      return `2일에 1번`;
    case 'weekly':
      return `1주에 1번`;
    case 'monthly':
      return `1달에 1번`;
    default:
      return '';
  }
};

export default formatFrequency;

const frequencyValues: FrequencyType[] = [
  'daily',
  'every2days',
  'weekly',
  'monthly',
];

export const frequencyOptions = frequencyValues.map((value) => ({
  label: formatFrequency(value), // 기존 유틸 함수 사용
  value,
}));
