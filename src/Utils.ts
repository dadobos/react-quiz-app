export const shuffleArray = (array: any[]) =>
  [...array].sort(() => Math.random() - 0.5);

export const Capitalize = (text: string) => {
  return text
    .replace(/[_-]/g, ' ')
    .replace(
      /(^\w|\s\w)(\S*)/g,
      (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
    );
};
