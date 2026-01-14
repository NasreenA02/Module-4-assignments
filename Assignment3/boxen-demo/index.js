const boxen = require("boxen");

// message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// 1. Classic (default style)
const classicBox = boxen(message, {
  title: title,
  titleAlignment: "center",
});

// 2. SingleDouble style
const singleDoubleBox = boxen(message, {
  title: title,
  titleAlignment: "center",
  borderStyle: "singleDouble",
});

// 3. Round style
const roundBox = boxen(message, {
  title: title,
  titleAlignment: "center",
  borderStyle: "round",
});

// print all boxes
console.log(classicBox);
console.log("\n");
console.log(singleDoubleBox);
console.log("\n");
console.log(roundBox);
