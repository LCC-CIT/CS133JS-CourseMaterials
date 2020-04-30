// This function handles input and output for this app
function doIO() {
    // Get input and validate it
    let age = 0;
    do {
        age = prompt("Enter your child's age (from 1 to 16).");
    } while (age < 1 || age > 16);

    let height = 0;
    do {
        height = prompt("Enter your child's height (from 10 to 80).");
    } while (height < 10 || height > 80);

    let weight = 0;
    do {
        weight = prompt("Enter your child's weight (from 1 to 100).");
    } while (weight < 1 || weight > 100);

    // Determine the seating required
    let result = determineSeat(age, height, weight);

    // Put the output in the web page
    document.getElementById("seat").innerHTML = result;
}

// This function processes the input to determine the seating required for the child
function determineSeat(age, height, weight) {
    let seatRequirement = "";
    if (age >= 8 || height > 57) {
        seatRequirement = "no special seat";
    } else if (weight >= 40) {
        seatRequirement = "a booster seat";
    } else if (weight > 20 && age >= 2) {
        seatRequirement = "a front facing car seat";
    } else {
        seatRequirement = "a rear facing car seat";
    }
    return seatRequirement;
}