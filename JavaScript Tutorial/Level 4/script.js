function findHighestMarks(marks) {
    // Using the ternary operator to find the highest marks
    const highestMarks = Math.max(...marks);

    console.log(`Highest marks in the class: ${highestMarks}`);
}

// Example usage:
const studentMarks = [85, 92, 78, 95, 89];
findHighestMarks(studentMarks);
