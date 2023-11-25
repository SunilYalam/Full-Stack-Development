function extractNameAndStreet(person) {
    // Destructure the nested object to extract name and street properties
    const { name, address: { street } } = person;

    // Return an object with the extracted properties
    return { name, street };
}

// Example usage:
const person = {
    name: "Mithun",
    age: 21,
    address: {
        street: "B8, Block B, Industrial Area",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

const result = extractNameAndStreet(person);
console.log(result);
