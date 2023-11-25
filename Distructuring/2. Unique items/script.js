function removeDuplicates(arr) {
    // Use a Set to store unique elements
    const uniqueSet = new Set(arr);

    // Convert the Set back to an array if needed
    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 3, 2, 1, 5];
const result = removeDuplicates(inputArray);
console.log(result);
