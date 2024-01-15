// Type Coersion

// (+) it treated as string concatenation.
let num1 = 20;
let num2 = '10';
let num3 = 'avengers';
console.log (num1 + num2); // returns 2010, it converts 20 to string & concatenates it with 10.
console.log (num1 + Number(num2)); // returns 30, if use Number(),it convert string to number.
console.log (num1 + num3); // returns 20avengers, converts 20 to string & concatenates.

// (-) it coverts string to a number.
let num4 = 30;
let num5 = "15";
console.log (num4 - num5); // returns 15, it converts "15" to a number 15.

let num6 = 50;
let num7 = "Hello";
console.log (num6 - num7); // returns NaN, it can't converts "Hello" to a number.