/**************************** Practice Set 2 ****************************/

// Q.1 Use logical Operator to find whether the age of a person lies between 10 and 20?

let a = 17;
if (a>10 && a<20) {
    console.log("The age of a person lies between 10 and 20");
}else {
    console.log("The age of a person not lies between 10 and 20");
}


// Q.2 Demonstrate the use of switch case statements in JavScript.

let a = 11;
switch (a) {
    case 10:
        console.log("Enter Invalid number");
        break;
    case 11:
        console.log("Congrats! You Enter undered number 10");
        break;
    default:
        console.log("Thanks");
        
}


// Q.3 Write a JavaScript program to find whether a number is Divisible by 2 and 3.

let a = 12;
if (a % 2 === 0 && a % 3 === 0) {
    console.log("You are correct");
    
} else {
    console.log("You are incorrect");
    
}


// Q.4 Write a JS program to find whether a number is Divisible by either 2 or 3.

let a = 15;
if (a % 2 === 0) {
    console.log("Divisible by 2");
    
} else if (a % 3 === 0) {
    console.log("Divisible by 3");
    
} else {
    console.log("You are incorrect");
    
}


// Q.5 Print "you can Drive" or "you cannot Drive" based on age being greater than 18 ternary operator.

const age = 20;
console.log(age>18 ? "you can Drive": "you cannot Drive");