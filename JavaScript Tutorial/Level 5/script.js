function capitalizeFirstName(name) {
    // Check if the first letter is lowercase using the ternary operator
    const modifiedName = name.charAt(0).toLowerCase() === name.charAt(0) ?
        name.charAt(0).toUpperCase() + name.slice(1) :
        name;

    return modifiedName;
}

// Example
const userName = "sid";
const modifiedUserName = capitalizeFirstName(userName);
console.log(`Original name: ${userName}`);
console.log(`Modified name: ${modifiedUserName}`);
