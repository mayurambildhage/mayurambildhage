// Unary Operators

//1. Typeof
let num = 10;
let str = 'Hello World';
console.log (typeof num); // returns number
console.log (typeof str); // returns string

//2. Unary Plus ('+')
let num1 = 20;
let str1 = '30';
let str2 = 'Hello';
console.log (+num1); // returns number
console.log (+str1); // convert string ('30') to number (30)
console.log (+str2); // returns NaN, as it cant convert to a number

//3. Unary Negation ('-')
let a = "5";
let b = a;
console.log (-b); // retuns -5, as it can convert sting into a number.

//4. Logical Not (!)
let num3 = 50;
let str4 = "Hello World"
let num2 = 0;
console.log (!num3); // returns false, as a number is truthy value.
console.log (!str4); // returns false, as string is truthy value.
console.log (!num2); // returns true, as 0 is falsy value.