const name = "Jagddish";
const repoCount = 10;

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc");

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // return char
console.log(gameName.indexOf("t")); // return index number

const newString = gameName.substring(0, 4); // last number not included

const anotherString = gameName.slice(-8, 4); // accepts negative values
console.log(anotherString);

const newstringOne = "   hitesh  ";
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudary";
console.log(url.replace("%20", "-"));

console.log(url.includes("hitesh"));

console.log(gameName.split("-")); // turns into array
