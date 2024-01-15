// FInctions :
// A function is perform specific task & which can be reused.
// if you are not assigning a variable any value, the JavaScript is assign default 'Undefined'.

// Javascript assign default 'Undefined'.
// 1.
function print() {
                    // return not define, so the output is undefined by default.
}
var resultVal = print();
console.log(result);
// Output => undefined.

// 2.
function willIndiaWin() {
    console.log("India will win the t20 world cup");
}
var result = willIndiaWin(); // not return any value.
console.log(result);
// Output => undefined.

// Function Parameter :
function square (number) {  // (number) = parameter
    return number * number ;
}
var result2 = square (3);  // (3) is parameter.
console.log (result2);


// function declaration
function greet () {     // declaring a function for greet()
    console.log ("Hello there");
}
greet ();


// function expression
let sayHi = function () {  // express a funtion for sayHi.
    console.log ("Hello");
}
sayHi();

// Example 1 : write a program to find it the sum of two numbers is greater than 10
function isGreater (sum) {
    return sum > 10;
}
var result1 = isGreater (7 + 8); // if their is not a print function, then console.log is required.
console.log (result1);
// Output => true


// Example 2 : Perfect square 
function isPerfectSquare(num) {                   // num = 2
    for (var i = 1 ; i <= num ; i++) {  // first iteration i = 1,  // second iteration i = 2.
    var square = i * i;                 // square of i * i = 1,    // now i * i = 4. 
    if (square === num) {     // for first iteration, its not fit.
        return true;
    }
    if (square < num) {      // in this it is skip.
    continue;
    }
    if (square > num) {      // second iteration fit here, so the output is false.
        return false;
    }
}
}

var result3 = isPerfectSquare(2);
console.log (result3);
// Output => false.


// Example 3 : Voting Age
function isVotingAge(age) {
    if (age > 18) {
    return true;
    } else {
        return false;
    }
}

var result4 = isVotingAge(25);
console.log (result4);
// Output => true.

// Example 4 : Three numbers (12, 45, 87), check the number is increasing order, decreasing order or
//             naither increasing or decreasing order.
function printOrder (a, b, c) {
    if (a < b && b < c) {
        console.log ("Increasing order");
    }
    else if (a > b && b > c) {
        console.log ("Decreasing order");
    }
    else {
        console.log ("Naither increasing or decreasing order")
    }
}

printOrder (12, 45, 87);   // if their is a print function, console.log not required.
// Output => Increasing order.


// Example 5 : Array of tree numbers (25, 15, 20), find largest number.
function printLargestNumber (A, B, C) {
    if (A > B && A > C) {
        console.log (A);
    }
    else {
        false;
    }
}
printLargestNumber (25, 15, 20);
// Output => 25.


// Example 6 : Grading system.
function calculateGrade(marks) {
    if (marks > 90) {
        console.log ("A");
    } else if (marks > 80 && marks < 89) {
        console.log ("B");
    } else if (marks > 60 && marks < 79) {
        console.log ("C");
    } else if (marks > 33 && marks < 59) {
        console.log ("D");
    } else if (marks < 33) {
        console.log ("F");
    }
}

calculateGrade(56);  // Output => D
calculateGrade(91);  // Output => A
calculateGrade(32);  // Output => F

// Example 7.1 : Write a function that generates a random number between 1 to 100.
function generatesRandomNum() {
    var num = (1 + Math.floor(Math.random() * 99));
    return num;
}

var res = generatesRandomNum(1,100);
console.log(res);
// Output => 35 (One random number)

// Example 7.2 : Write a function that generates a random number between 1 to 100.
function generatesRandomNum() {
    return 2 + Math.ceil(Math.random() * 97);
}

var i = 0;
while (i < 10) {
    var res2 = generatesRandomNum();
    i++;
    console.log(res2);
}
// Output => 33, 12, 45, 65, 76, 23, 43, 11, 76, 87,  (many random number)

// Can you write a function that generates random number
// between a startNum and endNum.

// function generatesRandomNum() {
//    var startNum = 1;
//    var endNum = 100;
//     return num = (startNum + Math.floor(Math.random() * endNum)); 
// }
// var res2 = generatesRandomNum(startNum, endNum);
// console.log(res2);


// Example 8 : Write a function to calculate (a+b)-(c+d).

function sum(a, b) {
    return a + b;
}

function diff(a, b) {
    return a - b;
}

function calculate(a, b, c, d) {

    var result1 = sum(a, b);
    var result2 = sum(c, d);

    var result3 = diff(result1 - result2);
    return result3;
}

console.log (calculate(2, 7, 4, 1));


// Function Hoisting : (Like flag hoisting on the top)
// (function call at top of the scope)
// it allows the functions used in code before they are declared.
// Function declaration, the declaration is hoisted to the top of the scope

// Hoisting only happen with function declaration on the top.

print();   // Hoiating

function print() {   // function declaration.
    console.log("Hello World");
}
// output => Hello World


// Example 1 : 
add (2, 3);  // Hoisting

function add (a, b) {    // function declaration
    console.log (a + b);
}
// output => 5

// with function expression :
// Hoisting does not happen with function expression to the top of the scope.

// Example :

greet1(); // hoisting (it is not a express at top of the scope.)

var greet1 = function() {    // function expression.
    console.log ("HELLO WORLD");
}
// Output => error.
// Hoisting is not happen with function expression to the top.


// Example 1 : 
add (2, 3);  // Hoisting (it is not a express at top of the scope.)

var add = function(a, b) {    // function expression
    console.log (a + b);
}
// output => error.