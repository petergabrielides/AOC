import { reports } from "./data.js";

let result = 0;

reports.forEach(report => {
  let a = 0;

  report.forEach((value, i) => {
    const testArr = [];
    report.forEach((b, j) => {
      if (j !== i) {
        testArr.push(b);
      }
    });
    if (evaluateReport(testArr)) {
      a = 1;
    }
  });

  result += a;
});

console.log(result);

function evaluateReport(report) {
  let dir;
  let dirBool = true;
  let maxInterval = 0;

  if (report[0] < report[1]) {
    dir = 1;
  }

  if (report[0] > report[1]) {
    dir = -1;
  }

  if (report[0] === report[1]){
    dir = 0;
  }

  for (let i = 0; i < report.length; i++) {
    if (i === report.length - 1) {
      break;
    }

    if (dir === 1 && report[i] >= report[i + 1]) {
      dirBool = false;
    }

    if (dir === -1 && report[i] <= report[i + 1]) {
      dirBool = false;
    }

    if (dir === 0) {
      dirBool = false;
    }
  }

  for (let i = 0; i < report.length; i++) {
    if (i === report.length - 1) {
      break;
    }

    const interval = Math.abs(report[i + 1] - report[i]);
    
    if (interval > maxInterval) {
      maxInterval = interval;
    }
  }

  if (dirBool && maxInterval <= 3) {
    return true;
  } else {
    return false;
  }
}