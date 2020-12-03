const fs = require("fs");

const map = fs
  .readFileSync("./input.txt")
  .toString("utf-8")
  .split("\n")
  .map((arr) => arr.split(""));

/**
 * Part one
 */
let x = 0;
let y = 0;
let treesHit = 0;

while (y < map.length) {
  if (map[y][x] === "#") {
    treesHit++;
  }

  if (x + 3 > map[y].length - 1) {
    x = x + 3 - map[y].length;
  } else {
    x = x + 3;
  }
  y = y + 1;
}

console.log(treesHit);

/**
 * Part 2
 */

function checkSlope(right, down) {
  let x = 0;
  let y = 0;
  let treesHit = 0;

  while (y < map.length) {
    if (map[y][x] === "#") {
      treesHit++;
    }

    if (x + right > map[y].length - 1) {
      x = x + right - map[y].length;
    } else {
      x = x + right;
    }
    if (y + down < map.length) {
      y = y + down;
    } else {
      y = map.length;
    }
  }

  return treesHit;
}

console.log(
  checkSlope(1, 1) *
    checkSlope(3, 1) *
    checkSlope(5, 1) *
    checkSlope(7, 1) *
    checkSlope(1, 2)
);
