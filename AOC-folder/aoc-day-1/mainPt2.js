import { list1, list2 } from "../aoc-day-1/data.js";

const timesList1InList2 = [];

list1.forEach(locationID1 => {
  let a = 0;
  list2.forEach(locationID2 => {
    if (locationID1 === locationID2) {
      a++;
    }
  });
  timesList1InList2.push(a);
});

let similarityScore = 0;

list1.forEach((locationID, index) => {
  similarityScore += locationID * timesList1InList2[index];
})

console.log(similarityScore);