const userEmail = "use@gmail.com";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Dont have user email");
}

false == 0; // true
0 == ""; // true
false == ""; // true

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// true, "0", "false", " ", [], {}, function(){},

// if (userEmail.length === 0 ) {
//   console.log('Array is empty')
// }

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("object is empty");
}

// Nullish coalescing operator (??) : null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 19;
// val1 = undefined ?? 15;
val1 = null ?? 10 ?? 11;
console.log(val1);

const iceTeaPrice = 100;
iceTeaPrice <= 90 ? console.log("less then 90") : console.log("more than 90");
