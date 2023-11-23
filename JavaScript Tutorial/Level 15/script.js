const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    if (typeof originalPrice !== 'number' || typeof discountedPrice !== 'number' || originalPrice <= 0 || discountedPrice <= 0) {
        console.log('Invalid input. Prices should be positive numbers.');
        return;
    }

    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;

    return parseFloat(discountPercentage.toFixed(2)); // Round off to two decimal places
};

// Example usage:
const originalPrice = 1000;
const discountedPrice = 750;
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

if (discountPercentage !== undefined) {
    console.log(`Discount Percentage: ${discountPercentage}%`);
}
