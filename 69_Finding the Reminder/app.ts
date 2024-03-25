 //making a function deviding two numbers to find one quotient and one remainder
 function divideAndRemainder(dividend: number, divisor: number): 
 {quotient: number; remainder: number}{
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return {quotient , remainder};
 }
 console.log(divideAndRemainder(25,6));
 