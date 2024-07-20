// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2) {
  // let result = num1 + num2;
  // return result;
  return num1 + num2;
}

const result = addTwoNumbers(3, 5);
// console.log("results: ", result);

function loginUserMessage(username = "sam") {
  // default value
  // if (!username)
  if (username === undefined) {
    console.log("please enter a username");
  }

  return `${username} just logged in`;
}

// console.log(loginUserMessage("sam"));
// console.log(loginUserMessage("jay"));

function calculateCartPrice(var1, var2, ...num1) {
  return num1;
}
// console.log(calculateCartPrice(29, 20, 400, 500));

const user = {
  username: "sam",
  price: 199,
};

function handleObject(anyobj) {
  console.log(`Username is ${anyobj.username} and price is ${anyobj.price}`);
}

// handleObject(user);
handleObject({ username: "same", price: 300 });

//using array
const myNewArray = [200, 400, 500, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 500]));
