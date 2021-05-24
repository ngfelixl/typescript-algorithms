/**
 * Solution for exercise 16.8 from Cracking the Coding Interview
 * 2021/05/19
 */

const basicStrings = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen"
];

const tenthStrings = [
  "twenty",
  "thirty",
  "fourty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninty"
];

const thousandsStrings = [
  "",
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion"
];

export function numberToEnglishString(num: number): string {
  let finalString = "";
  let temp = num;
  let loopCount = 0;

  while(temp > 0) {
    const hundreds = temp % 1000;
    const hundredsString = getHundredsString(hundreds);
    const thousandsString = thousandsStrings[loopCount];

    if (hundredsString && thousandsString) {
      finalString = finalString ? `${thousandsString} ${finalString}` : thousandsString;
    }
    if (hundredsString) {
      finalString = finalString ? `${hundredsString} ${finalString}` : hundredsString;
    }
    temp = Math.floor(temp / 1000);
    loopCount++;
  }

  return finalString;
}

function getHundredsString(num: number): string {
  const hundreds = Math.floor(num / 100);
  const tenth = num % 100;

  if (hundreds > 0 && hundreds < 10) {
    return `${basicStrings[hundreds]} hundred ${getTenthString(tenth)}`;
  }
  return getTenthString(tenth);
}

function getTenthString(num: number): string {
  if (num >= 1 && num < 20) {
    return basicStrings[num];
  } else if (num >= 20 && num < 100) {
    const tenth = Math.floor(num/10);
    const onth = num % 10;
    const tenthString = tenthStrings[tenth - 2];
    const basicString = basicStrings[onth];
    if (basicString) {
      return `${tenthString} ${basicString}`;
    }
    return tenthString;
  }
  return '';
}