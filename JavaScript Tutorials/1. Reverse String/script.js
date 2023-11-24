// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Input string
var input = "Hello, World!";

// Function to reverse the string after a delay
function reverseAfterDelay(inputString) {
    setTimeout(function () {
        // Reverse the string after 2 seconds
        var reversedString = reverseString(inputString);

        // Print the reversed string
        console.log("Reversed String: " + reversedString);
    }, 2000); // 2000 milliseconds = 2 seconds
}

// Call the function with the input string
reverseAfterDelay(input);
