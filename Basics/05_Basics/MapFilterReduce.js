/**************************** Maps ****************************/

let a = [23,5,43,12,45];
let b = a.map((value,index,array) => {          // Map 
    // console.log(value,index,array);
    return value + index;
});
// console.log(b);                             // Original array are not changed


let a1 = [45,6,3245,57,4,12,56,76];
let b1 = a1.filter((value) => {                 // filter
    return value>20;
})
// console.log(b1);                            // Original array are not changed


let a2 = [43,23,12,44,22,56];
let b2 = a2.reduce((value,index) => {           // reduce
    return value + index;
})
// console.log(b2);
