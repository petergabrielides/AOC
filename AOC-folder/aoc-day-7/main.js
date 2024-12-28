import { equationNums } from "./data.js";
import { permOfFixedLength } from "./permScript.js";

const opChars = [`+`, `*`, `||`];

let result = 0;

function evaluateEquation(arr) {
  const nums = arr.slice(1);
  const output = arr[0];
  const opLocs = nums.length - 1;
  const opPerms = permOfFixedLength(opChars, opLocs);

  let hasSolution = false;

  opPerms.forEach(opSet => {
    let res;

    for (let i = 0; i < opLocs; i++) {
      if (i === 0) {
        res = nums[0];
      }
      res = processTerms(res, opSet[i], nums[i + 1]);
    }

    if (res === output) {
      hasSolution = true;
    }
  })

  if (hasSolution) {
    result += output;
  }
}

function processTerms(term1, op, term2) {
  if (op === '+') {
    const a = term1 + term2;
    return a;
  }

  if (op === '*') {
    const a = term1 * term2;
    return a;
  }

  if (op === '||') {
    const a = parseInt('' + term1 + term2);
    return a;
  }
}

equationNums.forEach(equation => {
  evaluateEquation(equation);
})

console.log(result);