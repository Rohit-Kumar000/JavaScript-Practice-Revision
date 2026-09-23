/**************************** Practice Set 5 ****************************/


// Q.1 Create an array of numbers and take input from the user to add numbers to this array.

/*
let a1 = [23,43,21,12,55,45];
let a2 = a1.push(4);
console.log(a1);
*/

// Q.2 Keep adding numbers to the array in Q.1 until 0 is added to the array.

/*
let a1 = [23,43,21,12,55,45];
let a2;
do {
    a2 = 0;
    a1.push(a2)
} while (a2 != 0);
console.log(a1);
*/

// Q.3 Filter for numbers divisible by 10 from a given array.

/*
let arr = [12,43,14,60,44,68,31,70,10];
let b = arr.filter((value) => {
    return value % 10 == 0;
})
console.log(b);
*/


// Q.4 Create an array of square of given numbers.

/*
let arr = [12,43,14,60,44,68,31,70,10];
let b = arr.map((value) => {
    return value * value;
});
console.log(b);
*/

// Q.5 Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).

/*
let arr = [1,2,3,4,5,6,7,8];
let b = arr.reduce((value,value1) => {
    return value * value1;
});
console.log(b);
*/