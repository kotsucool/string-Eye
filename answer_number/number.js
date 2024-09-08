// Number and casting

// ex.1
// input:
// let numA = 50
// let numB = 40
// requirement: Write code numA+numB
// scope: Number operator
// output: 90

// your code here:

let numA = 50
let numB = 40
console.log(numA + numB);

// ex.2
// input:
// let numC = 50
// let numD = "40"
// requirement: Write code numA-numB, Not allow to change numB type
// scope: Casting,Number operator
// output: 10

// your code here:

let numC = 50
let numD = "40"
console.log(numC - numD);


// ex.3
// input:
// let userDeltaRange = 2.3456
// let factorX = 5
// requirement: Write code userDeltaRange * factorX,
// but userDeltaRange must have 2 float digit before * with factorX
// scope: Casting,Number operator,Number method
// output: 11.7

// your code here:

let userDeltaRange = 2.3456
let factorX = 5
console.log((userDeltaRange.toFixed(2) * factorX).toFixed(1));

// ปล. ทำให้เป็น 11.7 ไม่ได้ ยอมแพ้