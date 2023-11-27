class User {
    constructor(username, password) {
      this.username = username;
      this._password = ""; // Use a private variable for the actual password
      this.password = password; // Use the setter to validate and set the password
    }
  
    get password() {
      // Getter method to return the password with all characters replaced by asterisks
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      // Setter method to validate and set the new password
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. It must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of the User class
  const user = new User("Mithun", "Password123");
  
  // Access the password using the getter
  console.log(`Original Password: ${user.password}`);
  
  // Attempt to set a new valid password
  user.password = "MyPassword123";
  
  // Access the password using the getter after setting a new valid password
  console.log(`Updated Password: ${user.password}`);
  
  // Attempt to set an invalid password
  user.password = "MyPassword";
  
  // Output the error message for the invalid password
  