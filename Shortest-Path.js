const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function aShortestPath(start, end) {
    // your code here
    /*
    1. Create a queue.
    1.1. Create a separate array containing the starting node.
        1.1.1. Enqueue this array.
            1.1.1.1. The enqueued array is the current path.
2. Create a set to store visited nodes.
3. While the queue is not empty, repeat steps 4-6.
4. Dequeue the first path.
    4.1. Save it in a variable.
5. Save the last node in the path in a variable (DO NOT pop it).
6. IS THIS NODE THE THING? IF SO, STOP AND RETURN A RESULT. ELSE, CONTINUE.
7. For each unvisited neighbor of the last node.
    7.1. Add it to the visited nodes set.
    7.2. Copy the saved path, and add the neighbor to the end.
        7.2.1. Enqueue this new path.
8. If the queue has become empty without finding the thing, then the thing has not been found. Return false, an error, or a message as appropriate for the problem you are solving.
    */
    let queue = [];
    let path = [start];
    queue.push(path);
    let visitedNodeSet = new Set();
    visitedNodeSet.add(start);

    while (queue.length > 0) {
        let currentPath = queue.shift();
        let currentNode = currentPath[currentPath.length - 1];

        if (currentNode === end) {
            return currentPath;
        }

        for (let i = 0; i < adjList[currentNode].length; i++) {
            let neighbor = adjList[currentNode][i];

            if (!visitedNodeSet.has(neighbor)) {
                visitedNodeSet.add(neighbor);
                let newArray = [...currentPath];
                newArray.push(neighbor);
                queue.push(newArray);
            }
        }
    }
    return false;
}


//---------Local Test Area----------------------
console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
