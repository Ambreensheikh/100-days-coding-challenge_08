"use strict";
//making a function to multiplying decimals
function multiplyDecimalNumbers(num1, num2) {
    let product = num1 * num2;
    return Math.round(product * 100) / 100;
    // two decimal places
}
let result = multiplyDecimalNumbers(5.34, 2.86);
console.log(result);
