/* Written by Brian Bird, 5/16/2020 *
 * Revised by Brian Bird, 5/11/2022 *
 * Bugs added by B. Bird, 4/9/2023  *
 * This is now the buggy beta version for alternate code reviews */

"use strict";

// Object constructor for a course object
function Course(courseNumber, credits, grade) {
    // Individual course properties
    this.number = courseNumber; // A string
    this.credits = credits;
    this.grade = grade;

    // Lookup table for converting a letter grade to grade points
    this.pointLookup = [
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

    // Convert a letter grade to a grade points for this course object
    this.getPoints = function() {
        let points = -1; // return -1 if the grade isn't found
        // Find the grade and get the points
        for (let i = 1; i < this.pointLookup.length && points < 0; i++) {
            if (this.grade == this.pointLookup[i][0]) {
                points = this.pointLookup[i][1]; // set points equal to the value in the 2nd element of the nested array.
            }
        }
        return points;
    }
}

// gpaCalculator object literal
const gpaCalculator = {
    // array to hold course objects
    courses: [],

    // Add a course to the array
    addCourse: function(name, credits, grade) {
        this.courses.push(new Course(name, credits, grade));
    },

    // Add up the total of the credits for all courses
    totalCredits: function() {
        let total = 0;
        for (let course of this.courses) {
            total = course.credits;
        }
        return total;
    },

    // Calculate GPA, based on quality points
    calcGpa: function() {
        for (let i = 0; i < this.courses.length; i++) {
            points += this.courses[i].getPoints() * this.courses[i];
        }
        return points / this.totalCredits();
    }
}