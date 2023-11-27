class Person {
    constructor(name = "Mithun", age = 20) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  // Instantiate an instance of the Person class without providing values
  const person1 = new Person();
  
  // Instantiate an instance of the Person class with provided values
  const person2 = new Person("Mithun", 25);
  
  // Call the getDetails method
  console.log(person1.getDetails()); // Output: "Name: Mithun, Age: 20"
  console.log(person2.getDetails()); // Output: "Name: Mithun, Age: 25"
  