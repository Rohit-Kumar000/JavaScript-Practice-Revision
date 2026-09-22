/**************************** Practice Set 1 ****************************/

// Q.1 Create a variable of type string and try to add a number to it.


let a = "Rohit";
let b = 2;
console.log(a + b);

// Q.2 Use type of Operator to find the data type of the string in last question.

console.log(typeof (a+b));


// Q.3 Create a const object in javascript. Can you change it to hold a number later?

const Obj1 = {
    name: "Rohit",
    num: 3,
}
Obj1 = 3;            // No this can't be changed
console.log(Obj1);


// Q.4 Try to add a new key to the const object in problem no 3. Were you able to do it.

const Obj2 = {
    name: "Ashish",
    class: 12,
    isPassed: true,
}
Obj2.section = "A";
console.log(Obj2);


// Q.5 Write a JS program to create a word meaning dictionary of 5 words.

const dict = {
    goats: "any of various related animals, as the Rocky Mountain goat.",
    trees: "something resembling a tree in shape, as a clothes tree or a crosstree.",
    men: "Man hopes for peace, but prepares for war.",
    paean: "a song of praise, joy, or triumph.",
    GIF: "a file or image stored in this format.",
}
console.log(dict);