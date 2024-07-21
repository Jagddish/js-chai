// if
const isUserloggedIn = true;
const temperature = 41;

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200;
//
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }
//
// const balance = 1000;
//
// if (balance > 500) console.log("test");
//
// if (balance < 500) {
//   console.log("less than");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("lles than 900");
// } else {
//   console.log("less then 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
// logical operators
// && operator
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
}
// OR || operator
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}
