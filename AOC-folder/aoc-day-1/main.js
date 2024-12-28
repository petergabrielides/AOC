import { quickSort } from "./quicksort.js";
import { list1, list2 } from "./data.js";

quickSort(list1);
quickSort(list2);

let result = 0;

for (let i = 0; i < list1.length; i++) {
  result += Math.abs(list2[i] - list1[i]);
}

console.log(result);
