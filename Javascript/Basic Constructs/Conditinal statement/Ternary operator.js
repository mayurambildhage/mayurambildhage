// Ternary Operator : It is short way of writing if/else condition.
// (?) and (:) is the ternarty operator.
// (?) => if    [question mark]
// (:) => else  [colon]

// Example 1 : Check the number '20' is even or odd.

// Using if/else condition :

var num1 = 20;

if (num1 % 2 === 0) {
    console.log ("Even");
} else {
        console.log ("Odd") ;
    }
// Output = Even

// Using Ternary operator :

var num2 = 20;

num2 % 2 === 0 ? console.log ("Even") : console.log ("Odd") ;
// Output = Even

var num3 = 15;

num3 % 2 === 0 ? console.log ("Even") : console.log ("Odd") ;
// Output = Odd


// Example 2 : Check the check the gender is 'male', 'female' or 'other'.

// Using if/else condition

var gender = 'male';

if (gender === 'male') {
    console.log ("Male");
} else if (gender === 'female') {
    console.log ("Female");
} else {
    console.log ("Other");
}
// Output = Male


// Using ternary Operator.

var gender = 'female';

gender === 'male' ? console.log ("Male") : (gender === 'female' ? console.log ("Female") : console.log ("Other"));
// Output = Female

// Example 3 : What is the output of following 
var a = 15;
var b = 11;

var c = a > b ? (b > a ? 20 : -1) : 15 ;
console.log (c);
// Output = -1

// Example 4 : What is the output of following 
var x = 20;
var y = 10;

var z = x > y ? 30 : 40 ;
console.log (z);
// Output = 30
