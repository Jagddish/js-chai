// singleton
// Object.create();

// create a symbol
const mySym = Symbol("mykey1");

// object literals
const jsUser = {
  name: "Jagddish",
  "full name": "jagddish pala",
  age: 20,
  [mySym]: "mykey",
  location: "Tanuku",
  email: "user@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "Sat"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
jsUser.email = "usr@chatgpt.com";

// lock values
// Object.freeze(jsUser);
// jsUser.email = "hitesh@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello jsUser");
};
jsUser.greeting2 = function () {
  console.log(`Hello jsUser, ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
