// Switch Statement : it makes a block of statements to be executed in different cases.

// Example 1 : Using switch statement, explain the capital of Gujrat is Gandhinagar.
// the states are - Karnataka, Rajstan, Gujrat, Uttar Pradesh.

var state = "Gujrat";

switch (state) {
    case "Karnataka" :              // (:) colon
        console.log ("Bangluru") ;    
    break ;                         // (;) semi colon
    case "Rajstan" :
        console.log ("Jaipur") ;
        break ;
    case "Gujrat" :
        console.log ("Gandhinagar") ;
        break ;
    case "Uttar Pradesh" :
        console.log ("Lucknow") ;
        break ;
        default :
        console.log ("Computer does not know the Capital") ;
}
// Output = Gandhinagar


// In the switch statement we cannot use OR (||) operator, cause it gives error.
// lets take months example.
// Example 2 :
var month = "Jan";

switch (month) {
    case "Jan" :        // (:) this syntax we can use like OR, and it will work.
    case "Mar" :
    case "May" :
    case "Jul" :
    case "Aug" :
    case "Oct" :
    case "Dec" :
        console.log ("31") ;
        break;
    case "Feb" :
        console.log ("28") ;
        break;
    case "Apr" :
    case "Jun" :
    case "Sep" :
    case "Nov" :
        console.log ("30") ;
        break;
    default :
    console.log ("Not a valid month");
}
// Output = 31


// Example 3 : Using switch statement, check 'm' is a vowel or consonant.

var char = "m";

switch (char) {
    case "a" :
    case "e" :
    case "i" :
    case "o" :
    case "u" :
        console.log ("Vowel");
        break;
        default :
        console.log ("Consonant");
}
// Output = Consonant