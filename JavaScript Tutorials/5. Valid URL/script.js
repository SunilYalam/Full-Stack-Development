// Function to check if a given URL is valid
function isValidURL(url) {
    
    const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-_.]+[.][a-zA-Z]+$/;

    // Test the input URL against the regex
    if (urlPattern.test(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
}

// Test with sample URLs
isValidURL("https://github.com/SunilYalam");
isValidURL("https://www.google.com");
isValidURL("ftp://invalid-url"); // This should print as not valid
