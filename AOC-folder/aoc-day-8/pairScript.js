//given an array arr, return an array of every combination with length n

export function findPairs(arr) {
  const res = [];

  makePairs(arr, res);

  return res;
}

function makePairs(arrIn, arrOut) {
  if (arrIn.length === 1) {
    return;
  }

  for (let i = 1; i < arrIn.length; i++) {
    arrOut.push([arrIn[0], arrIn[i]]);
  }
  
  makePairs(arrIn.slice(1), arrOut);
}