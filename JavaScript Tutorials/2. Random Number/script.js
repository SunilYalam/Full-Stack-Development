// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100); 
}

var delay = 3000;

function generateNumberWithCountdown() {

    var interval = setInterval(function () {
        delay -= 1000; 

        console.log("Time remaining: " + delay / 1000 + " seconds");

        if (delay <= 0) {
            clearInterval(interval);
            var randomNumber = generateRandomNumber();
            console.log("Random number generated: " + randomNumber);
        }
    }, 1000); 

    setTimeout(function () {
        clearInterval(interval); 
        var randomNumber = generateRandomNumber();
        console.log("Random number generated: " + randomNumber);
    }, delay);
}
generateNumberWithCountdown();
