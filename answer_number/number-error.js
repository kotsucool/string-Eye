//STRING ERROR//

//exercise 1

// source code:

// let depressValue = 5.4325;
// let cValue = 4;
// let depressTwoDigit = depressValue.toFixed(2);
// let summary = depressTwoDigit + cValue;
// console.log(typeof summary);

// output:String
// expect output:Number
// what cause error occured?
// Answer here📕:

let depressValue = 5.4325;
let cValue = 4;
let depressTwoDigit = (Number(depressValue.toFixed(2)));
let summary = depressTwoDigit + cValue;
console.log(typeof summary);
