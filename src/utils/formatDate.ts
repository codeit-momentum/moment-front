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
