/**************************** Practice Set 3 ****************************/

// Q.1 Write a program to print the marks of a student in an object using for loop.

const marks = {
    Rohit: 65,
    Aman: 45,
    Piyush: 88,
    Raman: 78
}
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log(Object.keys(marks)[i], ":", + marks[Object.keys(marks)[i]]);
}


// Q.2 Write the program in Q1 using for in loop.

const marks1 = {
    Rohit: 65,
    Aman: 45,
    Piyush: 88,
    Raman: 78
}
for (const key in marks1) {
    console.log(key ," : ", + marks1[key]);
    
}


// Q.3 Write a program to print "try again" until the user enters the Correct number.

let correctNumber = 6;
let user;
while (user != correctNumber) {
    user = prompt("Entered the correct number");
    if (user != correctNumber) {
        console.log("Try again");
        
    }
    
}
console.log("Correct Number");


// Q.4 Write a function to find mean of 5 number.

function mean(a,b,c,d,e) {
    return (a+b+c+d+e)/5
}
let result = mean(1,2,3,4,5);
console.log(result);
