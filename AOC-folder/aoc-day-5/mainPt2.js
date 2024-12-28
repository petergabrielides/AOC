import { faultyUpdates } from "./main.js";
import { rules } from "./dataStruct.js";
import { quickSort, swapValues } from "../aoc-day-1/quicksort.js";

const rulesByFirstNum = []

for (let i = 0; i < 100; i++) {
  const temp = [i];

  rules.forEach(rule => {
    if (rule[1] === i) {
      temp.push(rule[0]);
    }
  })

  if (temp.length > 1) {
    rulesByFirstNum.push(temp);
  }
}

rulesByFirstNum.forEach(rule => {
  quickSort(rule, 1);
})

//this is the list of numbers that cannot come AFTER a number.

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

function checkForViolationsAndSwap(update, rule) {
  update.forEach((num, index) => {
    if (num === rule[0]) {
      rule.forEach(num2 => {
        if (update.includes(num2) && index < update.indexOf(num2)) {
          swapValues(update, index, update.indexOf(num2));
        }
      })
    }
  }) 
}

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});

faultyUpdates.forEach(update => {
  rules.forEach(rule => {
    checkForViolationsAndSwap(update, rule);
  })
});



let result = 0;

faultyUpdates.forEach(update => {
  result += update[Math.floor(update.length / 2)];
})

console.log(result);