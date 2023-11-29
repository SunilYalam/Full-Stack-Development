function manipulateString(inputString) {
    // Convert the characters to uppercase
    const manipulatedString = inputString.toUpperCase();
  
    // Define the callback function to log the manipulated string
    function logString() {
      console.log(`The manipulated string is: ${manipulatedString}`);
    }
  
    return logString;
  }
  
  const inputString = "Pwskills, full stack!";
  const logStringCallback = manipulateString(inputString);
  
  logStringCallback();
  