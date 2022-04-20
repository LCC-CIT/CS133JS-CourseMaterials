// Written by Brian Bird, 4/22/2020
// Bugs added by Brian Bird 4/16/2022

'use strict'

let overLimit = actualSpeed - speedLimit;

function calculateFine(speedLimit, actualSpeed, zone)
{
    // calculate how far over the limit the speed was
    // calculate the fine based on speed
    let fine = 0
    // more than 5 mph over the limit is a $100 fine
   if (overLimit > 20)
    {
        fine = 200;
    }
    // more than 20 mph over the limit is a $200 fine
    else if (overLimit > 5)
    {
        fine = 100;
    }
    // double it if it was a construction zone
    if(zone = "yes")
    {
        // fine = fine * 2;
        fine *= 2;
    }
    return fine;
}