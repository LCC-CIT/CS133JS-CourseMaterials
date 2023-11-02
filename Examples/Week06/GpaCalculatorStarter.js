/* Written by Brian Bird, 5/16/2020 */

"use strict";

// Parallel arrays
let courses = [];         // Course number
let courseCredits = [];   // Course credits
let letterGrades = [];    // Grade given for the course

// Looup table for converting letter grades to grade points
let pointLookup = [
    ["A+", 4.3],
    ["A", 4.0],
    ["A-", 3.7],
    ["B+", 3.3],
    ["B", 3.0],
    ["B-", 2.7],
    ["C+", 2.3],
    ["C", 2.0],
    ["C-", 1.7],
    ["D+", 1.3],
    ["D", 1.0],
    ["D-", 0.7],
    ["F", 0.0]
];

// Convert a letter grade to a grade point
function lookUpPoints(grade)
{
    let points = -1;   // if this gets returned, then the grade wasn't found
   
    return points;
}

// Add a class. This requires adding to all three global arrays
function addClass(name, credits, grade)
{

}

// Add up the total of the credits using the global courseCredits array
function totalCredits()
{
    let total = 0;

    return total;
}

// Calculate GPA, based on quality points, using global arrays
function calcGpa()
{
    let points = 0;
    let credits = 1;

    return points / credits;
}