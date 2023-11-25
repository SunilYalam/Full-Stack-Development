function swapValues(x, y) {
    // Use destructuring assignment to swap values
    [x, y] = [y, x];

    // Return an array with the swapped values
    return [x, y];
}

// Example usage:
let a = 5;
let b = 10;

// Call the function to swap values
let result = swapValues(a, b);

// Update the original variables if needed
a = result[0];
b = result[1];

console.log("After swapping, a =", a, "and b =", b);
