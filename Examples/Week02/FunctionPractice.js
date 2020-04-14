function helloWorld()
{
  alert("Hello world");
}

function hello(name)
{
  alert("Hello " + name);
}

function toPercent(decimal)
{
 return decimal * 100 + "%";
}

function fullName(firstName, lastName)
{
    return firstName + " " + lastName;
}

function quizQuestion(number1, number2)
{
    var sum = prompt("What is the sum of " + number1 + " and " + number2);
    var check = sum == number1 + number2;
    alert("Your answer is " + check);
    return check;
}