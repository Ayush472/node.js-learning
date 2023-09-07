const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");

const second = readFileSync("./content/Second.txt", "utf8");
console.log(first, second);

writeFileSync(
  "./content/third.txt",
  `Here is  the Result : ${second} ${first}`,
  { flag: "a" }
);
