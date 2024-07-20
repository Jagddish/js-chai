const accountId = 144553;
let accountEmail = "jagddish2@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accouontId = 2; // not allowed

accountEmail = "hc@hc.com";
accountPassword = "43231";
accountCity = "Bengaluru";

/*
Prefered not to use var 
because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
