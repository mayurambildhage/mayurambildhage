// Scopes / Boundary '{ }'

// Global scope :
// In this a variable is defined outside the functions.

var name = "Mayur";  // This variable create outside the function.
                     // And this variable can be access from anywhere.
function print() {
    console.log("Namaste " + name );
}
print();

console.log("Namaste " + name );
console.log("Namaste " + name );
// Output => Namaste Mayur




// Local scope :
// In this a variable is defined inside the functions.

function print() {
    var name1 = "Rahul";   // This variable create inside the function.
    console.log("Namaste " + name1);
}
print();

//console.log("Namaste " + name1 );  // not defined, cause it is not inside a function.
// Output => Namaste Rahul


// Example 1 : Local scope
function print1() {
    var firstname = "Mrigank";
    console.log(firstname);
}
function print2() {
    var firstname = "Hemant";
    console.log(firstname);
}

print1();
print2();

// Example 2 : Local scope
function outer() {
var outerVariable = "HI";
function inner() {
    var innarVariable = "Hello"
    console.log(outerVariable);
}
inner();
}
outer();

// Example 3 : Global scope & Local scope

var name = "Ambildhage";

function test1() {
    console.log ("name");
}

function test2() {
    console.log (name);
}

function test3() {
    var name = "Mayur";
    console.log (name);
}

test1(); // output => name (string)
test2(); // output => Ambildhage (Global scope)
test3(); // output => Mayur (Local scope)
