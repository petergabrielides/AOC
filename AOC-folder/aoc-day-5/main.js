import { rules } from "./dataStruct.js";
import { updates } from "./dataStruct.js";

let result = 0;

export const faultyUpdates = [];

for (let i = 0; i < updates.length; i++) {
  const update = updates[i];
  const middleValue = update[Math.floor(update.length / 2)];
  let isCorrect = true;

  update.forEach((num, index) => {
    const tempArray = [];
    
    rules.forEach(rule => {
      if (rule[0] === num) {
        tempArray.push(rule[1]);
      }
    })

    tempArray.forEach(num2 => {
      if (update.includes(num2) && update.indexOf(num2) < index) {
        isCorrect = false;
      }
    })
  })

  if (isCorrect) {
    result += middleValue;
  } else {
    faultyUpdates.push(JSON.parse(JSON.stringify(update)));
  }
}

console.log(result);
