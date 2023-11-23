function printDivisibleByThreeNotByTwo(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        // Skip numbers divisible by 2 using continue statement
        if (numbers[i] % 2 === 0) {
            continue;
        }

        // Check if the number is divisible by 3
        if (numbers[i] % 3 === 0) {
            console.log(numbers[i]);
        }
    }
}

// Example usage:
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printDivisibleByThreeNotByTwo(numberArray);
