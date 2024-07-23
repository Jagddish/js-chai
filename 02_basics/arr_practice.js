// create array
const arryOne = [1, 2, 3, 4, 5];
const arryTwo = ["apple", "orange", "mango"];

console.log(arryOne);
// push unshift pop shift from of concat spread slice splice flat
// join includes toString length

// arryOne.push(6); // add element to last
// arryOne.unshift(0); // add element to start

// console.log(arryOne);

// arryOne.shift(); // remove first element
// arryOne.pop(); // remove last element

// console.log(arryOne);

const spread_arr = [...arryOne, ...arryTwo];
const concat_arr = arryOne.concat(arryTwo); // spread and concat same
console.log(spread_arr); // combine both arr this is diff then push shift

const another = arryTwo;

// another.push("grape"); // add element to new array also referenced array
// another.unshift("avacado");

// console.log(another);
// console.log(arryTwo);

// another.shift();
// another.pop();

// console.log(another);
// console.log(arryTwo);

// const slice_arr = another.slice(0, 2);
// console.log(another);
// console.log(slice_arr);

const splice_arr = another.splice(0, 2);

console.log(another);
console.log(splice_arr);

console.log(Array.from("jagddish")); // create shallow copied array

console.log(Array.of("foo", 2, "bar")); // creates a new array u can give variables too

const sub_arr = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
console.log(sub_arr.flat(Infinity)); // combine sub array
