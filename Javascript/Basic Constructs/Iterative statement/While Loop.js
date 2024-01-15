// While Loop : 
// It is much simple & better than for loop.

// Syntax :
// var = 0 ;             (initialization)
// while (i < 10) {        (condition)
//    i++;                 (increament)
//  console.log ("Hello");
//}


// Example 1 : Print "Hello" 10 times.

var i = 0;
while (i < 10) {
    i++;
    console.log ("Hello");
}

// Example 2 : Run in infinite loop.
// while (true) {    // cause the condition is true, so it will run in infinite loop.
//      console.log ("HELLO");
// }

// Example 3 : Not run a loop.
var i = 0;
while (false) {  // cause the condition is false, so it will stop and not the loop.
    console.log ("HELLO");
}