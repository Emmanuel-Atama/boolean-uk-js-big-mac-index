// SWITZERLAND - bigmacPriceIndex1

let usBigmacPrice = 5.66;
let swissBigmacPrice = 6.5;
let impliedPurchasingPower = usBigmacPrice / swissBigmacPrice;
// Annual exchange rate of 1USD is equal to 0.92CHF at the time of this evaluation.
let dollarExchangeRate = 1;
let swissExchangeRate = dollarExchangeRate - 0.08;
console.log(swissExchangeRate);
let swissBigmacPriceIndex =
  (dollarExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;
console.log(swissBigmacPriceIndex);
let bigmacPriceIndex1 = (swissBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex1);
console.log(bigmacPriceIndex1 + "%");

// SWEDEN - bigmacPriceIndex2

let usBigmacPrice2 = 5.66;
let swedBigmacPrice = 52.88;
let impliedPurchasingPower2 = usBigmacPrice2 / swedBigmacPrice;
// Annual exchange rate of 1USD is equal to 8SEK at the time of this evaluation.
let dollarExchangeRate2 = 1;
let swedExchangeRate = dollarExchangeRate2 + 51.88;
console.log(swedExchangeRate);
let swedBigmacPriceIndex =
  (dollarExchangeRate2 - impliedPurchasingPower2) / impliedPurchasingPower2;
console.log(swedBigmacPriceIndex);
let bigmacPriceIndex2 = (swedBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex2);
console.log(bigmacPriceIndex2 + "%");

// NORWAY - bigmacPriceIndex3