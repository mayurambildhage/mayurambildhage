// if/else condition

//Example 1 : Check the number 10, is 'even' or 'odd' using if/else condition.
let num = 10;

if (num %2 === 0) {       // if 10 is divided by 2 & reminder is 0,
    console.log ("Even"); // then the statement returns "Even"
} else {                  // else it is not divided by 2 & reminder is not 0,
    console.log ("Odd");  // then the statement returns "Odd"
}
// Output = Even


// Example 2 : Using if/else condition, prove text 'b' is not equal to 'a'.
let text = "b";

if (text === "a") {
    console.log ("'b' is equal to 'a'");
} else {
    console.log ("'b' is not equal to 'a'");
}
// Output = 'b' is not equal to 'a'.


// Example 3 : Using if/else condition, check the gender 'male' is "Male", "Female" or "Other".
let gender = 'male';

if (gender === 'male') {
    console.log ("Male");
} else if (gender === 'female') {
    console.log ("Female");
}else {
    console.log ("Other")
}
// Output = Male

// Example 4 : Explain the month 'Jan' is 31 days, using if/else condition.
// Method 1. Using if/else condition.
let month = 'Jan';

if (month === 'Jan') {
    console.log ("31");
} else if (month === 'Feb') {
    console.log ("28");
} else if (month === 'Mar') {
    console.log ("31");
} else if (month === 'Apr') {
    console.log ("30");
} else if (month === 'May') {
    console.log ("31");
} else if (month === 'Jun') {
    console.log ("30");
} else if (month === 'Jul') {
    console.log ("31");
} else if (month === 'Aug') {
    console.log ("31"); 
} else if (month === 'Sep') {
    console.log ("30");
} else if (month === 'Oct') {
    console.log ("31");
} else if (month === 'Nov') {
    console.log ("30");
} else if (month === 'Dec') {
    console.log ("31");
}
// Output = 31


// Example 4 : Explain the month 'May' is 31 days, using if/else condition.
// Method 2. Using if/else condition with OR operator (||).

let month1 = 'May';

if (month1 === 'Jan' || month1 === 'Mar' || month1 === 'May' || month1 === 'Jul' || month1 === 'Aug' || month1 === 'Oct' || month1 === 'Dec') {
    console.log ("31");
} else if (month1 === 'Feb') {
    console.log ("28");
} else if (month1 === 'Apr' || month1 === 'Jun' || month1 === 'Sep'  || month1 === 'Nov') {
    console.log ("30");
}
// Output = 31


// Example 4 : Find the month, in there 31 days, using if/else condition.
let days = '31';

if (days === '31') {
    console.log ("Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec");
} else if (days === '28') {
    console.log ("Feb");
} else if (days === '30') {
    console.log ("Apr", "Jun", "Sep", "Nov");
}
// Output = Jan Mar May Jul Aug Oct Dec


// Example 5 : Check the character 'g' is a "Vewel" or "Consonant" using if else condition with OR operator.
let char = 'g';

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    console.log ("Character is vowel");
} else {
    console.log ("Character is consonant");
}
// Output = Character is consonant.