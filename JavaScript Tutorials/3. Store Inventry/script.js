// Exchange rate: 1 USD = 80 INR
const exchangeRate = 80;

const itemsInUSD = {
    item1: 20,
    item2: 35,
    item3: 50,
};

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = Object.fromEntries(
    Object.entries(itemsInUSD).map(([item, priceInUSD]) => [item, convertToINR(priceInUSD)])
);

console.log("Original Prices (USD):", itemsInUSD);
console.log("Converted Prices (INR):", itemsInINR);
