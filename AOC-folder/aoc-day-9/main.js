import { raw as rawStr } from 'dataRaw.js';

const raw = [rawStr];

//the above line of text is stupid - i initially thought the input would be many lines of compressed data, but it is infact one long line of compressed data. i therefore wrote the code to operate on an array of strings, so this first step was necessary.

const decompression = [];

for (let map of raw) {
  const res = [];

  let fileId = 0;
  let fileBlockIndex = 0;
  let freeSpaceIndex = 0;

  for (let i = 0; i < map.length; i++) {
    const val = +map[i];

    if (i % 2 === 0) {
      for (let j = 0; j < val; j++) {
        res.push([fileId, fileBlockIndex]);
        fileBlockIndex++;
      }
      fileId++;
    } else {
      for (let j = 0; j < val; j++) {
        res.push(['.', freeSpaceIndex])
        freeSpaceIndex++;
      }
    }
  }

  res.forEach(val => {
    if (typeof val[0] === 'number') {
      val[1] = fileBlockIndex - 1 - val[1];
    }
  });

  for (let i = 0; i < res.length; i++) {
    if (!checkForGaps(res)) {
      break;
    }

    const j = findFreeSpaceByFSI(res, i);
    const k = findFileBlockByFBI(res, i);

    const a = res[k][0];
    res[j][0] = a;
    res[k][1] = 'swap';
  }

  res.forEach(val => {
    if (val[1] === 'swap') {
      val[0] = '.';
    }
  })

  decompression.push(res);
}

const checkSums = [];

decompression.forEach(map => {
  const arr = [];

  for (let i = 0; i < map.length; i++) {
    if (map[i][0] !== '.') {
      arr.push(map[i][0]);
    } else {
      break;
    }
  }

  checkSums.push(arr);
})

let result = 0

checkSums.forEach(checkSum => {
  let res = 0;

  for (let i = 0; i < checkSum.length; i++) {
    res += i * checkSum[i];
  }

  result += res;
})

console.log(result);

function checkForGaps(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === '.') {
      for (let k = i; k < arr.length; k++) {
        if (arr[k][0] !== '.' && arr[k][1] !== 'swap') {
          return true;
        }
      }
      return false;
    }
  }
}

function findFreeSpaceByFSI(arr, fsi) {
  let res;

  arr.forEach((val, index) => {
    if (val[0] === '.' && val[1] === fsi) {
      res = index;
    }
  })

  return res;
}

function findFileBlockByFBI(arr, fbi) {
  let res;

  arr.forEach((val, index) => {
    if (val[0] !== '.' && val[1] === fbi) {
      res = index;
    }
  })

  return res;
}