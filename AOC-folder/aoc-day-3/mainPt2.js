import { raw } from "./data.js";
import { findString1InString2 } from "./main.js";
import { findMulInstructions, executeMulInstructions } from "./main.js";

const doLocs = findString1InString2('do()', raw);
const dontLocs = findString1InString2("don't()", raw);

function findSwitchLocs() {
  const res = [];

  let state = 'do';

  for (let i = 0; i < raw.length; i++) {
  
    doLocs.forEach(loc => {
      if (loc === i && state === 'dont') {
        state = 'do';
        res.push(loc);
      }
    })
  
    dontLocs.forEach(loc => {
      if (loc === i && state === 'do') {
        state = 'dont';
        res.push(loc);
      }
    })
  }

  return res;
}

const switchLocs = findSwitchLocs();

const intervals = [];

intervals.push([0, switchLocs[0]]);
for (let i = 0; i < switchLocs.length - 1; i++) {
  intervals.push([switchLocs[i], switchLocs[i + 1]]);
}
intervals.push([switchLocs[switchLocs.length - 1], raw.length - 1]);

const enabledIntervals = [];

intervals.forEach((interval, i) => {
  if ((i % 2) === 0) {
    enabledIntervals.push(interval);
  }
});

const enabledStrings = [];

enabledIntervals.forEach(interval => {
  let res = "";
  for (let i = interval[0]; i <= interval[1]; i++) {
    res += raw[i];
  }
  enabledStrings.push(res);
})

let result = 0;

enabledStrings.forEach(str => {
  const a = findMulInstructions(str);
  const res = executeMulInstructions(a, str);
  result += res;
})

console.log(result);


//there is a do() at the very end which isn't being captured... i'm too tired to figure out why, but that's definitely it.