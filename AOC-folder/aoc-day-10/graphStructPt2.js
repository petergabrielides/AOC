import { raw } from "./dataRaw.js";

const mapY = raw.length;
const mapX = raw[0].length;

class Node{
  height;
  loc;
  neighbors = [];
  visitedFromPath = [];

  //now that we are looking for unique paths rather than visiting every possible node, we need to keep track of how each node was reached, rather than if it has already been visited.

  constructor(a, b) {
    this.height = a;
    this.loc = b;
  }

  updateNeighbors() {
    if (this.height < 0) {
      return;
    }

    const vecs = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (let vec of vecs) {
      const neighborLoc = [this.loc[0] + vec[0], this.loc[1] + vec[1]];
      const neighbor = findNodeByLoc(neighborLoc);
      if (!neighbor) {
        continue;
      } else if (neighbor.height - this.height === 1) {
        this.neighbors.push(neighbor);
      }
    }
  }
}

export const map = [];

for (let i = 0; i < mapY; i++) {
  for (let j = 0; j < mapX; j++) {
    const height = raw[i][j];
    const loc = [i, j]

    map.push(new Node(height, loc));
  }
}

map.forEach(node => {
  node.updateNeighbors();
})

function findNodeByLoc(loc) {
  let res;

  for (let i = 0; i < map.length; i++) {
    if (loc[0] === map[i].loc[0] && loc[1] === map[i].loc[1]) {
      res = map[i];
      break;
    } 
  }

  return res;
}