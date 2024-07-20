// immediately invoked function expression

(function chai() {
  // named IIFE
  console.log("DB CONNECTED");
})();

((name) => {
  console.log(`hello ${name}`);
})("sam");
