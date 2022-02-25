export const getMessageDate = (date?: Date): string => {
  if (!date) {
    return '';
  }

  return `${date.getHours()}:${date.getMinutes()}`;
};
