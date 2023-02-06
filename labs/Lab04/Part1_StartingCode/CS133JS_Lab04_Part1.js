/* CS133JS, Beginning JavaScipt Programming, Lane Community College             *
 * Lab 4, Part 1: Exercise starter file by Brian Bird, spring 2022              *
 * Check the answers using the accompanying HTML file: CS133JS_Lab04_Part1.html *
 * For each of the problems, complete the function.                             */
'use strict'

// 1. Complete the do while loop below so that it counts from 2 to 10 by twos (2, 4, 6, 8, 10)
function doWhilePractice() {
    let outputString = "";
    let count = 0; // TODO: Set count to the right starting value
    do {
        // TODO: Add two to count
        outputString += count;
    } while (count < 0); // TODO: put in the correct condition
    return outputString;
}

// 2. Complete the while loop below so that it counts from 2 to 10 by twos (2, 4, 6, 8, 10)
function whilePractice() {
    let outputString = "";
    let count = 0; // TODO: Set count to the right starting value
    while (count < 0) // TODO: put in the correct condition
    {
        // TODO: Add two to count
        outputString += count;
    }
    return outputString;
}

// 3. Complete the for loop below so that it counts from 2 to 10 by twos (2, 4, 6, 8)
function forPractice() {
    let outputString = "";
    // TODO: Set the count staring value, the loop condition, and incrment expression
    for (let count = 0; count < 0; count += 0) {
        outputString += count;
    }
    return outputString;
}

// 4. Use a do while loop to count the number of characters in a sentence.
function countChars(text) {
    let index = 0; // Beginning position of the string
    // TODO: Write the code to complete the exercise.
    return index;
}

// 5. Use a while loop to count the number of words in a sentence.
function countWords(text) {
    let wordCount = 1; // There should always be at least one word
    // TODO: Write the code to complete the exercise.
    // Hint: How do we know where one word stops and the next word starts?
    return wordCount;
}

// 6. Use a while loop to check a number to see if it is prime.
function isPrime(maybePrime) {
    let isPrimeNumber = true; // assume true, try to prove false
    // TODO: Write code to initialize a loop counter, then write the loop.
    // Hint 1: In a loop divide maybePrime by every number from 2 to one less than maybePrime
    // if the remainder is ever zero, then maybePrime is not a prime number.
    // Hint 2: inside the loop use this statement: 
    // if(maybeRrime % counter === 0) { isPrimeNumber = false; }
    return isPrimeNumber;
}

// 7. Use a do while loop to find the whole square root of a number
//    Return 0 if there is no whole square root.
function squareRoot(number) {
    let root = 1; // This is just a starting point
    // TODO: Write a loop that will increment root until either:
    // a) root * root equals number, or b) the root is greater then number.
    // Hint: Use this statement inside the loop: root++;
    return root < number ? root : 0;
}

// 8. Use a for loop to raise a number to a power
function power(base, exponent) {
    let result = 1; // any number raised to the power of 0 will be 1
    // TODO: Write a loop that will multiply the base by iteslf the number of times specified by exponent.
    // Hint: Use this statement inside the loop: result = result * base 
    return result;
}

// 9. Use a for loop to check a number to see if it is prime.
function isPrime2(maybePrime) {
    let isPrimeNumber = true;
    // TODO: In a loop, divide maybePrime by the loop counter. If there is ever a remainder from
    // the division, this isn't a prime number.
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