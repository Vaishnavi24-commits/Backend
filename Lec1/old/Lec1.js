const {sum,subtract} = require("./second");

sum(3,4) // ye run nhi hoga without export 
subtract(7,8)
console.log("Hello Vaishnavi");

//if we want to run Lec and second.js together as 
//we need second.js code in first.js

//This we wrote CJS : Common JS module

console.log(module.exports); // this is a {} object

