/**************************** Conditional ****************************/

// if statement

let a = 3;
if (a == 2) {           // If condition is true then Run this code
    console.log("This is valid number");
} else{                                         // else Statement
    console.log("This is not a valid number");      // Otherwise Run this code
    
}

// else if Statement

let age = 19;
if (age < 0) {
    console.log("Entered Invalid Age");
    
} else if (age > 0 && age < 18) {                   // Either Run thi code
    console.log("Sorry! You are kid");
    
} else {
    console.log("Congrats! You are Adult");
    
}
console.log("Thanks");


// Switch case Statement

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