import { rulesRaw } from './data.js';
import { updatesRaw } from './data.js';

export const rules = [];

rulesRaw.forEach(rule => {
  rules.push([parseInt(rule[0] + rule[1]), parseInt(rule[3] + rule[4])])
})

export const updates = [];

updatesRaw.forEach(update => {
  const temp = [];

  for (let i = 0; i < (update.length + 1) / 3; i++) {
    temp.push(parseInt(update[3 * i] + update[3 * i + 1]));
  }

  updates.push(temp);
})