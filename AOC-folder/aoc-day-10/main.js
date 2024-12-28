import { map } from './graphStruct.js'
import { depthFirstSearch } from './dfs.js';

const trailheads = findNodesByHeight(0);

const paths = [];

trailheads.forEach(trailhead => {
  depthFirstSearch(map, trailhead, paths);
  resetVisitedAll();
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

function resetVisitedAll() {
  map.forEach(node => {
    node.visited = false;
  })
}