// Arrays :
// arrays is the element stored in the square bracket '[]'.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// In arrays, to access / denotes the element with endexes. i.e. 0, 1, 2, ......., n.

console.log (arr [0]); // denotes the value i.e.1
console.log (arr [1]); // denotes the value i.e.2
console.log (arr [2]); // denotes the value i.e.3
console.log (arr [3]); // denotes the value i.e.4
console.log (arr [4]); // denotes the value i.e.5
console.log (arr [5]); // denotes the value i.e.6
console.log (arr [6]); // denotes the value i.e.7
console.log (arr [7]); // denotes the value i.e.8
console.log (arr [8]); // denotes the value i.e.9
console.log (arr [9]); // denotes the value i.e.10

// Example 1.1 : Using for loop

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0 ; i < 10 ; i++) {
    console.log (arr[i]);
}

// Example 1.2 : If the length of array is too much lengthy.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14,15, 16];

for (i = 0 ; i < arr.length ; i++) {   // arr.length is define all the element.
    console.log (arr [i]);
}


// Example 1.3 : If we not want last elementof the array.

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14,15, 16];

for (i = 0 ; i < arr.length - 1 ; i++) {   // arr.length -1 is define not take last element.
    console.log (arr [i]);
}

// Example 2 : Using break
// We need to write a program that we will give the 'first element' in an array that is divisible by 2

var arr = [11, 21, 13, 24, 51, 6, 17, 8, 9, 10, 11];

for (var i = 0 ; i < arr.length ; i++) {
    if (arr [i] % 2 === 0) {
        console.log ("The first number is divisible by 2 is"  + arr [i]);
        break;
    }
}
// Output => The first number is divisible by 2 is 24.

