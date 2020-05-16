"use strict";

let courses = [];
let courseCredits = [];
let letterGrades = [];

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

function lookUpPoints(grade)
{
    let points = -1;   // if this gets returned, then the grade wasn't found
    // Loop until either the grade is found or we reach the end of the array
    for(let i = 0; i < pointLookup.length && points < 0; i++)
    {   
        if(grade == pointLookup[i][0])
        {
            points = pointLookup[i][1];
        }
    }
    return points;
}

function addClass(name, credits, grade)
{
    courses[courses.length] = name;
    courseCredits[courseCredits.length] = credits;
    letterGrades[letterGrades.length] = grade;
}