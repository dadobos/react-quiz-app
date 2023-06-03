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

export const unEscape = (text: string) => {
  text = text.replace(/&#039;/g, "'");
  text = text.replace(/&aacute;/g, 'á');
  text = text.replace(/&amp;/g, '&');
  text = text.replace(/&aring;/g, 'å');
  text = text.replace(/&auml;/g, 'ä');
  text = text.replace(/&gt;/g, '>');
  text = text.replace(/&lt;/g, '<');
  text = text.replace(/&ntilde;/g, 'ñ');
  text = text.replace(/&ouml;/g, 'ö');
  text = text.replace(/&quot;/g, '"');
  text = text.replace(/&uuml;/g, 'ü');
  return text;
};
