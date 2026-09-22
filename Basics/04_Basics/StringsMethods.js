/**************************** String Methods ****************************/

let name = "Rohit";
console.log(name);
console.log(name.length);               // Property               
console.log(name.toUpperCase());        // Upper Case Function
console.log(name.toLowerCase());        // Lower Case Function
console.log(name.slice(2,4));           // Print from 2 to 4, 4 not included
console.log(name.replace("Ro", "Mo"));  // Replace the String

let lastname = "Kumar";
console.log(name.concat(lastname));     // Add another String

let friend = "  Meena  "
console.log(friend);
console.log(friend.length);

console.log(friend.trim());             // Extra Spaces are deleted
console.log(friend.trim().length);

let friend2 = "Shivansh";
console.log(friend2[0]);            // Print a String


// Quiz

let Study = "Master";
for (let i = 0; i < Study.length; i++) {
    console.log(Study[i]);
}


