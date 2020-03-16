export const dot3 = (text, numberDot = 70) => {
  if (!text) {
    return 'Sem descrição';
  }

  if (text.length < numberDot) {
    return text;
  }

  return `${text.substring(0, 70)}...`;
};
