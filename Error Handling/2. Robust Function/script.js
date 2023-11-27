function getPerson(personObj) {
    try {
      if (typeof personObj !== 'object' || !personObj.hasOwnProperty('name') || !personObj.hasOwnProperty('age')) {
        throw new Error("Invalid parameter type");
      }
  
      const name = personObj.name;
      const age = personObj.age;
  
      return `Name: ${name}, Age: ${age}`;
    } catch (error) {
      return error.message;
    }
  }
  
  const validPerson = { name: "Mithun", age: 20 };
  const invalidPerson = { name: "Mithun" };
  
  console.log(getPerson(validPerson)); // Output: "Name: Mithun, Age: 20"
  console.log(getPerson(invalidPerson)); // Output: "Invalid parameter type"
  