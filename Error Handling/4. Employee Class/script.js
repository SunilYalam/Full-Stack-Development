class Employee {
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.salary = salary;
    }
  
    getSalary() {
      return this.salary;
    }
  }
  
  // Instantiate an instance of the Employee class
  const employee = new Employee("Sunil Yalam", "Software Engineer", 80000);
  
  // Call the getSalary method
  const employeeSalary = employee.getSalary();
  
  // Output the result
  console.log(`${employee.name}'s salary is $${employeeSalary}`);
  