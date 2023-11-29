function doubleArrayWithCallback(arr, callback) {
    // Check if the input is an array and the callback is a function
    if (!Array.isArray(arr) || typeof callback !== 'function') {
      throw new Error('Invalid input. Please provide an array and a callback function.');
    }
  
    // Map over the array and apply the callback to double each element
    const doubledArray = arr.map(callback);
  
    return doubledArray;
  }
  
  function doubleElement(num) {
    return num * 2;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const doubledResult = doubleArrayWithCallback(inputArray, doubleElement);
  
  console.log(doubledResult); 
  