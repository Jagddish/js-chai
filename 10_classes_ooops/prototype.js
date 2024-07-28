let myName = "jagddish   ";

console.log(myName.length);
// create a property like length that will trim and prin the name which will accessable to all string literals
// console.log(myName.trueLength)

let myHeros = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  // add new property to object Object specific means accessible to all bcz it is root
  console.log("hitesh present in all object");
};
// Arrays specific prototype only accessible to arrays
Array.prototype.heyhitesh = function () {
  console.log("Hitesh says hello");
};

// heroPower.hitesh(); //
// myHeros.hitesh();
myHeros.heyhitesh();
// heroPower.heyhitesh();

// inheritance
// Base object
const User = {
  name: "chai",
};

// Teacher object inheriting from User
const teacher = {
  makeVideo: true,
  __proto__: User,
};

// Teaching support object
const teachingSupport = {
  isAvailable: false,
};

// TA Support object inheriting from teachingSupport
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

// another way to setup inheritance for teacher
teacher.__proto__ = User;

// Modern approch
Object.setPrototypeOf(teacher, User); // teacher inherites from user

// Testing inheritance
console.log(teacher.name); // Outputs: chai
console.log(TASupport.isAvailable); // Outputs: false
console.log(TASupport.makeAssignment); // Outputs: JS Assignment
console.log(teacher.makeVideo); // Outputs: true

let getTheLength = "whatismylength   ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`true length is ${this.trim().length}`);
};
getTheLength.trueLength();
"Jagddish  ".trueLength();
