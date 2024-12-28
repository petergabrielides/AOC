import { map } from "./data.js";

//if 1, calc new value, then if on map move up and replace last loc with X, then +1; if 2, calc new value, then if on map move right and replace last loc with X, then +1; if 3, calc new value, then if on map move down and replace last loc with X, then +1; if 4, calc new value, then if on map move left and replace last loc with X, then -3; 

//while 

let a;
let b;

for (let row of map) {
  for (let square of row) {
    if (square === '^') {
      a = map.indexOf(row);
      b = row.indexOf(square);
    }
  }
}

export const guardState = {
  type: 1,
  loc: [a, b],
  locAhead: [a - 1, b],
  lastXEntered: [undefined],
  infiniteLoop: false
}

export function resetGuardState () {
  guardState.type = 1;
  guardState.loc = [a, b];
  guardState.locAhead = [a - 1, b];
  guardState.lastXEntered = undefined;
  guardState.infiniteLoop = false;
}