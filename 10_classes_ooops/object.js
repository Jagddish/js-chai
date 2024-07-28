function multiplyBy5(num) {
  return num * 5;
}
multiplyBy5.power = 2; // add power = 2 into object

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype); // output {} bcz func is obj

function createUser(username, score) {
  this.username = username; // this . used for current context means current func
  this.score = score;
}

createUser.prototype.increment = function () {
  // custome prototype for specific function
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe();
