// Calculate tuition
const RESIDENT_TUITION = 121; // LCC resident cost per credit hour for 2010-2021
const NON_RESIDENT_TUITION = 281.50; // non-resident cost per crecit hour
const TECHNOLOGY_FEE = 11; // technology fee per credit
const TRANSPORTATION_FEE = 27;
const STUDENT_ACTIVITY_FEE = 61.52;
const HEALTH_CLINIC_FEE = 45;


let residence = prompt("Are you a resident of Oregon? (yes/no)");
let credits = prompt("How many credits are you taking?");
let totalTuition = TRANSPORTATION_FEE + STUDENT_ACTIVITY_FEE + HEALTH_CLINIC_FEE;
totalTuition += credits * TECHNOLOGY_FEE;
if(residence == "yes")
{
    totalTuition += credits * RESIDENT_TUITION;
}
else
{
    totalTuition += credits * NON_RESIDENT_TUITION;
}
console.log(totalTuition);