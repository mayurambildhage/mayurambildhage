// For Loops :

// Syntax :
// for (initialization, condition, increament) {
//      console.log ();
// }


// Example 1 : Print "Hello" 20 times using for loops.

for (var i = 0 ; i < 20 ; i++ ) { 
    console.log ("Hello");
}

// Example 2 : How many time the "Hello World" will printed.

for (var i = 1 ; i <= 10 ; i += 2 ) {  // i += 2 means i = sum + 2 (increament value + 2)
    console.log ("Hello World");       // the condition is the value of i is greater than equal to 10.
}
// Output => 5 times


// Example 3 : How many time the "Apple" will printed.

var j = 0;
for (var i = 0 ; i + j < 20 ; i += 2 , j += 3) {
    console.log ("Apple");
}
// Output => 4 times


// Example 4 : 

var sum = 0 ;
for (var i = 0, j = 0 ; (i < 10) && (j < 10) ; ++i , j = i + 2) {
    console.log (i);
    console.log (j);
    sum += i;
}
console.log (sum);
// Output => sum = 28


// Practice Question : Check if number is perfect square. 
// (pefect square means number multiply by itself i.e. 5*5 = 25) 

// from 1 to 123, if there is any number which when multiply by itself and if gives 123, then the 
// answer is 'YES it is perfect square' other 'NO it is not perfect square'.
var j = 1;
for (var i = 1, j = 1 ; i * j <= 123 ; i++, j++) {
    console.log (i * j);
} 

// 1*1 = 1
// 2*2 = 4
// 3*3 = 9
// 4*4 = 16
// 5*5 = 25
// 6*6 = 36
// 7*7 = 49
// 8*8 = 64
// 9*9 = 81
// 10*10 = 100
// 11*11 = 121


// Example 5 : Decrement (i--)

for (var i = 10 ; i > 0 ; i--) {
    console.log ("Zero")
}
// Output => 10 times (Zero)


// Example 6 : Divide (i /= number)

// for (var i = 0 ; i < 10 ; i /= 2) {
    // console.log ("HI");
// }
// Output => infinite times (HI)


// Example 7 : Multiply (i *= number)

for (var i = 1 ; i < 10 ; i *= 2) {
    console.log ("Hey");
}
// Output => 4 times (Hey)


// Example 8 : run in infinite loop

// for ( ; true; ) {
   // console.log ("HELLO");
// }


// Example 9 : Explain how many time the "Hey" word will printed.
for (var i = 0, j = 2 ; i < 20  && j < 30 ; i += 4, j *= i) {
    console.log ("Hye");
}
// i = 0, j = 2, (Hye)
// i = 4, j = 8, (Hye)
// i = 8, j = 64. (Stop the code)

// Output => 2 times (Hye)
