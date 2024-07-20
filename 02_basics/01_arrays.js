// array

const myArr = [0, 1, 2, 3, 4, 5]; // each item is called element
const myHeros = ["spiderman", "superman", "batman"];

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr[0]);

// array methods

// myArr.push(6); // adds new element to the end of the array
// myArr.push(7);
// myArr.pop(); // remove last value

// myArr.unshift(9); // add start of the array
// myArr.shift(); // just like pop but remove first element

// console.log(myArr.includes(9)); // to check returns true or false
// console.log(myArr.indexOf(2)); // return index number

// const newArr = myArr.join(); // newArr wil be string
//
// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C ", myArr);
