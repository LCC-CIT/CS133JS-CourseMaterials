function doIO() {
    let element = document.getElementById("seat");
    let age = prompt("Enter your child's age.");
    let height = prompt("Enter your child's height.");
    let weight = prompt("Enter your child's weight.");

    let result = determineSeat(age, height, weight);
    element.innerHTML = result;
}

function determineSeat(age, height, weight)
{
    let seatRequirement = "";
    if (age >= 8 || height > 57)
    {
       seatRequirement = "no special seat";
    }
    else if (weight  >= 40 )
    {
        seatRequirement = "a booster seat";
    }
    else if (weight > 20 && age >= 2)
    {
        seatRequirement = "a front facing car seat";
    }
    else
    {
        seatRequirement = "a rear facing car seat";
    }
    return seatRequirement;
}