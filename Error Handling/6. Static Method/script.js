class Calculator {
    static add(num1, num2) {
      return num1 + num2;
    }
  }
  
  // Instantiate an instance of the Calculator class (not necessary for using static methods)
  const calculatorInstance = new Calculator();
  
  // Call the static add method
  const sum = Calculator.add(5, 10);
  
  // Output the result
  console.log(`The sum is: ${sum}`);
  