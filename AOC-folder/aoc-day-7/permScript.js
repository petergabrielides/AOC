export function permOfFixedLength(set, n) {
  const perms = [];

  addNextElement(set, [], perms, n);

  return perms;
}

function addNextElement(set, arrIn, arrOut, k) {
  
  for (let i = 0; i < set.length; i++) {
    if (k === 0) {
      arrOut.push(arrIn);
      return;
    }

    const newArr = [...arrIn, set[i]];
    addNextElement(set, newArr, arrOut, k - 1);
  }
}