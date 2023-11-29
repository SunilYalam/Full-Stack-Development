async function fetchDataFromMultipleEndpoints() {
    try {
      
      const [todoResponse, postResponse] = await Promise.all([
        fetch('https://api.pwskills.com'),
        fetch('https://api.pwskills.com'),
      ]);
  
      // Check if the requests were successful
      if (!todoResponse.ok || !postResponse.ok) {
        throw new Error('Failed to fetch data from one or more endpoints.');
      }
  
      // Parse the responses as JSON
      const todoData = await todoResponse.json();
      const postData = await postResponse.json();
  
      // Combine the results into an object
      const combinedData = {
        todo: todoData,
        post: postData,
      };
  
      // Log the combined data to the console
      console.log('Combined data:', combinedData);
    } catch (error) {
      // Log any errors that occurred during the fetch process
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function to fetch data from multiple endpoints asynchronously
  fetchDataFromMultipleEndpoints();
  