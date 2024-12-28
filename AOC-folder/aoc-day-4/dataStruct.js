import { data } from "./data.js";

export const rows = [];

data.forEach(row => {
  const res = [];

  for (let i = 0; i < row.length; i++) {
    res.push(row[i]);
  }

  rows.push(res);
})

export const columns = [];

for (let i = 0; i < rows[0].length; i++) {
  const res = [];

  rows.forEach(row => {
    res.push(row[i]);
  })

  columns.push(res);
}

export const diagonalsDown = [];

for (let i = 0; i < rows.length; i++) {
  const res = [];

  for (let k = 0; k < rows.length - i; k++) {
    res.push(rows[i + k][k]);
  }

  diagonalsDown.push(res);
}

for (let i = 1; i < rows[0].length; i++) {
  const res = [];

  for (let k = 0; k < rows[0].length - i; k++) {
    res.push(rows[k][i + k]);
  }

  diagonalsDown.push(res);
}

export const diagonalsUp = [];

for (let i = 0; i < rows.length; i++) {
  const res = [];

  for (let k = 0; k <= i; k++) {
    res.push(rows[i - k][k]);
  }

  diagonalsUp.push(res);
}

for (let i = 1; i < rows[0].length; i++) {
  const res = [];

  const a = rows.length - 1;

  for (let k = 0; k < rows[0].length - i; k++) {
    res.push(rows[a - k][i + k]);
  }

  diagonalsUp.push(res);
}

