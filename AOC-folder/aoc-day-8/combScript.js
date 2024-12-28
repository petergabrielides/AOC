import { findPairs } from './pairScript.js';

export function findCombsLenN(arr, n) {
  const res = [];

  const pairs = findPairs(arr);

  makeNextCombos(arr, pairs, res, n);

  return res;
}

// RECORD THIS ONE! maybe need to do some testing but this is the idea

function makeNextCombos(arrOrig, k, arrIn = arrOrig, arrOut = []) {
  const j = arrIn[0].length;

  if (j === k) {
    arrIn.forEach(arr => {
      arrOut.push(arr);
    })
    return;
  }

  const arrNew = [];

  for (let i = 0; i < arrOrig.length; i++) {
    arrIn.forEach(arr => {
      if (arrOrig.indexOf(arr[0]) > i) {
        arrNew.push([arrOrig[i], ...arr]);
      }
    })
  }

  makeNextCombos(arrOrig, k, arrNew, arrOut);

  return arrOut;
}

