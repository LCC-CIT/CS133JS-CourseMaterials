// Written by Brian Bird, 4/22/2020, comments added, changed 1/25/2023

function calculateFine(speedLimit, actualSpeed, zone)
{
    // calculate how far over the limit the speed was
    let overLimit = actualSpeed - speedLimit;
    // calculate the fine based on speed
    let fine = 0;
    /* Note: We need to check for overLimit > 20 first, because if we check for 
       overLimit > 5 first it would also be true for overLimit > 20. */
    // more than 20 mph over the limit is a $200 fine
   if (overLimit > 20)
    {
        fine = 200;
    }
    // more than 5 mph over the limit is a $100 fine
    else if (overLimit > 5)
    {
        fine = 100;
    }
    // double it if it was a construction zone
    if(zone == "yes")
    {
        // fine = fine * 2;
        fine *= 2;
    }
    return fine;
}