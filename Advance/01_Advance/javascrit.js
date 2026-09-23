/**************************** Console Objects ****************************/

// console.log(console);            // All Console Print
// console.assert(5<23);               // Assumption error
// console.clear();                    // Console was cleared

// a = {
//     name: "Rohit",
//     section: "F",
//     isAttended: false,
// }
// console.table(a);                   // Print a table

// console.warn("Please leave this page")      // Warning show

// console.info("hey this is page");                // info show as log

// console.error("Error");                 // Error show

// console.time("a");
// console.timeEnd("a");                // show time


/**************************** Interaction ****************************/

// alert("Go back");               // Alert
// prompt("Enter the number");     // Used to take user input as string
// let a = confirm("Are you sure");     // Print true to false 
// console.log(a);


/**************************** DOM, BOM & Window Objects ****************************/

// Document Object Model

// window.console.log(document);
// window.document.body;

// Browser Object Model

// location.href = "https://github.com/Rohit-Kumar000";


/**************************** Practice Set ****************************/

// Q.1 Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.

/*
let user = Number.parseInt(prompt("Enter your age"));
if (user > 18) {
    alert("You can drive");
} else {
    alert("You can't drive")
}
*/

// Q.2 In Q.1 use confirm to ask the user if he wants to see the prompt again.

/*
let user = Number.parseInt(prompt("Enter your age"));

while (true) {

    if (user > 18) {
        alert("You can drive");
    } 
    else if (user > 0 && user <= 18) {
        alert("You can't drive");
    }

    let again = confirm("Do you want to see the prompt again?");

    if (again) {
        user = Number.parseInt(prompt("Enter your age"));
    } 
    else {
        break;
    }
}
*/


// Q.3 In the previous question, use console.error to log the error if the age entered is negative.

/*
let user = Number.parseInt(prompt("Enter your age"));

while (true) {

    if (user > 18) {
        alert("You can drive");
    } 
    else if (user > 0 && user <= 18) {
        alert("You can't drive");
    } 
    else if (user < 0) {
        console.error("You Entered Incorrect Age"); 
        break;
    }

    let again = confirm("Do you want to see the prompt again?");

    if (again) {
        user = Number.parseInt(prompt("Enter your age"));
    } 
    else {
        break;
    }
}
*/

// Q.4 Write a program to change the url to google.com (Redirection) if user enters a number greater than 4.

/*
let user = Number.parseInt(prompt("Enter a number"));
while (true) {
    
    if (user >= 4) {
        location.href = "https://www.google.com/?zx=1790184177712";
        break;
    }

    let again = confirm("Do you want to see the prompt again?");

    if (again) {
        user = Number.parseInt(prompt("Enter a number"));
    } 
    else {
        break;
}
}
*/

// Q.5 Change the background of the page to yellow, red or any other color based on user input through prompt.

/*
let user = prompt("Enter the background color");
document.body.style.backgroundColor = user;
*/

/**************************** Exercise 2 ****************************/

/*
Use JavaScript to create a game of Snake , Water and Gun. The game should ask you to
enter S, W and G. The Computer should be able to randomly generate S, W or G and 
declare Win or loss using alert Use confirm and prompt wherever required.
*/

/*
let user = String(prompt("Enter S for Snake, W for Water or G for Gun"));

let computer;
while (true) {
    let game = Math.floor(Math.random() * 3)
    
    if (game === 0) {
        computer = "S";
    }
    else if (game === 1) {
        computer = "W";
    }
    else {
        computer = "G";
    }
    console.log("You :", user);
    console.log("Computer:", computer);
    
    if (user === computer) {
        alert("It's a Draw!")
    }
    else if (
        (user === "S" && computer === "W") ||
        (user === "W" && computer === "G") ||
        (user === "G" && computer === "S")
    ) {
        alert("Congratulations! You Win 🎉");
    }
    else {
        alert("You Lose!");
    }

    let again = confirm("Do you want to play again?");
    
    if (again) {
        user = String(prompt("Enter S for Snake, W for Water or G for Gun"));

    } 
    else {
        break;
    }
}
*/