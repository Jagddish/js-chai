const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1)); // 100.0 how many decimals

const otherNumber = 23.8966;

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN"));

// ++++++++++ Maths +++++++

// console.log(Math);
// console.log(Math.abs(-4)); // negative into positive
// console.log(Math.round(4.3)); // rounded mostly used
// console.log(Math.ceil(4.2)); // upper value 5
// console.log(Math.floor(4.9)); // lower value 4
// console.log(Math.min(3, 4, 6));
// console.log(Math.max(4, 5, 6, 7));

console.log(Math.random()); // 0, 1 range mostly decimals
console.log(Math.random() * 10 + 1); // make sure min 1
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
