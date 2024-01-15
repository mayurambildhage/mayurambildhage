// Equality Operators
// Tow types of equality operator.

//1. == 
console.log (9 == "9"); // returns true. (string "9" converted into number 9)

//2. ===
console.log (9 === "9"); // returns false. (this operator simply checks the value are equal or not)


// Inequality Operator (!=)
console.log ('1' != 1); // returns false. (convert true into false)
console.log (1 != 1);   // returns false. (convert true into false)

// Strict Inequality Operator (!==)
console.log ('1' !== 1); // returns true. (it convert string to number)
console.log (1 !== 1);   // returns false.

// Example
let num1 = 20;
let num2 = '5';
console.log (num1 == num2); // returns false, as 20 is not equals to 5.
console.log (num1 != num2); // returns true, as 20 is not equals to 5.
console.log (num2 == 5);    // returns true, as 5 is equals to 5.
console.log (num2 === 5);   // returns false, as '5' is string but 5 is a number.