export function depthFirstSearch(graph, node, arrOut, arrIn = []) {
  node.visited = true;

  const newArr = [...arrIn, node];

  let leafNode = true;

  for (let i = 0; i < node.neighbors.length; i++) {
    const neighbor = node.neighbors[i];

    if (!neighbor.visited) {
      leafNode = false;
      depthFirstSearch(graph, neighbor, arrOut, newArr);
    }
  }

  if (leafNode) {
    arrOut.push([node.height, newArr]);
  }
}