//// block scope variable /////
let y = "User1";
const z = 0;
///////////////////////////////

//// string ///////////

let str = "KriTtaPas";
// console.log(str);
let Upper = str.toUpperCase(); // upper case
let Lower = str.toLowerCase(); // lower case
let trim = str.trim(); // trim blank space
let namePool = "A,B,C,D,E";
let name = namePool.split(",");
//console.log(name[0]);
let token = "Bearer=12312u091u2ujr102r1ru90192";
let filter = token.split("=");
//console.log(filter[1]);
let username = "User1";
let password = "Password1";
// console.log("My username is: " + username + " my password is: " + password);
// console.log(`My username is : ${username} my password is ${password}`);

/////////////////////////////////////////

////// number ////////////

let numA = 2;
let numB = 4;

// console.log(numA + numB);
// console.log(numA - numB);
// console.log(numA * numB);
// console.log(numA / numB);
// console.log(numA % numB);
// console.log(numA ** numB);

let numC = 19.5456;
let neg = -26;
// console.log(Math.floor(numC));
// console.log(Math.ceil(numC));
// console.log(Math.abs(neg));
// console.log(Number(numC.toFixed(2)));
// console.log(String(neg));

/////////////////////////////////////////

///// boolean //////

//falsy ?

let nx = null;
let fx = false;
let ux = undefined;
let zx = 0;
let score = 0;

/////////////////////////////////////

/// array ////

let letterArray = ["A", "B", "C", "D", "E", "F"];
// letterArray.push("G");
// letterArray.pop();
// letterArray.unshift("I");
// letterArray.shift();

///////////////////////////////////////

/// Object ///

let userObject = { name: "Krittapas", age: 20, balance: 25000 };
// console.log(userObject.balance);
// console.log(userObject["name"]);
let keys = Object.keys(userObject);
let values = Object.values(userObject);
// console.log(keys);
// console.log(values);

///////////////////////////////////

// function //

function SumNumber(x, y) {
  return x + y;
}
// console.log(SumNumber(5, 10));
const FuncLog = () => {
  console.log("Function has been call");
};
const MinusNumber = (x, y) => {
  //   FuncLog();
  return x - y;
};
const DivideNumber = (x, y) => x / y;
console.log(MinusNumber(10, 2));

/////////////////////////////////////

//// conditions statement ////
let age = 0;
if ((age !== 18 && age) || age) {
  //   console.log("not allow");
} else {
  //   console.log("allow");
}
if (!age) {
  //   console.log("This is true");
}
let x = "G";
const switchObj = { G: "This is G" };
// console.log(switchObj[x]);

let ServerStatus;
let userTraffic = 4000;
ServerStatus = userTraffic >= 5000 ? "busy" : "good";
// console.log(ServerStatus);

//////////////////////////

/// Loop ///

// for (let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }
//let count = 0;
// while (count < 5) {
//   console.log(count + 1);
//   count++;
// }

// do {
//   console.log(count + 1);
//   count++;
// } while (count < 5);

const numArr = [1, 2, 3, 4, 5, 6];

numArr.map((v, i) => {
  //   console.log(v);
});
