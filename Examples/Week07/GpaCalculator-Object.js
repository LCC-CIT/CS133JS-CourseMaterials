/* Written by Brian Bird, 5/16/2020 */

"use strict";

// Object constructor for a course object
function Course(number, credits, grade) {
    this.number = number;
    this.credits = credits;
    this.grade = grade;
}

// A global array that will hold course objects
let courses = [];

// Looup table for converting letter grades to grade points
// Each nested array has two elements:
// Index 0: the letter grade
// Index 1: the points for that grade
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
function lookUpPoints(grade) {
    let points = -1; // if this gets returned, then the grade wasn't found
    // Loop until either the grade is found or we reach the end of the array
    for (let i = 0; i < pointLookup.length && points < 0; i++) {
        if (grade == pointLookup[i][0]) {
            points = pointLookup[i][1]; // set points equal to the value in the 2nd element of the nested array.
        }
    }
    return points;
}

// Add a class. This requires adding to all three global arrays
function addClass(name, credits, grade) {
    courses.push(new Course(name, credits, grade));
}

// Add up the total of the credits using the global courseCredits array
function totalCredits() {
    let total = 0;
    for (let course of courses) {
        total += course.credits;
    }
    return total;
}

// Calculate GPA, based on quality points, using the global courses array
// For each class, quality points = grade point * credits
// For the overall grade point average, GPA = total quality points / number of credits
function calcGpa() {
    let points = 0;
    for (let i = 0; i < courses.length; i++) {
        points += lookUpPoints(courses[i].grade) * courses[i].credits;
    }
    return points / totalCredits();
}