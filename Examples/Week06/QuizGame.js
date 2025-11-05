/* Quiz game that uses arrays and loops
   Example for CS 133JS
   Brian Bird, 11/5/2025 */

      "use strict"
   // Parallel Arrays with questions and right answers

   const questions = ["Can an array hold more than one value?", 
                        "Should arrays be declared with const?",
                        "Is it a good idea to mix data types in arrays?",
                        "Does the array index start at 1?"];
   const answers = [true, true, false, false];

   // Instructions to the quiz taker
   alert("Answer yes or no for each question.");

   // Ask and check questions
   for (let i = 0; i < questions.length; i++)
   {
    let answer = prompt(questions[i]);
    answer = answer.toLowerCase();
    const isYes = answer === "yes" || answer === "y";
    if (isYes === answers[i])
    {
        alert("That's right!");
    }
    else
    {
        alert("Sorry, that's wrong.");
    }
   }

   /* Things to change:
      - Add another question
      - Count the number of right and wrong answers
      - List all the right answers at the end of the quiz.
      - Use a ternary expression to check for right answers
      - Put i/o code into a function
      - Put the questions and answers into a 2D array
      - Use a For...of loop
      - Add a loop so you can take the quiz again
   */
      
