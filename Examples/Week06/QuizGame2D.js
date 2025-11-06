/* Quiz game that uses arrays and loops
   Example for CS 133JS
   Brian Bird, 11/5/2025 */

"use strict"
// 2D Array with questions and right answers
const qsAndAs = [
   ["1. Can an array hold more than one value?", true],
   ["2. Should arrays be declared with const?", true],
   ["3. Is it a good idea to mix data types in arrays?", false],
   ["4. Does the array index start at 1?", false]
];

// Instructions to the quiz taker
console.log("Answer yes or no for each question.");

// Ask and check questions
for (let i = 0; i < qsAndAs.length; i++) {
   let answer = prompt(qsAndAs[i][0]);
   answer = answer.toLowerCase();
   const isYes = (answer === "yes" || answer === "y");
   if (isYes === qsAndAs[i][1]) {
      alert("That's right!");
   }
   else {
      alert("Sorry, that's wrong.");
   }
}

// List all the questions and answers
for (let qAndA of qsAndAs) {
   document.write("Q: " + qAndA[0] + " A: " + qAndA[1] + "\n");
}


/* Things to change:
   - Add another question
   - Count the number of right and wrong answers
   - Use a ternary expression to check for right answers
   - Put i/o code into a function
   - Use a For...of loop
   - Add a loop so you can take the quiz again
*/

