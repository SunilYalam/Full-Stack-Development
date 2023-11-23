function calculateTotalBill(costPerDish, numberOfPeople) {
    if (costPerDish <= 0 || numberOfPeople <= 0) {
        // Check for invalid input
        console.log('Invalid input. Cost and number of people should be greater than zero.');
        return;
    }

    const totalBill = costPerDish * numberOfPeople;
    const billPerPerson = totalBill / numberOfPeople;

    return {
        totalBill: totalBill,
        billPerPerson: billPerPerson
    };
}

// Example usage:
const costPerDish = 250; // Assuming the cost of each dish is Rs. 250/-
const numberOfPeople = 4;
const billDetails = calculateTotalBill(costPerDish, numberOfPeople);

if (billDetails) {
    console.log(`Total Bill: Rs. ${billDetails.totalBill}/-`);
    console.log(`Bill per Person: Rs. ${billDetails.billPerPerson}/-`);
}
