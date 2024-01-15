// Continue:
// If we want to skip any value, number, etc. we use 'continue'.

// Example 1 :

var i = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (i = 1 ; i < 10 ; i++) {
    if (i === 3) {
        continue;   // it skip 3 from the list & execute other value.
    }
    console.log (i);
}


// Example 2 : We have an array of some students, and we have to print all students roll numbers apart
// from roll number 4.

var students = [3, 24, 54, 43, 12, 4, 6, 8, 9, 14, 15];

for (i = 0 ; i < students.length ; i++) {
    if (students [i] === 4) {
        continue;      // it skip 4 from the list & execute other value.
    }
    console.log ("Student with roll number", students [i]);
}


// Example : 2

for (i = 0 ; i < 1000 ; i++) {
    if (i % 2 === 0) {
        continue;   // it skip the number which mod is 0 (i.e. 500 numbers)
    }
    console.log ("Hello");
}
// Output 500 times (Hello) will be printed.
