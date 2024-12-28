import { raw } from "./data.js";

const instructions = findMulInstructions(raw);
const result = executeMulInstructions(instructions, raw);
//console.log(result);

function checkIfCharIsNumber(str, i) { 
  if (parseInt(str[i]) === 0 || parseInt(str[i])) {
    return true;
  } else {
    return false;
  }
}

function findNumberLength(str, start) {
  let i = start;

  while (checkIfCharIsNumber(str, i)) {
    i++;
  }

  return i - start;
}

export function findString1InString2(str1, str2) {
  const arr = [];

  for (let i = 0; i < str2.length - str1.length; i++) {
    let k = i;
    let runIsEqual = true;

    for (let j = 0; j < str1.length; j++) { 
      if (str1[j] !== str2[k]) {
        runIsEqual = false;
        break;
      }
      k++;
    }

    if (runIsEqual) {
      arr.push(i);
    }
  }

  return arr;
}

export function findMulInstructions(arr) {
  const possibleInstructions = findString1InString2('mul(', arr);

  const realInstructions = [];

  for (let i = 0; i < possibleInstructions.length; i++) {
    const loc = possibleInstructions[i];
    const num1Loc = loc + 4;

    let num1Length;

    if (checkIfCharIsNumber(arr, num1Loc)) {
      num1Length = findNumberLength(arr, num1Loc);
    } else {
      continue;
    }

    const commaLoc = num1Loc + num1Length;
    const num2Loc = commaLoc + 1;

    if (arr[commaLoc] !== ',') {
      continue;
    }

    let num2Length;

    if (checkIfCharIsNumber(arr, num2Loc)) {
      num2Length = findNumberLength(arr, num2Loc);
    } else {
      continue;
    }

    const closeLoc = num2Loc + num2Length;

    if (arr[closeLoc] === ')') {
      realInstructions.push({
        num1: [num1Loc, num1Length],
        num2: [num2Loc, num2Length]
      });
    }
  }

  return realInstructions;
}

export function executeMulInstructions(instructions, srcStr) {
  let res = 0

  instructions.forEach(instruction => {
    const num1Loc = instruction.num1[0];
    const num1Length = instruction.num1[1];
    const num2Loc = instruction.num2[0];
    const num2Length = instruction.num2[1];
  
    let num1Str = '';
    let num2Str = '';
    
    for (let i = num1Loc; i < num1Loc + num1Length; i++) {
      num1Str += srcStr[i];
    }
  
    for (let i = num2Loc; i < num2Loc + num2Length; i++) {
      num2Str += srcStr[i];
    }
  
    const num1 = parseInt(num1Str);
    const num2 = parseInt(num2Str);
  
    res += num1 * num2;
  });

  return res;
}

