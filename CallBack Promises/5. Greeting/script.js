function greetWithPromise(name) {
    return new Promise((resolve, reject) => {
      // Check if a valid name is provided
      if (!name || typeof name !== 'string') {
        reject(new Error('Invalid name. Please provide a valid string.'));
      }
  
      // Construct the greeting message
      const greetingMessage = `Hello, ${name}!`;
  
      // Resolve the promise with the greeting message
      resolve(greetingMessage);
    });
  }
  
  // Call the function with a name
  const nameToGreet = "Mithun";
  
  // Use the promise returned by the function
  greetWithPromise(nameToGreet)
    .then(greeting => {
      console.log(greeting); // Output: Hello, Mithun!
    })
    .catch(error => {
      console.error(error.message);
    });
  