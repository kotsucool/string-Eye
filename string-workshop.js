// String

// ex.1
// input: let x = " username007xza "
// requirement: None
// scope:String method
// output: "username007xza"

// your code here:
let x = "username007xza";
console.log(x);

//------------------------------------//

// ex.2
// input: "Bob,John,Noi,Por,Au,Aim,"
// requirement: None
// scope: String method
// output: "Noi"

// your code here:
let y = "Bob,John,Noi,Por,Au,Aim"
let name = y.split(",");
console.log(name[2]);

//------------------------------------//

// ex.3
// input:
// let firstName = "John"
// let lastName = "Doe"
// requirement: not allow + for do string concatenation(ต่อสตริง)
// scope: String concatenation
// output: My first name is John my last name is Doe

// your code here:
let firstName = "John"
let lastName = "Doe"
console.log(`My first name is ${firstName} my lastname is ${lastName}`);


