// Primitive

// 7 types : String , Number , Boolean , null , undefined, Symbol, BigInt

// js is Dynamically typed language

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("234");
const anotherId = Symbol("234");

console.log(id === anotherId);

const bigNumber = 3456343455454534545n;
console.log(typeof bigNumber);

// Reference type (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "jagddish",
  age: 20,
};

const myFunction = function () {
  console.log("Hello world");
};
// https://262.ecma-international.org/5.1/#sec-11.4.3
