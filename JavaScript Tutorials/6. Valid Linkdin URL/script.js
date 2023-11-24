// Function to check if a given LinkedIn profile URL is valid
function isValidLinkedInURL(url) {
    // Regular expression for matching valid LinkedIn profile URLs
    const linkedInUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

    // Test the input URL against the regex
    if (linkedInUrlPattern.test(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
}

// Test with sample LinkedIn profile URLs
isValidLinkedInURL("https://www.linkedin.com/in/YalamSunil");
isValidLinkedInURL("https://www.linkedin.com/in/invalid*profile"); // This should print as not valid
isValidLinkedInURL("https://www.linkedin.com/profile/notinformat"); // This should print as not valid
