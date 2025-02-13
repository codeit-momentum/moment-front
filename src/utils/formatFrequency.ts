const formatFrequency = (frequency: string) => {
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
