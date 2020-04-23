// Temporarily writing a stub
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