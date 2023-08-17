const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function printDepthFirst(start) {
    // your code here
    const stack = [start];
    const visited = new Set([start]); // visited.add(start);
    
    // console.log({visited})

    while (stack.length) {
        const curr = stack.pop();
        // DO THE THING
        console.log(curr);
        // FIND NEIGHBORS
        const neighbors = adjList[curr];
        // console.log({neighbors})
        neighbors.forEach(neighbor => {
            if (!visited.has(neighbor)) {
                stack.push(neighbor);
                visited.add(neighbor)
            }
        });
    }
    // Optional return
}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 1, 2
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 1, 3
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 1, 3
