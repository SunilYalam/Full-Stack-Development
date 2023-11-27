function numberChecker(arr) {
    // Return a function that checks if a given number is in the array
    return function(number) {
      return arr.includes(number);
    };
  }
  
  // Create a numberChecker function with an array of numbers
  const checkNumberInArray = numberChecker([1, 2, 3, 4, 5]);
  
  // Use the returned function to check if a number is in the array
  console.log(checkNumberInArray(3)); // Output: true
  console.log(checkNumberInArray(6)); // Output: false
  