import { raw } from "./dataRaw.js";

class FileBlock{
  value;
  length;

  constructor(a, b) {
    this.value = a;
    this.length = b;
  }
}

class FreeSpaceBlock{
  value;
  length;
  containing = [];

  constructor(a, b) {
    this.value = a;
    this.length = b;
  }
}

const arr = []; 

for (let i = 0; i < raw.length; i++) {
  
  if (i % 2 === 0 && +raw[i] !== 0) {
    arr.push(new FileBlock(i / 2, +raw[i]));
  }

  if (i % 2 === 1) {
    arr.push(new FreeSpaceBlock('.', +raw[i]))
  }
 
}

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i].value === arr[i + 1].value) {
    arr[i].length += arr[i + 1].length;
    arr.splice(i + 1, 1);
    i--;
  }
}

const a = arr.length % 2 === 0 ? arr.length - 2 : arr.length - 1;

for (let i = a; i > 1; i -= 2) {
  const currentBlock = arr[i];
  const length = currentBlock.length;
  for (let k = 1; k < i; k += 2) {
    const currentFree = arr[k];
    if (currentFree.length >= currentBlock.length) {
      currentFree.containing.push({
        value: currentBlock.value,
        length
      })
      currentFree.length -= length;
      arr.splice(i, 1, new FreeSpaceBlock('.', length))
      break;
    } 
  }
}

const checkSumArr = [];

arr.forEach(block => {
  if (block instanceof FileBlock) {
    for (let i = 0; i < block.length; i++) {
      checkSumArr.push(block.value);
    }    
  }

  if (block instanceof FreeSpaceBlock) {
    block.containing.forEach(innerBlock => {
      for (let i = 0; i < innerBlock.length; i++) {
        checkSumArr.push(innerBlock.value);
      }
    })

    for (let i = 0; i < block.length; i++) {
      checkSumArr.push('.');
    }
  }

})

let result = 0;

checkSumArr.forEach((val, pos) => {
  if (val !== '.') {
    result += val * pos;
  }
})

console.log(result);

