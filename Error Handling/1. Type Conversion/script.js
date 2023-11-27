function convertToNumber(inputString) {
    try {
      const result = Number(inputString);
      
      if (isNaN(result)) {
        throw new Error("Invalid number");
      }
  
      return result;
    } catch (error) {
      return "Invalid number";
    }
  }
  
  console.log(convertToNumber("123")); // Output: 123
  console.log(convertToNumber("abc")); // Output: Invalid number
  console.log(convertToNumber("45.67")); // Output: 45.67
  