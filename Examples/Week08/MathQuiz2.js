"use strict";

function addTest(number1, number2, answer)
{
    let rightAnswer = number1 + number2;
    let isCorrect = answer == rightAnswer;
    return isCorrect ? "right" : "wrong";
}

function subtractTest(number1, number2, answer)
{
    let rightAnswer = number1 - number2;
    let isCorrect = answer == rightAnswer;
    return isCorrect ? "right" : "wrong";
}
