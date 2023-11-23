function printInvertedRightAngleTriangle(i) {
    for (let row = i; row >= 1; row--) {
        let pattern = '';

        // Add spaces before the asterisks
        for (let space = i - row; space > 0; space--) {
            pattern += ' ';
        }

        // Add asterisks for the current row
        for (let j = 1; j <= row; j++) {
            pattern += '*';
        }

        // Print the pattern for the current row
        console.log(pattern);
    }
}

// Example usage:
const numberOfRows = 6;
printInvertedRightAngleTriangle(numberOfRows);
