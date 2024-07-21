const myObj = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
};

for (const key in myObj) {
  // console.log(`${key} shortcut is for ${myObj[key]}`);
}

const arr = ["js", "ruby", "python", "c++"];

for (const k in arr) {
  // console.log(k); // prints index
  // console.log(arr[k]);
}

// for array for-of is better
for (const i of arr) {
}
// const map = new Map();
// map.set("IN", "India");
// map.set("UK", "Uninted Kingdom");
// map.set("Fr", "France");
// map.set("IN", "India");
//
// for (constkey in map) {
//   console.log(key);
// }
