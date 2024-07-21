// for of array specific

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world";

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("UK", "Uninted Kingdom");
map.set("Fr", "France");
map.set("IN", "India");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":-", value);
}

const myobj = {
  game: "NFS",
  game2: "GTA5",
};

// for (const [key, value] of myobj) {
//   console.log(key, value)
//
// }
