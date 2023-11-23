function mixColors(color1, color2) {
    let color1 = document.getElementById('color1');
    let color2 = document.getElementById('color2');
    let resultColor;

    switch (color1) {
        case "red":
            switch (color2) {
                case "blue":
                    resultColor = "purple";
                    document.getElementById('resutColor').innerHTML = "purple";
                    break;
                case "yellow":
                    resultColor = "orange";
                    break;
                default:
                    resultColor = "Invalid color combination";
            }
            break;
        case "blue":
            switch (color2) {
                case "red":
                    resultColor = "purple";
                    break;
                case "yellow":
                    resultColor = "green";
                    break;
                default:
                    resultColor = "Invalid color combination";
            }
            break;
        case "yellow":
            switch (color2) {
                case "red":
                    resultColor = "orange";
                    break;
                case "blue":
                    resultColor = "green";
                    break;
                default:
                    resultColor = "Invalid color combination";
            }
            break;
        default:
            resultColor = "Invalid color";
    }

    console.log(`Resulting color: ${resultColor}`);
}

// Example usage:
mixColors("red", "blue");
mixColors("blue", "red");
mixColors("red", "yellow");
mixColors("yellow", "red");
mixColors("blue", "yellow");
mixColors("yellow", "blue");
mixColors("green", "red"); 
// Invalid color combination
