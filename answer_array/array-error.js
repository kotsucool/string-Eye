//ARRAY ERROR//

//exercise 1

// source code:

// const nameArr = ["Tommy", "Micky", "Newton", "Yoyo", "Bobo"];
// nameArr.push("lisa");
// console.log(nameArr);

// output: [ 'Tommy', 'Micky', 'Newton', 'Yoyo', 'Bobo', 'lisa' ]
// expect output: ["Tommy", "Micky", "Newton", "Yoyo"]
// what cause error occured?
// Answer here📕:

const nameArr = ["Tommy", "Micky", "Newton", "Yoyo", "Bobo"];
nameArr.push("lisa");
nameArr.splice(4);
console.log(nameArr);

//--------------------------------------------------------------//

//exercise 2

// const userIdArr = [
//   "5d2111a3-e38d-448c-977c-3c22ee5b91ac",
//   "09b79aa3-e76b-4840-ac84-a48336b643ad",
//   "efe44791-e8a9-49a0-9aad-21969af2716d",
//   "94ce3b86-325a-46b3-b3f7-6071d8b3e651",
//   "783235b5-b991-44f5-a75d-2968a04e555a",
// ];

// const length = 5;
// const lastElement = userIdArr[length];
// console.log(lastElement);

// output: undefined
// expect output: 94ce3b86-325a-46b3-b3f7-6071d8b3e651
// what cause error occured?
// Answer here📕:

const userIdArr = [
    "5d2111a3-e38d-448c-977c-3c22ee5b91ac",
    "09b79aa3-e76b-4840-ac84-a48336b643ad",
    "efe44791-e8a9-49a0-9aad-21969af2716d",
    "94ce3b86-325a-46b3-b3f7-6071d8b3e651",
    "783235b5-b991-44f5-a75d-2968a04e555a",
  ];
  
  const length = 3;
  const lastElement = userIdArr[length];
  console.log(lastElement);
