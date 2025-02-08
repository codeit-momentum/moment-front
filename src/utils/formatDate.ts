const formatDate = (date: string) => {
  const newDate = new Date(date);
  const formattedDate = `${newDate
    .toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
    })
    .replace('/', '.')
    .replace('/', '.')}.`;

  return formattedDate;
};

export default formatDate;

// YYYY.MM.DD 형식 변환 (헤더에서 사용)
export const formatHeaderDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toISOString().split('T')[0].replace(/-/g, '.');
};

// MM.DD. 형식 변환 (방법 리스트에서 사용)
export const formatListDate = (date: string) => {
  const newDate = new Date(date);
  return `${String(newDate.getMonth() + 1).padStart(2, '0')}.${String(newDate.getDate()).padStart(2, '0')}.`;
};

//YYYY-MM-DD 형식 변환 (API 요청용)
export const formatApiDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toISOString().split('T')[0];
};
