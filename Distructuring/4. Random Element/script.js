function extractElements(arr) {
    // Destructure the array to get the first, second, and last elements
    const [first, second, ...rest] = arr.reverse();

    // Return an array with the extracted elements
    return [first, second, rest.reverse()[0]];
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const result = extractElements(inputArray);
console.log(result);
