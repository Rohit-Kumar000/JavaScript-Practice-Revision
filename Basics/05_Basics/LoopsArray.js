/**************************** Loops in Arrays ****************************/

let a = [23,12,3,65,78];

for (let i = 0; i < a.length; i++) {
    // console.log(a[i]);
}

a.forEach((element) => {
    // console.log(element*element);           // forEach loop statement
    
});

let name = "Rohit";
// console.log(name);

let name1 = Array.from(name);               // Convert to Array 
// console.log(name1);

let y = [23,43,3,56,6];

for (const key of y) {
//    console.log(key);  
}

for (const key in y) {
//    console.log(y[key]);  
}