export function quickSort(array, start = 0, end = array.length - 1) {
  if (end - start < 1) {
    return;
  }

  const pivotValues = partition(array, start, end);
  const a = pivotValues[0];
  const b = pivotValues[1];
  const c = pivotValues[2];

  quickSort(array, a, b - 1);
  quickSort(array, b + 1, c);
}

function partition(
  list, 
  start = 0, 
  end = list.length - 1
) {
  const pivotValue = list[end];

  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (list[j] > pivotValue) {
      continue;
    } else {
      i++;
      swapValues(list, i, j);
    }
  }

  swapValues(list, end, i + 1);

  return [start, i + 1, end];
}

export function swapValues(array, index1, index2) {
  const value1 = array[index1];
  const value2 = array[index2];

  array[index1] = value2;
  array[index2] = value1;
}