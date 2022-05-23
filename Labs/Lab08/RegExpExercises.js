/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Lab 4, Part 1: Exercise starter file by Brian Bird, spring 2022  *
 * For each of the problems, write a regex pattern.                 */
'use strict'

// 1. Write a regex pattern that will match a string containing "JavaScript".
let pattern1 = / /;

// 2. Write a regex pattern that will match a string containing "JavaScript".
let pattern2 = / /;

// 3. Validate a single digit number. Write a regex pattern that will match a string containing 
// a single digit in the range of 1 through 5.
let pattern3 = / /;

// 4. Validate a name. Write a regex pattern that will match a string containing just letters.
let pattern4 = / /;

// 5. Validate a password. Write a regex pattern that will match a string containing 
// at least 8 characters, upper and lower case, one of -_!$%&*, and a number.
let pattern5 = / /;

// 6. Validate an e-mail address. Write a regex pattern that will match a string containing 
// alpha-numeric characters, then @, then leters, then ., then letters.
let pattern6 = / /;

// 7. Write a regex pattern that will match a string containing 
// either of these words: rabbit or bunny
let pattern7 = / /;

// 8. Replace "can't" with "can not"
let patter8 = / /;




// This function is used in the web page to check the other functions
function checkAnswer(elementId, correctAnswer, answer) {
    const element = document.getElementById(elementId);
    element.innerHTML += answer;
    if (correctAnswer === answer) {
        element.innerHTML += ", correct";
        element.style.backgroundColor = "green";
    } else {
        element.innerHTML += ", incorrect";
        element.style.backgroundColor = "red";
    }
}