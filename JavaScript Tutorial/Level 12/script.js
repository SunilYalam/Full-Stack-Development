function calculateRentalCost(daysRented, carType) {
    let rentalCostPerDay;

    switch (carType.toLowerCase()) {
        case 'economy':
            rentalCostPerDay = 4000; // Rs. 4,000 per day for Economy
            break;
        case 'midsize':
            rentalCostPerDay = 15000; // Rs. 15,000 per day for Midsize
            break;
        case 'luxury':
            rentalCostPerDay = 20000; // Rs. 20,000 per day for Luxury
            break;
        default:
            console.log('Invalid car type');
            return; // Return undefined for invalid car type
    }

    const totalCost = rentalCostPerDay * daysRented;
    return totalCost;
}

// Example usage:
const daysRented = 3;
const carType = 'economy';
const totalRentalCost = calculateRentalCost(daysRented, carType);

if (totalRentalCost !== undefined) {
    console.log(`Total rental cost for ${daysRented} days of ${carType} car: Rs. ${totalRentalCost}/-`);
}
