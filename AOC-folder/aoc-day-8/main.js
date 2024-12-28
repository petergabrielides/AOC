import { map } from './data.js';
import { findPairs } from './pairScript.js';

const antennaTypes = [];

map.forEach(line => {
  line.forEach(char => {
    if (char !== '.' && !antennaTypes.includes(char)) {
      antennaTypes.push(char);
    }
  })
})

const antinodesTotal = [];

antennaTypes.forEach(antennaType => {
  const antennae = findAntennae(antennaType);

  const pairs = findPairs(antennae);
  
  const antinodes = findAntinodes(pairs);

  antinodes.forEach(antinode => {
    antinodesTotal.push(antinode);
  })
}) 

representAntinodes(antinodesTotal);

let result = 0;

for (let line in map) {
  for (let char in map[line]) {
    if (map[line][char] === '#') {
      result++;
    }
  }
}

console.log(result);

function findAntennae(str) {
  const res = [];

  for (let y in map) {
    for (let x in map[y]) {
      if (map[y][x] === str) {
        res.push([+y, +x]);
      }
    }
  }

  return res;
}

function findAntinodes(arr) {
  
  const xMax = map[0].length;
  const yMax = map.length;

  const res = [];

  arr.forEach(pair => {
    const y0 = pair[0][0];
    const x0 = pair[0][1];
    const y1 = pair[1][0];
    const x1 = pair[1][1];

    const yDiff = y1 - y0;
    const xDiff = x1 - x0;

    if (
      y0 - yDiff >= 0
      && y0 - yDiff < yMax
      && x0 - xDiff >= 0
      && x0 - xDiff < xMax
    ) {
      res.push([y0 - yDiff, x0 - xDiff])
    }

    if (
      y1 + yDiff >= 0
      && y1 + yDiff < yMax
      && x1 + xDiff >= 0
      && x1 + xDiff < xMax
    ) {
      res.push([y1 + yDiff, x1 + xDiff])
    }
  })

  return res;
}

function representAntinodes(arr) {
  antinodesTotal.forEach(antinode => {
    map[antinode[0]][antinode[1]] = '#';
  })
}

