// object literal
const user = {
  username: "Jagddish",
  loginCount: 8,
  signedIn: true,
  getUserDetails: function () {
    console.log("Got user details from DB");
  },
};

console.log(user.getUserDetails());

// this is not ES6 approve
function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = () => console.log(`Welcome ${this.username}`);
  //NOTE:  // return this; this is will implicitly retuned by default
}
// NOTE: new is a constructor func means it creates new instance of func
const userOne = new User("jagddish", 12, true);
const userTwo = new User("ramesh", 1, true);

console.log(userOne);
console.log(userTwo);
