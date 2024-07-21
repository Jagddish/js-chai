const coding = ["js", "ruby", "java", "python"];

coding.forEach(function (item) {
  // console.log(item);
});

// coding.forEach((e) => console.log(e));

function printMe(item) {
  console.log(item);
}

// coding.forEach(printMe);

// forEach return element, index, arr
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const mycoding = [
  {
    languageName: "javascript",
    languagefile: "js",
  },
  {
    languageName: "java",
    languagefile: "java",
  },
  {
    languageName: "python",
    languagefile: "py",
  },
];

mycoding.forEach((item) => {
  console.log(item.languageName);
});
