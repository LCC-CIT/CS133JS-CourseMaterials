"use strict";

// question object constructor--the objects are used to make math problems
function Question(firstNumber, operator, secondNumber) {
    this.firstNumber = firstNumber;   // first term
    this.operator = operator;         // operator: "+" or "-"
    this.secondNumber = secondNumber;  // second term
}


// Global array of math quiz question objects
let questions = [
    new Question(12, "+", 15),  // first term, operator, second term
    new Question(111, "+", 21),
    new Question(2200, "+", 1011),
    new Question(10, "-", 2),
    new Question(222, "-", 50),
    new Question(1234, "-", 122)
]


// showQuestion puts the questions on the page
function showQuestions() {
    // Put the question string into the span element that is inside an li element for each question
    for(let i = 0; i < questions.length; i++)
    {
        let question = questions[i];
        let idSelector = "#q" + (i + 1);  // calculate the id for the li that the span is inside of.
        document.querySelector(idSelector + " span").innerHTML = 
            question.firstNumber + " " + question.operator + " " + question.secondNumber;
    }
}


// showResult puts "right" or "wrong" onto the page in the span after "Your answer is: "
 // Parameters:
 //    questionId - li element id attribute
 //    firstNumber - The word "right" or "wrong"
 // Returns nothing
function showResult(questionId, result)
{
 // Show whether the answer was right or wrong
 document.querySelector(questionId + " p span").innerHTML = result;
}


// checkAnswer checks to see if the user's answer is correct.
// Parameter:
//   questionId - the ID number of the question (IDs start at 1)
// Returns nothing
function checkAnswer(questionId)
{
    let idSelector = "#q" + questionId;  // This is so we can match the id attributes of the li elements
    let userAnswer = document.querySelector(idSelector + " input").value;
    let question = questions[questionId - 1];   // Array index starts at 0, question ID numbers start at 1
    let rightAnswer = 0;
    // Calculate the answer based on whether the we are adding or subtracting
    if (question.operator == "+") {
        rightAnswer = question.firstNumber + question.secondNumber;
    }
    else if (question.operator == "-") {
        rightAnswer = question.firstNumber - question.secondNumber;
    }
    else {
        rightAnswer = NaN;  // An invalid operator was used
    }
    let isCorrect = (userAnswer == rightAnswer) ? "right" : "wrong";
    document.querySelector(idSelector + " p span").innerHTML = isCorrect;
}