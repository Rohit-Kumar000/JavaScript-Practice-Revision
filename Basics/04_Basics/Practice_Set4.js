/**************************** Practice Set 4 ****************************/

// Q.1 What will the following print in JavaScript Console.log("har\"".length)

console.log("har\"".length)


// Q.2 Explore the includes, starts With & ends With function of a string.

let icecream = "The vanila flavour icecream is available";
let flavour = "vanila";
console.log(`The word "${flavour}" ${icecream.includes(flavour) ? "is" : "is not" } in the sentence `);



// Q.3 Write a program to Convert a given string to lowercase.

let char = "Shubhanshu";
console.log(char.toLowerCase());



// Q.4 Extract the amount out of this string "Please give Rs 1000".

let str = "Please give Rs 1000";
console.log(str.slice("Please give Rs ".length));


// Q.5 Try to change 4th Character of a given String Were you able to do it?

let str2 = "Mohan";
Mohan[4] = "t";
console.log(str2);          // It cannot be changed bcz String is immutable
