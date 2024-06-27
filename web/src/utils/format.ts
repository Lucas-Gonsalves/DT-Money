
function upperFirstLetter(text: string): string {

  const textFirstLetterUpperCase = text[0].toUpperCase();
  const textOffFirstLetter = text.slice(1).toLowerCase();

  return textFirstLetterUpperCase + textOffFirstLetter;
};


function toDecimalNumber(targetNumber: number) {
  const fixedFormattedStringfy = targetNumber.toFixed(2).toString();

  const [integerPart, decimalPart] = fixedFormattedStringfy.split('.');

  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  const formattedInteger = `${formattedIntegerPart},${decimalPart}`;

  return  formattedInteger.replace("-", "");
};

export const format = {
  upperFirstLetter,
  toDecimalNumber,
};