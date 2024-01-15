// Math.random () : [random => generate random number between 0 & 1 i.e. 0.985647]

// Take the value (10.1). the Math.floor () is take the previous / lower immediate value i.e. 10.
console.log (Math.random ()); // It contains empty bracket. if we are put any value it gives error.
// Output => 0.72434959605734


// Example 1 : Generate a random number between 0 & 100.

console.log (Math.floor (Math.random () * 100)); // Output => 38
console.log (Math.floor (Math.random () * 100)); // Output => 45
console.log (Math.floor (Math.random () * 100)); // Output => 87
console.log (Math.floor (Math.random () * 100)); // Output => 90
console.log (Math.floor (Math.random () * 100)); // Output => 79

// without using '0', we can write like this.
console.log (Math.floor (Math.random () * 99 + 1)); // Output => 95