// Object representing a customer account
const customerAccount = {
    name: "Sid Petter",
    balance: 1000,
};

// Function to deposit money into the account
const deposit = (account, amount) => {
    if (amount > 0) {
        account.balance += amount;
        console.log(`${account.name} deposited Rs. ${amount}. New balance: Rs. ${account.balance}`);
    } else {
        console.log('Invalid deposit amount. Please deposit a positive amount.');
    }
};

// Function to withdraw money from the account
const withdraw = (account, amount) => {
    if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        console.log(`${account.name} withdrew Rs. ${amount}. New balance: Rs. ${account.balance}`);
    } else {
        console.log('Invalid withdrawal amount or insufficient balance.');
    }
};

// Example usage:
console.log('Initial Account Details:', customerAccount);
deposit(customerAccount, 500);
withdraw(customerAccount, 200);
