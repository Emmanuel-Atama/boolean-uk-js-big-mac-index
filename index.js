// SWITZERLAND - bigmacPriceIndex1

let BigmacPriceInUS = 5.66;
let BigmacPriceInSwitzerland = 6.5;
let impliedPurchasingPowerUsVsSwitzerland = BigmacPriceInUS / BigmacPriceInSwitzerland;
// Annual exchange rate of 1USD is equal to 0.92CHF at the time of this evaluation.
let dollarExchangeRateUsVsSwitzerland = 1;
let BigmacPriceIndexSwitzerland =
  (dollarExchangeRateUsVsSwitzerland - impliedPurchasingPowerUsVsSwitzerland) / impliedPurchasingPowerUsVsSwitzerland;
console.log(BigmacPriceIndexSwitzerland);
let bigmacPriceIndexDecimal = (BigmacPriceIndexSwitzerland * 100).toFixed();
console.log(bigmacPriceIndexDecimal);
console.log(bigmacPriceIndexDecimal + "%");

// SWEDEN - bigmacPriceIndex2

let usBigmacPrice2 = 5.66;
let swedBigmacPrice = 52.88;
let impliedPurchasingPower2 = usBigmacPrice2 / swedBigmacPrice;
// Annual exchange rate of 1USD is equal to 8SEK at the time of this evaluation.
let dollarExchangeRate2 = 1;
let swedBigmacPriceIndex =
  (dollarExchangeRate2 - impliedPurchasingPower2) / impliedPurchasingPower2;
console.log(swedBigmacPriceIndex);
let bigmacPriceIndex2 = (swedBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex2);
console.log(bigmacPriceIndex2 + "%");

// NORWAY - bigmacPriceIndex3

let usBigmacPrice3 = 5.66;
let norwayBigmacPrice = 52.00;
let impliedPurchasingPower3 = usBigmacPrice3 / norwayBigmacPrice;
// Annual exchange rate of 1USD is equal to 8.5NOK at the time of this evaluation.
let dollarExchangeRate3 = 1;
let norwayBigmacPriceIndex =
  (dollarExchangeRate3 - impliedPurchasingPower3) / impliedPurchasingPower3;
console.log(norwayBigmacPriceIndex);
let bigmacPriceIndex3 = (norwayBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex3);
console.log(bigmacPriceIndex3 + "%");

// ISRAEL - bigmacPriceIndex4

let usBigmacPrice4 = 5.66;
let israelBigmacPrice = 17.00;
let impliedPurchasingPower4 = usBigmacPrice4 / israelBigmacPrice;
// Annual exchange rate of 1USD is equal to 3.2ILS at the time of this evaluation.
let dollarExchangeRate4 = 1;
let israelBigmacPriceIndex =
  (dollarExchangeRate4 - impliedPurchasingPower4) / impliedPurchasingPower4;
console.log(israelBigmacPriceIndex);
let bigmacPriceIndex4 = (israelBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex4);
console.log(bigmacPriceIndex4 + "%");

// Canada - bigmacPriceIndex5

let usBigmacPrice5 = 5.66;
let canadaBigmacPrice = 6.77;
let impliedPurchasingPower5 = usBigmacPrice4 / canadaBigmacPrice;
// Annual exchange rate of 1USD is equal to 1.25CAD at the time of this evaluation.
let dollarExchangeRate5 = 1;
let canadaBigmacPriceIndex =
  (dollarExchangeRate5 - impliedPurchasingPower5) / impliedPurchasingPower5;
console.log(canadaBigmacPriceIndex);
let bigmacPriceIndex5 = (canadaBigmacPriceIndex * 100).toFixed();
console.log(bigmacPriceIndex5);
console.log(bigmacPriceIndex5 + "%");
