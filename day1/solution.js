const fs = require("fs");

const input = fs
  .readFileSync("./input.txt")
  .toString("utf-8")
  .split("\n")
  .map((s) => Number(s));

/**
 * Part one
 */
loop1: for (const num1 of input) {
  for (const num2 of input) {
    if (num1 + num2 === 2020) {
      console.log(num1 * num2);
      break loop1;
    }
  }
}

/**
 * Part two
 */
loop2: for (const num1 of input) {
  for (const num2 of input) {
    const sum = num1 + num2;
    if (sum < 2020) {
      for (const num3 of input) {
        if (sum + num3 === 2020) {
          console.log(num1 * num2 * num3);
          break loop2;
        }
      }
    }
  }
}
