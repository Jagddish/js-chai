const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// below both methods works the same  concat and spread
let allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(allHeros);

// combine sub arrays into one
const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];
const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("jagddish"));
console.log(Array.from("jagddish")); // converts to array

console.log(Array.from({ name: "jagddish" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
