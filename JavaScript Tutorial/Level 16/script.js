(() => {
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

    const randomValue = generateRandomNumber();

    console.log(`Random Number: ${randomValue}`);
})();
