// SWITZERLAND - bigmacPriceIndex1

let usBigmacPrice = 5.66;
let swissBigmacPrice = 6.5;
let impliedPurchasingPower = usBigmacPrice / swissBigmacPrice;
// Annual exchange rate of $1 to 0.92chf at the time of this evaluation.
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

let usBigmacPrice = 5.66;
let swissBigmacPrice = 6.5;
let impliedPurchasingPower = usBigmacPrice / swissBigmacPrice;
// Annual exchange rate of $1 to 0.92chf at the time of this evaluation.
let dollarExchangeRate = 1;
let swissExchangeRate = dollarExchangeRate - 0.08;
console.log(swissExchangeRate);
let swissBigmacPriceIndex =
  (dollarExchangeRate - impliedPurchasingPower) / impliedPurchasingPower;
console.log(swissBigmacPriceIndex);
let bigmacPriceIndex1 = (swissBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex1);
console.log(bigmacPriceIndex1 + "%");