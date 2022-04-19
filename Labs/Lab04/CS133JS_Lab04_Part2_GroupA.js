/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Lab 4, Part 2: Starter file by Brian Bird, spring 2022           */

'use strict'

// 1. Countdown to midnight
// Input: number of hours to midnight
// Output: a string containing a countdown of hours and minutes
// Example output for input of 4: 4, 240; 3, 180; 2, 120; 1, 60, 0, 0
function countdown(hoursUntilMidnight) {
    let countOutput = "";
    // TODO: Write the code that puts a countdown in coutOutput
    return countOutput;
}

// 2. Kindergarten admission
// Input: child's age and whether they had a birthday before August 1st
// Output: a string saying either "Start kindergarten", "Too young", or "Too old"
function startKindergarten(age, hadBirthday) {
    let status = "";
    // TODO: Add code from the solution in last week's lab
    return status;
}

// 3. Grade level
// Input: a student's age
// Output: a string containing the name of their grade (k through 5th)
function calcGradeLevel(age) {
    let gradeLevel = 0;
    switch (parseInt(age)) {
        case 5:
            gradeLevel = "Kindergarten";
            break;
        case 6:
            gradeLevel = "First grade";
            break;
        case 7:
            gradeLevel = "Second grade";
            break;
        case 8:
            gradeLevel = "Third grade";
            break;
        case 9:
            gradeLevel = "Fourth grade";
            break;
        case 10:
            gradeLevel = "Fifth grade";
            break;
        default:
            gradeLevel = age < 5 ? "Too young" : "Too old";
            break;
    }
    return gradeLevel;
}