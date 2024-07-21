const myNums = [1, 2, 3, 4];

// const myTotal = myNums.reduce((acc, curval) => {
//   console.log(`acc: ${acc} and curval: ${curval}`);
//   return acc + curval;
// }, 0);

const myTotal = myNums.reduce((ac, curr) => ac + curr, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const cartTotal = shoppingCart.reduce((ac, item) => ac + item.price, 0);
console.log(cartTotal);
