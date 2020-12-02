const { constants } = require("buffer");
const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString("utf-8")
  .split("\n")
  .map((str) => {
    const [, min, max, char, password] = str.match(
      "([0-9]+)-([0-9]+) ([a-z]): ([a-z]+)"
    );

    return [min, max, char, password];
  });

/**
 * Part 1
 */
let goodPasswords = 0;

input.forEach(([min, max, char, password]) => {
  const count = password.split("").filter((x) => x === char).length;
  if (count >= min && count <= max) {
    goodPasswords++;
  }
});

console.log(goodPasswords);

/**
 * Part 2
 */
goodPasswords = 0;

input.forEach(([idx1, idx2, char, password]) => {
  const passwordArr = password.split("");

  if (passwordArr[idx1 - 1] === char && passwordArr[idx2 - 1] !== char) {
    goodPasswords++;
  } else if (passwordArr[idx1 - 1] !== char && passwordArr[idx2 - 1] === char) {
    goodPasswords++;
  }
});

console.log(goodPasswords);
