/**************************** Loops ****************************/

// for loop

let a = 15;
for (let i = 0; i < a; i++) {
    console.log(i);
}

// Sum of natural numbers
let b = 15;
sum = 0;
for (let i = 0; i < b; i++) {
    sum += (i + 1);
}


// for in loop

let marks1 = {
    Rohit: 65,
    Ashish: 43,
    Punit: 88,
    Mohan: 78
}
for (const key in marks1) {
    console.log(key);               // Print all keys in object
    
}


// for of loop

let marks2 = {
    "Rohit": 65,
    "Ashish": 43,
    "Punit": 88,
    "Mohan": 78
}
for (const value of "Rohit") {
    console.log(value);                     // This is not iterable 
    
}


// while loop

let c = 10
let i = 0;
while (i < c) {
    console.log(i);
    i++;
}


// do while loop

let d = 5;
let index = 0;
do {
    console.log(index);
    
} while (index > a);
