// create object using singleton
const obj = new Object();

// create object using literals
// a literal is a notation for representing  a fixed value in source code.
const newObj = {
  name: "sam",
  age: 23,
  city: "hyd",
};

// how to access each value of objs
console.log(newObj.name); // using obj.key

// create obj using constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// creating instance of that obj
const person1 = new Person("alice", 20);

// create obj using ES6 classes
class Customer {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const customer = new Customer("shan", 40);
console.log(customer);

// Methods for Objs

// return keys in an array
console.log(Object.keys(customer));

// return values in an array
console.log(Object.values(person1));

// return an array of each key-pair
console.log(Object.entries(customer));

// copies properties with latest one no duplicates
const merged = Object.assign({}, newObj, person1);
console.log(merged);

// freeze an obj
Object.freeze(newObj);

// obj inside obj
const user = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "luke",
      lastname: "mountain",
    },
  },
};

console.log(user.fullname.userfullname.firstname);

// combining objs
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 1: "c", 4: "d" };

//
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

// using spread
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// array of objecsts
const users = [
  { name: "user1", age: 20 },
  { name: "user2", age: 21 },
  { name: "user3", age: 24 },
];

// this is easier since we're dealing with arrays
// you can use forEach or for-of

// foreach
users.forEach((element) => console.log(element.name));

for (let user of users) {
  console.log(user.age);
}
const arrow = (param) => console.log(param);

arrow("hello world");
