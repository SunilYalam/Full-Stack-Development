// Function to fetch data from the API
async function fetchDataFromAPI() {
    try {
      // Make a fetch request to the API
      const response = await fetch('https://api.pwskills.com/posts');
  
      // Check if the request was successful (status code 200-299)
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      // Parse the response as JSON
      const data = await response.json();
  
      // Log the data to the console
      console.log('Fetched data:', data);
    } catch (error) {
      // Log any errors that occurred during the fetch process
      console.error('Error fetching data:', error.message);
    }
  }
  
  // Call the function to fetch data from the API
  fetchDataFromAPI();
  