
function dirReduc(arr) {
    const opposites = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };

    const stack = [];

    for (let dir of arr) {
        if (stack.length > 0 && stack[stack.length - 1] === opposites[dir]) {
            stack.pop(); // Remove the last direction if it cancels out with the current one
        } else {
            stack.push(dir); // Otherwise, add the current direction
        }
    }

    return stack;
}

// A dictionary (opposites) maps each direction to its opposite
// A stack is used to hold the simplified path
// the last direction is checked against the current direction 
// if the current direction cancels out the last direction in the stack, remove the last direction
