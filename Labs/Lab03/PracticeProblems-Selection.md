<h1>Practice Problems Using Selection in JavaScript</h1>

These problems are designed to give you practice using the ternary operator, if statements, and switch statements.

<h2> Table of Contents</h2>

[TOC]

## Programming Problems

The solutions to all of these problems are at the bottom of the page. The best way to learn from thesis is  to solve these problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

You can also use the solutions to these problems as examples to help you understand loop concepts so you can solve other problems.

### Ternary Statements

1. Write a program that checks to see if a number is between two values using the ternary operator.
2. Write a program that checks to see if a string is empty or not using the ternary operator.
3. Write a program that checks to see if a string contains a specific character using the ternary operator.

### If Statements

1. Write a program that checks to see if a given number is positive, negative, or zero. If the number is positive, print "The number is positive". If it is negative, print "The number is negative". If it is zero, print "The number is zero".

2. Write a program that takes two numbers as input and prints the larger number. If the two numbers are equal, print "The numbers are equal".

3. Write a program that takes a user's age and for the following ages prints a messge letting them know what activities they are old enough to do:

   - Under 18: not old enough to vote
   - 18 and over, but under 21: old enough to vote, but not to drink.
   - 21 and over, but under 25: old enough to drink, but not old enough to rent a car.
   - 25 and over: can vote, drink, and rent a car.

     


### Switch Statements

1. Write a program that checks to see if a character is a vowel or consonant using switch statements.
1. Write a program that takes a number as an input and outputs the corrsponding name of a day of the week as output.




### Nested If Statements

1. Write a program that checks to see if a number is divisible by both 3 and 5 using nested if statements.
1. Write a program that checks to see if a number is positive and even using nested if statements.
1. Write a program to suggest that a person wear a wool coat if the temperature is below 45 F. or use an umbrella if it is raining, or wear a rain coat if it is below 45 and raining.



## Solutions

These are solutions to the problems above. Note that for each problem, there may be more than one good solution, so if you came up with a different solution that works, it isn't wrong. But, you should compare your solution to this one and see which one is simplest and easiest to understand.

### Ternary Statements

These solutions use constants as input (rather than prompting a user for input) and use the ternary operator in the solution to the problem. Output is logged to the console.

1. ```JavaScript
  /* Write a program that checks to see if a number is between two values using the ternary operator. */
  
  // Input is simulated with constants
  const num = 5;   // number to check
  const min = 1;
  const max = 10;
  
  const result = num >= min && num <= max ? 'between' : 'not between';
  console.log(result); // Output: between
  ```
  
   
  
2. ```JavaScript
  /* Write a program that checks to see if a string is empty or not using the ternary operator. */
  
  const str = '';
  const result = str.length === 0 ? 'empty' : 'not empty';
  console.log(result); // Output: empty
  ```
  
  
  
3. ```JavaScript
  /* Write a program that checks to see if a string contains a specific character using the ternary operator. */
  
  const str = 'hello';
  const char = 'e';
  const result = str.includes(char) ? 'contains' : 'does not contain';
  console.log(result); // Output: contains
  ```



### If Statements

These programs prompt the user to enter input using the `prompt` function, which returns a string. We then use the `parseInt` function to convert the string to a number. Finally, we use if statements to determine the appropriate output and print it to the  console using the `console.log` function.

1. ```JavaScript
   /* Write a program that checks to see if a given number is positive, negative, or zero. If the number is positive, print "The number is positive". If it is negative, print "The number is negative". If it is zero, print "The number is zero". */
   
   let num = parseInt(prompt("Enter a number:"));
   
   if (num > 0) {
     console.log("The number is positive");
   } else if (num < 0) {
     console.log("The number is negative");
   } else {
     console.log("The number is zero");
   }
   ```
   
   
   
2. ```JavaScript
   /* Write a program that takes two numbers as input and prints the larger number. If the two numbers are equal, print "The numbers are equal". */
   
   let num1 = parseInt(prompt("Enter the first number:"));
   let num2 = parseInt(prompt("Enter the second number:"));
   
   if (num1 > num2) {
     console.log(`The larger number is ${num1}`);
   } else if (num2 > num1) {
     console.log(`The larger number is ${num2}`);
   } else {
     console.log("The numbers are equal");
   }
   ```
   
   
   
3. ```JavaScript
   /* Write a program that takes a user's age and for the following ages prints a messge letting them know what activities they are old enough to do:
   
   - Under 18: not old enough to vote
   - 18 and over, but under 21: old enough to vote, but not to drink.
   - 21 and over, but under 25: old enough to drink, but not old enough to rent a car.
   - 25 and over: can vote, drink, and rent a car. */
   
   let age = 25;
   
   if (age < 18) {
     console.log("You are not old enough to vote.");
   } else if (age >= 18 && age < 21) {
     console.log("You are old enough to vote but not old enough to drink.");
   } else if (age >= 21 && age < 25) {
     console.log("You are old enough to vote and drink but not old enough to rent a car.");
   } else {
     console.log("You are old enough to vote, drink, and rent a car.");
   }
   ```

### Switch Statements

1. ```javascript
   /* Write a program that checks to see if a character is a vowel or consonant using switch statements. */
   
   let char = "a";
   
   switch (char.toLowerCase()) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
         console.log("Vowel");
         break;
      default:
         console.log("Consonant");
   }
   ```
   
   


2. ```javascript
   /* Write a program that takes a number as an input and outputs the corrsponding name of a day of the week as output. */
   
   let day = 3;
   
   switch (day) {
     case 0:
       console.log("Sunday");
       break;
     case 1:
       console.log("Monday");
       break;
     case 2:
       console.log("Tuesday");
       break;
     case 3:
       console.log("Wednesday");
       break;
     case 4:
       console.log("Thursday");
       break;
     case 5:
       console.log("Friday");
       break;
     case 6:
       console.log("Saturday");
       break;
     default:
       console.log("Invalid day number");
   }
   ```

   



### Nested If Statements

1. ```javascript
   /* Write a program that checks to see if a number is divisible by both 3 and 5 using nested if statements. */
   
   let num = 15;
   
   if (num % 3 == 0) {
     if (num % 5 == 0) {
       console.log("Divisible by both");
     } else {
       console.log("Divisible by only 3");
     }
   } else {
     console.log("Not divisible by either");
   }
   ```
   
   
   
2. ```JavaScript
   /* Write a program that checks to see if a number is positive and even using nested if statements. */
   
   let num = -2;
   
   if (num > 0) {
     if (num % 2 == 0) {
       console.log("Number is positive and even");
     } else {
       console.log("Number is positive but odd");
     }
   } else {
     console.log("Number is not positive");
   }
   ```
   
3. ```JavaScript
   /* Write a program to suggest that a person wear a wool coat if the temperature is below 45 F. or use an umbrella if it is raining, or wear a rain coat if it is below 45 and raining. */
   
   let temperature = 40;
   let isRaining = true;
   
   if (temperature < 45) {
     if (isRaining) {
       console.log("Wear a rain coat");
     } else {
       console.log("Wear a wool coat");
     }
   } else if (isRaining) {
     console.log("Use an umbrella");
   }
   ```
   
   
   
   

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Course Materials by [Brian Bird](https://profbird.dev), written sprint <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 