function wordCount(inputString) {
    // Split the input string into words
    const words = inputString.split(/\s+/);

    // Create a Map to store word counts
    const wordCounts = new Map();

    // Count occurrences of each word
    for (const word of words) {
        // Remove any non-alphabetic characters
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();

        // Update the word count in the Map
        if (wordCounts.has(cleanedWord)) {
            wordCounts.set(cleanedWord, wordCounts.get(cleanedWord) + 1);
        } else {
            wordCounts.set(cleanedWord, 1);
        }
    }

    return wordCounts;
}


const text = "This is a simple example. This example demonstrates the word count functionality.";
const result = wordCount(text);
console.log(result);

