// Cost of movie tickets for a group
const CHILD_TICKET = 6.25; //  ages 12 and under
const ADULT_TICKET = 12.00; // ages 13 & up
const SENIOR_TICKET = 6.25; // ages 62+

let residence = prompt("Are you a resident of Oregon? (yes/no)");
let credits = prompt("How many credits are you taking?");
let totalTuition = TRANSPORTATION_FEE + STUDENT_ACTIVITY_FEE + HEALTH_CLINIC_FEE;
totalTuition += credits * TECHNOLOGY_FEE;
if (residence == "yes") {
    totalTuition += credits * RESIDENT_TUITION;
} else {
    totalTuition += credits * NON_RESIDENT_TUITION;
}
console.log(totalTuition);