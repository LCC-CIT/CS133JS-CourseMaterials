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
    do {
        char = text.charAt(index)
        if (char == 'a' || char == 'A')
        {
            count++;
        }
        index++;
    } while ("." !== char);
    return count;
}

// 5. Use a while loop to count the number of words in a sentence.
function countWords(text) {
    let wordCount = 1; // There should always be at least one word
    // TODO: Write the code to complete the exercise.
    let index = 0; // Beginning of the string
    let char = ''; // Start with no character

    while (char !== ".") {
        char = text.charAt(index);
        if (char === " ") {
            wordCount++;
        }
        index++;
    }
    return wordCount;
}

// 6. Use a while loop to check a number to see if it is prime.
function isPrime(maybePrime) {
    let isPrimeNumber = false;
    let divisor = 2;
    // TODO: Write the code to complete the exercise.
    while (maybePrime % divisor && divisor < maybePrime) {
        divisor++;
    }
    isPrimeNumber = divisor === maybePrime;
    return isPrimeNumber;
}

// 7. Use a do while loop to find the whole square root of a number
function squareRoot(number) {
    let root = 1; // This is just a starting point
    // TODO: Write the code to complete the exercise.
    let square = 0;
    do {
        root++;
        square = root * root;
    } while (square < number);
    root = square === number ? root : 0;
    return root;
}

// 8. Use a for loop to raise a number to a power
function power(base, exponent) {
    let result = 1;
    // TODO: Write the code to complete the exercise.
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

// 9. Use a for loop to check a number to see if it is prime.
function isPrime2(maybePrime) {
    let isPrimeNumber = true;
    // TODO: Write the code to complete the exercise.
    for (let i = 2; i < maybePrime; i++) {
        if (maybePrime % i === 0)
            isPrimeNumber = false;
    }
    return isPrimeNumber;
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