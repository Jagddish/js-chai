// for loop

for (let i = 1; i < 10; i++) {
  // console.log(`outer loop value: ${i}`);
  for (let x = 1; x < 10; x++) {
    // console.log(i + "*" + x + " = " + i * x);
    // console.log(`innerloop : ${x}`);
  }
}

let myArr = ["flash", "batman", "superman"];

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  // console.log(element);
}

// break and continue

// for (let index = 0; index <= 20; index++) {
//   if (index == 5) {
//     console.log("Detected 5");
//     break;
//   }
//   console.log(`value of index is ${index}`);
// }

for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of index is ${index}`);
}
