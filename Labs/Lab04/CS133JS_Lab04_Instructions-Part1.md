<h1>Lab 4 Instructions, Repetition</h1>

**CS 133JS, Beginning Programming: JavaScript**

## Overview

The objective of this lab is to give you practice using:  while loops, do-while loops, for loops and nested loops.

## Part 1: Exercises

For each of the exercises, complete the function "stub" in the starter file, CS133JS_Lab04_Part1_Starter.js.

1. Use a *do while* loop to count the number of characters in a sentence stored in a string variable.

   Count every character except the period at the end of the sentence. You can use the method[^1], [charAt()](https://www.w3schools.com/jsref/jsref_charat.asp) to get a single letter from a text string[^2].

   Use a do while loop to increment through the string, one character at a time, counting the characters, until the period at the end of the sentence is reached.

2. Use a *while* loop to count the number of words in a sentence stored in a string variable.

   Assume there is one space between each word, so counting the spaces will give you a count one less than the number of words. 

   Use a while loop to increment through the string, one character at a time, counting the spaces, until the period at the end of the sentence is reached.

3. Use a *while* loop to test a number passed to a function to see if it is prime.

   Prime numbers are numbers that are not divisible without a remainder by any other number. You can find them by using a loop to try dividing the number in question by every number between 2 and one less than the number itself. Use the modulo, `%` operator to do the division and check for a remainder.

4. Use a *do while* loop to count the number of words in a sentence, just like you did for problem 1. 

   Does testing the loop condition at the bottom of the loop have any effect on the word count?

## Part 2: Web Apps

For each of these pages:

- Put the code that does processing or calculations in a function in a .js file.
- Put I/O operations in a separate function in the .js file. I/O operations include:
  - prompt
  - document.getElementById
  - document.write 
- In your .html files, use `onload="someIOFunction()"` to call your I/O function after the page has loaded.

 

1. New Year’s Eve Countdown 
   Enter number of hours until midnight, count down the hours and show minutes too.
   Example output if the user entered 4:
   Hours, Minutes
   4,      240
   3,      180
   2,      120
   1,      60
   0,       0

2. Kindergarten Admission Age

Add an input validation loop to web app II from the previous lab. 

·    Limit user input to reasonable values. 

·    Pop up an alert telling the user what the acceptable input range is.

·    Keep prompting the user for input until it is valid.

 

III. Elementary School Grade Level

Modify your web app III from the last lab by:

\1.   Adding an input validation loop as you did for web app II above.

\2.   Adding a loop that lets the user enter another age. After the results have been shown on the page, ask the user if they want to run the program again.

 

**Submitting your lab work on Moodle**

Beta Version

Post the following in the *Lab Beta forum*:

\1.   The web pages you created for part 2.
 (Zip the files for you web pages and attach them to the post.)

\2.   A code review of your lab partner’s web page for part 2. 
 (Review one of your lab partners’ web pages using the Code Review Form provided.)

 

Code Review

\1.   Submit a copy of the code review above to the *Lab Code Review assignment*.
 

Production Version
 Based on the review and helpful advice from your lab partner, you may revise your web page. On the code review from your lab partner, complete the “Production” column to show what you revised. Upload the following to the *Lab Production Version* assignment:

\1.   A Word document containing all the code you ran for part 1.

\2.   The web pages you created for part 2.

\3.   The code review from your lab partner with the “Prod” column filled in by you.

[^]: 
[^1]: Methods are pretty much the same as functions, but you call them using the name of some *object*, like a string variable, with a dot and then the name of of the method and any arguments in parenthesis. For example: `someText.charAt(0)`
[^2]: The characters in a string are counted with the first character being at position 0. For example, the 'T', in this string is at position 0: `let someText = "The only thing constant in life is change.";` If we want to get the 6th character, 'n', we would execute the statement: `let character = someText.charAt(5);`

