import { rows, columns, diagonalsDown, diagonalsUp } from './dataStruct.js';

function lookForXmas(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 'X' 
      && arr[i + 1] === 'M'
      && arr[i + 2] === 'A'
      && arr[i + 3] === 'S'
    ) {
      res++;
    }
  }

  return res;
}

function lookForSamx(arr) {
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === 'S'
      && arr[i + 1] === 'A'
      && arr[i + 2] === 'M'
      && arr[i + 3] === 'X'
    ) {
      res++;
    }
  }

  return res;
}

let result = 0;

rows.forEach(row => {
  result += lookForXmas(row);
});
rows.forEach(row => {
  result += lookForSamx(row);
});
columns.forEach(column => {
  result += lookForXmas(column);
})
columns.forEach(column => {
  result += lookForSamx(column);
})
diagonalsUp.forEach(diagonal => {
  result += lookForXmas(diagonal);
})
diagonalsUp.forEach(diagonal => {
  result += lookForSamx(diagonal);
})
diagonalsDown.forEach(diagonal => {
  result += lookForXmas(diagonal);
})
diagonalsDown.forEach(diagonal => {
  result += lookForSamx(diagonal);
})

console.log(result);