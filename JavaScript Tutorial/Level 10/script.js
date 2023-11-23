function doubleItemQuantities(cart) {
    // Using map to create a new array with doubled quantities
    const correctedCart = cart.map(quantity => quantity * 2);

    return correctedCart;
}

// Example usage:
const originalCart = [1, 2, 3, 4, 5];
const correctedCart = doubleItemQuantities(originalCart);

console.log('Original Cart:', originalCart);
console.log('Corrected Cart:', correctedCart);
