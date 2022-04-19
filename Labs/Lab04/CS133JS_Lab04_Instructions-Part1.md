<h1>Lab 4, Part 1 Instructions</h1>

**CS 133JS, Beginning Programming: JavaScript**

## Overview

The objective of this lab is to give you practice using:  while loops, do-while loops, for loops 

## Exercises

For each of the exercises, complete the "stub" function in the file, [CS133JS_Lab04_Part1.js](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part1.js).

Check each completed function by opening  [CS133JS_Lab04_Part1.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part1.html), which calls each of the functions and checks to see if they return the correct values based on the arguments that it passes to the functions.

1. Complete the code for the *do while* loop so that it counts from 2 to 10 by twos.

2. Complete the code for the *while loop* so that it counts from 2 to 10 by twos.

3. Complete the code for the *for* loop so that it counts from 2 to 10 by twos.

4. Use a *do while* loop to count the number of characters in a sentence stored in a string variable.

   Count every character except the period at the end of the sentence. You can use the method[^1], [charAt()](https://www.w3schools.com/jsref/jsref_charat.asp) to get a single letter from a text string[^2].

   Use a do while loop to increment through the string, one character at a time, counting the characters, until the period at the end of the sentence is reached.

5. Use a *while* loop to count the number of words in a sentence stored in a string variable.

   Assume there is one space between each word, so counting the spaces will give you a count one less than the number of words. 

   Use a while loop to increment through the string, one character at a time, counting the spaces, until the period at the end of the sentence is reached.

6. Use a *while* loop to test a number passed to a function to see if it is prime.

   Prime numbers are numbers that are not divisible without a remainder by any other number. You can check a number by using a loop to try dividing the number in question by every number between 2 and one less than the number itself. Use the modulo, `%` operator to do the division and check for a remainder.

7. Use a *do while* loop to return a whole square root of a number, if it exists.

   Use a do while loop to increment a number and square it. stop incrementing if the square is greater than or equal to the number passed to the function. If it is not equal, then return zero otherwise return the number&mdash;which is the square root.

8. Use a *for* loop to raise a number (the base) to a power (the exponent). Remember that:

   - Raising a number to a power is the same as repeatedly multiplying the number by itself. The number of times it is multiplied is one less than the exponent.
   - Any number with an exponent of 0 is 1.

9. Use a *for* loop to test a number to see if it is prime. (This is the same problem as exercise 6, but you will solve it with a for loop this time.)


[^1]: Methods are pretty much the same as functions, but you call them using the name of some *object*, like a string variable, with a dot and then the name of of the method and any arguments in parenthesis. For example: `someText.charAt(0)`
[^2]: The characters in a string are counted with the first character being at position 0. For example, the 'T', in this string is at position 0: `let someText = "The only thing constant in life is change.";` If we want to get the 6th character, 'n', we would execute the statement: `let character = someText.charAt(5);`

