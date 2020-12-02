const fs = require("fs");

const inputBuffer = fs.readFileSync("./input.txt");

const input = inputBuffer
  .toString("utf-8")
  .split("\n")
  .map((numberString) => Number(numberString));

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
loop1: for (const num1 of input) {
  for (const num2 of input) {
    const num1PlusNum2 = num1 + num2;
    if (num1PlusNum2 < 2020) {
      for (const num3 of input) {
        if (num1PlusNum2 + num3 === 2020) {
          console.log(num1 * num2 * num3);
          break loop1;
        }
      }
    }
  }
}
