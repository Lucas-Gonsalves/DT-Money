
function upperFirstLetter(text: string): string {

  const textFirstLetterUpperCase = text[0].toUpperCase();
  const textOffFirstLetter = text.slice(1).toLowerCase();

  return textFirstLetterUpperCase + textOffFirstLetter;
};


function toDecimalNumber(targetNumber: number) {
  const formattedNumber = targetNumber.toFixed(2).toString();

  const [integerPart, decimalPart] = formattedNumber.split('.');

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return `${formattedIntegerPart},${decimalPart}`;
};

export const format = {
  upperFirstLetter,
  toDecimalNumber,
};