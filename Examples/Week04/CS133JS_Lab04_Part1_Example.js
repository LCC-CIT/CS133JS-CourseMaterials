/* CS133JS, Beginning JavaScipt Programming, Lane Community College *
 * Example similar to Lab 4, Part 1 by Brian Bird, spring 2022  *
 * For each of the problems, complete the function.                 */
'use strict'

// 1. Complete the for loop below so that it counts down from 12 to 0 by threes (12 9 6 3 0)
function forPractice() {
    let outputString = "";
    // TODO: Set the count staring value, the loop condition, and incrment expression
    for (let count = 12; count >= 0; count -= 3) {
        outputString += count + " ";
    }
    return outputString;
}

// 2. Use a do while loop to count the number of As in a sentence.
function countAs(text) {
    let index = 0; // Beginning position of the string
    let count = 0;
    let char = "";
    // TODO: Write the code to complete the exercise.
    while ("." !== char) {
        char = text.charAt(index)
        if (char == 'a' || char == 'A') {
            count++;
        }
        index++;
    }
    return count;
}

// 3. How many months will it take to repay a loan. 
//    (Assume the last month may be a partial payment.)
// Inputs: loan amount, interest rate, monthly payment
// Output: number of months required to pay off the loan
function calcLoanPeriod(loan, interest, payment) {
    let months = 1;
    let balance = loan;
    // TODO: Write the code to complete the exercise.
    do {
        balance += balance * interest - payment;
        months++;
    } while (balance > 0);
    return months;
}

// 4. Find all the factors or a number. 
// Input: a number to be factored
// Output: all the factors of the number concatenated together in a string
//         For example, the factors of 9 are "1, 3, 9";
function findFactors(aNumber) {
    let factors = "1, ";
    for (let divisor = 2; divisor < aNumber; divisor++) {
        if (aNumber % divisor == 0) {
            factors += divisor + ", ";
        }
    }
    factors += aNumber;
    return factors;
}

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