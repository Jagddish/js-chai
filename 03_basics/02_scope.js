var c = 300;
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "john";
  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);
  two();
}

// one();

// if (true) {
//   const username = "lorem";
//   if (username === "lorem") {
//     const website = " Youtube";
//     console.log(username + website);
//   }
// }

// +++++++ interesting ++++++++

function addone(value) {
  return value + 1;
}
addone(5);

const addTwo = function (num) {
  return num + 2;
};

console.log(addTwo(5));
