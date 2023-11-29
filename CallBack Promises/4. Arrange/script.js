function extractTitlesAndLogAlphabetically(books, callback) {

    const titles = books.map(book => book.title);
  
    const sortedTitles = titles.sort();
  
    callback(sortedTitles);
  }
  
  // List of book objects
  const books = [
    { title: "The Ignited Mind", author: "APJ Abdul Kalam", year: 2001 },
    { title: "Target 3 Billion", author: "Srijan Singh", year: 1999 },
    { title: "1984", author: "George Orwell", year: 1949 },
  ];
  
  // Callback function to log titles to the console
  function logTitles(titles) {
    console.log("Titles in alphabetical order:");
    titles.forEach(title => console.log(title));
  }
  
  // Call the program with the list of books and the callback function
  extractTitlesAndLogAlphabetically(books, logTitles);
  