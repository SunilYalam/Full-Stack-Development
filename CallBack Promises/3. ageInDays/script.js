function ageInDays(person) {

    const { firstName, lastName, age } = person;
  
    const fullName = `${firstName} ${lastName}`;
  
    const ageInDays = age * 365; 
  
    function logMessage() {
      console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
    }
  
    // Return the callback function
    return logMessage;
  }
  
  // Create an object with person's information
  const personInfo = {
    firstName: "Mithun",
    lastName: "S",
    age: 21,
  };
  
  // Call ageInDays with the person's information
  const logMessageCallback = ageInDays(personInfo);
  
  // Call the returned callback function to log the message
  logMessageCallback();
  