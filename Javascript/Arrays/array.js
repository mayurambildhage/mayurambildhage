// Arrays :
// - Collection of element in JavaScript.
// - it is collection of similar type of data.

// Example :

var city1 = "Mumbai";
var city2 = "Delhi";
var city3 = "Kolkata";

// In array we can writing above like this-

var cities = [ "Mumbai", "Delhi", "Kolkata"];
// - Accessing an element is easier.
// - Arrays are maintanable.

// In JS, it is not required that arrays have similar type of data.
var arr = [ 1, "Mumbai", false, null, undefined] // All type of data.


// In Array, index always starts at 0th position, i.e the 1st element at 0th index.
// the second element at the 1st index.
// the Third element at the 2nd index.
// the fourth element at the 3rd idex. an so on.

// The length of an array is denoted by "arr.length" (i.e. total no. of element).

// In other languages, you cannot access an array element without allocating memory for it.
// Ex. 
var arr = [];
arr [0] = 1;
arr [1] = 2;

// In JS, if you access an index which does not contain any element, then JS will return "undefined".
//Ex.
var arr = [];
arr [0] = 1;
arr [1] = 2;
console.log(arr[2]);   // (arr[2] not mention)
// output => undefined.

// Ex.2
var arr = [];
arr[0] = 1;
arr[2] = 2;
console.log(arr); // (arr[1] not mention, so taking undefined).
// Output => 1, undefined, 2. 


// Single Dimensional Array :

var colors = ["Blue", "Green", "Yellow", "Red"];

 // to print single element in the console, in single dimention.
console.log(colors[0]);
// Output => Blue
console.log(colors[1]);
// Output => Green
console.log(colors[2]);
// Output => Yellow
console.log(colors[3]);
// Output => Red


// Multi Demensional Array.

var items = [
    [2, 3],
    [5, 6],
    [7, 8]
];

 // to print single element in the console, in Multi dimension.
console.log(items[0][0]);
// Output => 2.
console.log(items[0][1]);
// Output => 3.
console.log(items[1][0]);
// Output => 5.


// Iterating over Arrays / Looping through the arrays.
// 1. Print using index / For loop.
// Ex.
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// Output => 1 2 3 4 5.


// 2. for of loop. (Work for strings & arrays)

// Ex.1 
var array = [1, 2, 3, 4, 5];
for (var element of array) {
    console.log(element);
}
// Output => 1 2 3 4 5

// Ex.2 
var names = ['a', 'b', 'c']; 
for (var name of names) {
    console.log(name);
}
// Output => a b c.

// Ex.3
var str = 'Mayur';
for (var char of str) {
    console.log(char);
}
// Output => M a y u r

// Ex.4 Sum of all element.
var array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
sum = 0;
for (var el of array) {  // el = element.
    // el = [1, 2, 3] [4, 5, 6] [7, 8, 9]
for (var innerEl of el) {
    // innerEl = 1 2 3 4 5 6 7 8 9
    sum += innerEl;
}
}
console.log(sum);
// Output => 45.