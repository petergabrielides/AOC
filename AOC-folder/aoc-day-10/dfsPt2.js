export function depthFirstSearch(graph, node, arrOut, arrIn = []) {
  node.visitedFromPath.push(arrIn);

  const newArr = [...arrIn, node];

  let leafNode = true;

  for (let i = 0; i < node.neighbors.length; i++) {
    const neighbor = node.neighbors[i];

    let visitedFromThisPath = true;

    if (neighbor.visitedFromPath.length === 0) {
      visitedFromThisPath = false;
    }

    neighbor.visitedFromPath.forEach(path => {
      for (let i = 0; i < path.length; i++) {
        if (path[i] !== newArr[i]) {
          visitedFromThisPath = false;
        }
      }
    })

    if (!visitedFromThisPath) {
      leafNode = false;
      depthFirstSearch(graph, neighbor, arrOut, newArr);
    }
  }

  if (leafNode) {
    arrOut.push([node.height, newArr]);
  }
}

//this version of dfs doesnt just visit every node which is possible to reach, it takes every possible path.