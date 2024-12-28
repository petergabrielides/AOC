import { rows, columns, diagonalsDown, diagonalsUp } from "./dataStruct.js";

function findMasUp() {
  const res = [];

  rows.forEach((row, loc) => {
    for (let i = 0; i < row.length; i++) {
      if (
        row[i] === 'M'
        && rows[loc - 1]
        && rows[loc - 1][i + 1] === 'A'
        && rows[loc - 2]
        && rows[loc - 2][i + 2] === 'S'
      ) {
        res.push([loc, i])
      }
    }
  })

  return res;
}

function findMasDown() {
  const res = [];

  rows.forEach((row, loc) => {
    for (let i = 0; i < row.length; i++) {
      if (
        row[i] === 'M'
        && rows[loc + 1]
        && rows[loc + 1][i + 1] === 'A'
        && rows[loc + 2]
        && rows[loc + 2][i + 2] === 'S'
      ) {
        res.push([loc, i])
      }
    }
  })

  return res;
}

function findSamUp() {
  const res = [];

  rows.forEach((row, loc) => {
    for (let i = 0; i < row.length; i++) {
      if (
        row[i] === 'S'
        && rows[loc - 1]
        && rows[loc - 1][i + 1] === 'A'
        && rows[loc - 2]
        && rows[loc - 2][i + 2] === 'M'
      ) {
        res.push([loc, i])
      }
    }
  })

  return res;
}

function findSamDown() {
  const res = [];

  rows.forEach((row, loc) => {
    for (let i = 0; i < row.length; i++) {
      if (
        row[i] === 'S'
        && rows[loc + 1]
        && rows[loc + 1][i + 1] === 'A'
        && rows[loc + 2]
        && rows[loc + 2][i + 2] === 'M'
      ) {
        res.push([loc, i])
      }
    }
  })

  return res;
}

function deepIncludes(arr1, arr2) {
  let res = false;

  const arr1C = JSON.stringify(arr1);

  arr2.forEach(val => {
    if (JSON.stringify(val) === arr1C) {
      res = true;
    }
  })

  return res;
}

const masUpLocs = findMasUp();
const masDownLocs = findMasDown();
const samUpLocs = findSamUp();
const samDownLocs = findSamDown();

let result = 0;

masDownLocs.forEach(loc => {
  if (deepIncludes([loc[0] + 2, loc[1]], masUpLocs)) {
    result++;
  }

  if (deepIncludes([loc[0] + 2, loc[1]], samUpLocs)) {
    result++;
  }
});

samDownLocs.forEach(loc => {
  if (deepIncludes([loc[0] + 2, loc[1]], masUpLocs)) {
    result++;
  }

  if (deepIncludes([loc[0] + 2, loc[1]], samUpLocs)) { 
    result++;
  }
});

console.log(result);
