// Temporarily writing a stub
function determineSeat(age, height, weight)
{
    let seatRequirement = "";
    if (age >= 8 && height >= 57)
    {
       seatRequirement = "No special seat is needed";
    }
    else if (weight  >= 40 )
    {
        seatRequirement = "Use a booster seat";
    }
    else if (weight >= 20 && age >= 1)
    {
        seatRequirement = "Use a front facing car seat";
    }
    else
    {
        seatRequirement = "Use a rear facing car seat";
    }
    return seatRequirement;
}