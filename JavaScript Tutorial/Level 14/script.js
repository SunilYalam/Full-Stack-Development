const calculateTotalCost = (cart) => {
    if (!Array.isArray(cart)) {
        console.log('Invalid input. Cart should be an array of objects.');
        return;
    }

    let totalCost = 0;

    for (const item of cart) {
        if (typeof item !== 'object' || !item.hasOwnProperty('unitPrice') || !item.hasOwnProperty('quantity')) {
            console.log('Invalid item format. Each item should be an object with properties "unitPrice" and "quantity".');
            return;
        }

        totalCost += item.unitPrice * item.quantity;
    }

    return totalCost;
};

// Example usage:
const customerCart = [
    { unitPrice: 20, quantity: 3 },
    { unitPrice: 15, quantity: 2 },
    { unitPrice: 10, quantity: 4 }
];

const totalCost = calculateTotalCost(customerCart);

if (totalCost !== undefined) {
    console.log(`Total cost of items in the cart: Rs. ${totalCost}/-`);
}
