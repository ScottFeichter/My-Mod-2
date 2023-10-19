const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function aShortestPath(start, end) {
  // Your code here
  const queue = [[start]]  // contain paths
  const visited = new Set().add(start)

  while (queue.length) {
    // console.log({queue})
    // console.log({visited})
    const currPath = queue.shift() // [1]
    const lastVal = currPath[currPath.length - 1] // value at end of path

    // Do the thing
    if (lastVal === end) return currPath

    // Find neighbors
    const neighbors = adjList[lastVal]

    neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) {
        queue.push([...currPath, neighbor])
        visited.add(neighbor)
      }
    })

  }

  return false
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
