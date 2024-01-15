// Break:
// The break is used when the 1st statement executes and we dont want to execute 2nd statement, then 
// we use 'break;' at the end of console.log ().

// Example 1 :
// We need to write a program that we will give the 'first element' in an array that is divisible by 2
var arr = [11, 21, 13, 24, 51, 6, 17, 8, 9, 10, 11];

for (var i = 0 ; i < arr.length ; i++) {
    if (arr [i] % 2 === 0) {
        console.log ("The first number is divisible by 2 is"  + arr [i]);
        break;
    }
}
// Output => The first number is divisible by 2 is 24.

// In the above code there is 4 number (24, 6, 8, 10) but we want the first number which is 24, so 
// here the it log execute first statement and we get the statement of 24, and then the 'break' 
// statement is work & stop the code. 