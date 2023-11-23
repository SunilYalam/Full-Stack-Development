function removeDuplicates(cart) {
    // Use a Set to store unique items
    const uniqueItems = new Set(cart);

    // Convert the Set back to an array to get the new cart without duplicates
    const newCart = Array.from(uniqueItems);

    return newCart;
}

// Example usage:
const customerCartWithDuplicates = ['item1', 'item2', 'item3', 'item1', 'item4', 'item2'];
const newCustomerCart = removeDuplicates(customerCartWithDuplicates);

console.log('Original Cart:', customerCartWithDuplicates);
console.log('New Cart without Duplicates:', newCustomerCart);
