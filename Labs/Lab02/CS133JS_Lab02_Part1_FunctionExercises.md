---
title: Lab 2, Part 1
description: JavaScript console exercises using functions.
keywords: function
material: Lab Instructions
generator: Typora
author: Brian Bird
---



# Lab 2, Part 1: Function Exercises

For this part of the lab you will use the [*CS133JS_Lab02_Part1.html*](CS133JS_Lab02_Part1.html) file provided (right-click on the link, then click on "save-as" to save the file to your computer). You will write a second file named *Lab02_Part1.js*. 

For each problem, write a function in your .js file. In the .html file, below the comment that starts with "TODO:", write code to call that function. In the .js file, write the function below the "TODO:" comment.

1. `jsIsAwesome`&mdash;a function with no parameters and no return value:
   - Write a definition for a function that pops up an alert that says "JavaScript is awesome!".
   - Write the code in the .html file to call the function.
2. `favAnimal`&mdash;a function with a parameter and a return value
   - Write a definition for a function that:
     - Has a parameter for the name of an animal.
     - Generates the phrase "The ___________ is my favorite animal.", where the code fills in the blank with the animal name.
     - Returns the resulting phrase using a return statement.
   - Write the code in the .html file to call the function with a "hard coded" animal name and display the returned phrase on the web page.
3. `calcAvgPrice`&mdash;a function with three parameters and a return value:
   - Write a definition for a function that calculates an average price and:
     - Has three parameters. Each one for the price of an item.
     - Calculates the average of the three prices.
     - Returns the average.
   - In the .html file, write the code to call the function with three "hard coded" numbers and display the result.
     Note: You can round the result to two decimal points using the [toFixed() method](https://www.w3schools.com/jsref/jsref_tofixed.asp) on the variable holding the average price.
4. `countLetters`&mdash;a function with one parameter and one return value:
   - Write a definition for a function that:
     - Has a paramenter for a sentence of any length.
     - Counts the number of letters, spaces, and punctuation in the sentence. 
       (Use the [length property](https://www.w3schools.com/jsref/jsref_length_string.asp) to get this number)
     - Returns the length of the sentence.
     - Write the code to call the function and display the result.
5. `quizQuestion`&mdash;a function with one parameter, and a return value:
   - Write a definition for a function that:
     - Has a parameter for the name of the capital of Oregon.
     - Checks to see if the user entered the right name (Salem).
     - Returns true or false.
   - Write the code to call the function and display the result.
6. `mathQuestion`&mdash;a function with three parameters and a return value:
    - Write a definition for a function that:
      - Has two parameters for numbers to be multiplied by each other.
      - Has one parameter for the answer enterd by the user.
      - Checks to see if the user entered the right answer .
      - Returns true or false.
    - Write the code to call the function and display the result.
7. `calcMpg`&mdash;a function with two parameters and a return value:
    - Write a definition for a function that:
      - Has two parameters, one for miles driven, and one for gallons of gas used
      - Calculates the miles per gallon of gas used.
        *mpg= miles/gallons*
      - Returns the MPG.
    - Add a function call and code to display the result to the .html file.
8. `convertTemp`&mdash;a function with one parameter and a return value:
    - Write a definition for a function that:
      - Has one parameter, for temperature in Fahrenheit.
      - Calculates the temperature in Celsius
        *temperatureC = (temperatureF - 32)* * *5/9*
      - Returns the temperature in Celsius.
    - Add a function call and code to display the result to the .html file.