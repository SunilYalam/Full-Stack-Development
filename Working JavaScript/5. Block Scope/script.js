
{
    // Accessing before declaration will result in a ReferenceError
    console.log('Before assignment:', myLetVar); 
  
    // Declare the variable using let
    let myLetVar = 'I am declared using let';
  
    // Accessing after declaration works fine
    console.log('After assignment:', myLetVar); 
  }
  