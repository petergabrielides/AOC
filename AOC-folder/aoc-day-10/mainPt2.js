import { map } from './graphStructPt2.js'
import { depthFirstSearch } from './dfsPt2.js';

const trailheads = findNodesByHeight(0);

const paths = [];

trailheads.forEach(trailhead => {
  depthFirstSearch(map, trailhead, paths);
  resetVisitedFromPathAll();
})

let result = 0;

paths.forEach(path => {
  if (path[0] === 9) {
    result++;
  }
})

console.log(result);

function findNodesByHeight(num) {
  const res = [];

  map.forEach(node => {
    if (node.height === num) {
      res.push(node);
    }
  })

  return res;
}

function resetVisitedFromPathAll() {
  map.forEach(node => {
    node.visitedFromPath.splice(0);
  })
}