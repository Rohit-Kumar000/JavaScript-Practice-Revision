/**************************** Arrays ****************************/

// Arrays are variable which can hold more than one value.
// Arrays are mutable it can be changed.

let a = [1,2,3,4,5,null,"Rohit",false];
console.log(a);
console.log(a[5]);
console.log(a.length);
console.log(a[5] = 12);     // Changing new value to the Array 
console.log(a[9] = 34);     // Adding new value to the Array
console.log(typeof a);

// Quiz

let b =[23,4,6,34,12,"Rohit",null,false];
for (let i = 0; i < b.length; i++) {
    console.log(b[i]);
    
}