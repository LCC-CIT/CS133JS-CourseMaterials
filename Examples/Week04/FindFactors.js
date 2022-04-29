/* Written by Brian Bird, 4/29/22
   Goes with the lecture notes on problem solving for CS133JS
*/
'use strict'

// 1. Start a list of factors
let factors = "1, "; // One is always a factor
// 2. Read the number
let theNumber = parseFloat(prompt("Enter a number"));
// 3a. Come up with all possible candidates for factors
for (let candidate = 1; candidate < theNumber; candidate++) {
    // 3b. Try dividing by a candidate
    if (theNumber % candidate === 0) {
        factors += candidate + ", ";
    }
}
// 4. Add the number itself to the list
factors += theNumber;
alert("The factors are: " + factors);