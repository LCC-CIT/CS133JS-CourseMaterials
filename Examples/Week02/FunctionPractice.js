/* The purpose of these functions is to show how to
   write different kinds of functions.
   Written by Brian Bird, April 14, 2020  */

// A function with no parameters and no return value
function helloWorld()
{
  alert("Hello world");
}

// A function with one parameter and no return value
function hello(name)
{
  alert("Hello " + name);
}

// A function with one parameter and a return value
function toPercent(decimal)
{
 return decimal * 100 + "%";
}

// A function with two parameters and a return value
function fullName(firstName, lastName)
{
    return firstName + " " + lastName;
}

// A function with two parameters and a return value
function quizQuestion(number1, number2)
{
    var sum = prompt("What is the sum of " + number1 + " and " + number2);
    var check = sum == number1 + number2;
    alert("Your answer is " + check);
    return check;
}