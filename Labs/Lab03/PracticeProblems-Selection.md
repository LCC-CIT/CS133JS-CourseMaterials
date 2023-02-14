<h1>Practice Problems Using Selection in JavaScript</h1>

These problems are designed to give you practice using the ternary operator, if statements, and switch statements.

<h2> Table of Contents</h2>

[TOC]

## Programming Problems

The solutions to all of these problems are at the bottom of the page. The best way to learn from thesis is  to solve these problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

You can also use the solutions to these problems as examples to help you understand loop concepts so you can solve other problems.

### Ternary Statements



### If Statements

1. Write a program that checks if a given number is positive, negative, or zero. If the number is positive, print "The number is positive". If it is negative, print "The number is negative". If it is zero, print "The number is zero".

2. Write a program that takes two numbers as input and prints the larger number. If the two numbers are equal, print "The numbers are equal".

3. Write a program that takes a number as input and checks if it is even or odd. If it is even, print "The number is even". If it is odd, print "The number is odd".

    

### Switch Statements

1. 




### Nested If Statements

1. 



## Solutions

These are solutions to the problems above. Note that for each problem, there may be more than one good solution, so if you came up with a different solution that works, it isn't wrong. But, you should compare your solution to this one and see which one is simplest and easiest to understand.

### Ternary Statements

1. ```JavaScript
   
   ```
   
   
   
2. ```JavaScript
   
   ```
   
3. ```JavaScript
   
   ```



### If Statements

These programs prompt the user to enter input using the `prompt` function, which returns a string. We then use the `parseInt` function to convert the string to a number. Finally, we use if statements to determine the appropriate output and print it to the  console using the `console.log` function.

1. ```JavaScript
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
   let num = parseInt(prompt("Enter a number:"));
   
   if (num % 2 === 0) {
     console.log("The number is even");
   } else {
     console.log("The number is odd");
   }
   ```

4. ```JavaScript
   
   ```
   
   

### Switch Statements

1. ```javascript
   
   ```
   
2. ```javascript
   
   ```
   
3. ```Javascropt
   
   
   ```
   
4. ```javascript
   
   ```



### Nested If Statements

1. ```javascript
   for (let i = 1; i <= 5; i++) {
     let row = "";
     for (let j = 1; j <= i; j++) {
       row += "*";
     }
     console.log(row);
   }
   ```

2. ```JavaScript
   let input = prompt("Enter a string:");
   let isPalindrome = true;
   for (let i = 0; i < input.length / 2; i++) {
     if (input.charAt(i) !== input.charAt(input.length - i - 1)) {
       isPalindrome = false;
       break;
     }
   }
   if (isPalindrome) {
     console.log(input + " is a palindrome.");
   } else {
     console.log(input + " is not a palindrome.");
   }
   ```

3. ```JavaScript
   let number = parseInt(prompt("Enter a positive integer:"));
   let factor = 1;
   while (factor <= number) {
     if (number % factor === 0) {
       console.log(factor);
     }
     factor++;
   }
   ```

4. ```javascript
   let num;
   do {
     num = parseInt(prompt("Enter a number between 1 and 10: "));
   } while (num < 1 || num > 10);
   let i = 1;
   do {
     let j = 1;
     do {
       console.log("*");
       j++;
     } while (j <= i);
     i++;
   } while (i <= num);
   ```

   

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Course Materials by [Brian Bird](https://profbird.dev), written winter 2023, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 