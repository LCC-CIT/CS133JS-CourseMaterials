<h1>Practice Problems Using Loops in JavaScript</h1>



<h2> Table of Contents</h2>

[TOC]

## Programming Problems

The solutions to all of these problems are at the bottom of the page. The best way to learn from these is  to solve these problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

You can also use the solutions to these problems as examples to help you understand loop concepts so you can solve other problems.

### While Loops

1. Write a while loop that asks the user to enter a number greater than 10, and keeps asking until the user enters a valid number. Then, print the  number to the console.
2. Write a while loop that prompts the user to enter a string, and then prints the string backwards to the console using the `.charAt()` method. Hint: you can get the number of characters in a string using the `length` property; like this: `int numberChars = someString.length;`
3. Write a while loop that prompts the user to enter a sentence, and then  capitalizes the first letter of every word in the sentence. Print the  capitalized sentence to the console.



### Do While Loops

1. Write a do while loop that prompts the user to enter a password, and  keeps prompting until the user enters a password that is at least 8  characters long. Hint: use the string length property.

2. Write a do while loop that prompts the user to enter a positive number,  and keeps prompting until the user enters a number that is positive.

3. Write a do while loop that prompts the user to enter a string, and then  prints the string to the console in all uppercase letters. Repeat the  loop until the user enters "quit".

4. Write a do while loop that prompts the user to enter a number, and then  calculates the sum of all the numbers entered by the user. Repeat the  loop until the user enters 0.

   

### For Loops

1. Write a for loop that prints the even numbers from 2 to 20 to the console.

2. Write a for loop that calculates the product of the numbers from 1 to 5, and then prints the product to the console.

3. Write a for loop that prompts the user to enter a string, and then prints the string with each word capitalized.

4. Write a for loop that prompts the user to enter a string, and then counts the number of vowels in the string.

   

### Nested Loops

1. Write a nested for loop that prints a pyramid pattern with 5 rows, where each row has a number of asterisks equal to the row number.

2. Write a nested while loop that prompts the user to enter a string, and then checks if the string is a palindrome.

3. Write a nested while loop that prompts the user to enter a positive  integer, and then prints the factors of the number to the console.

4. Write a nested do-while loop that prompts the user to enter a number  between 1 and 10, and then prints a right triangle of asterisks with the number of rows equal to the input value.

   

## Solutions

These are solutions to the problems above. Note that for each problem, there may be more than one good solution, so if you came up with a different solution that works, it isn't wrong. But, you should compare your solution to this one and see which one is simplest and easiest to understand.

### While loops

1. ```JavaScript
   let number = prompt("Enter a number greater than 10");
   while (number <= 10) {
     number = prompt("Please enter a number greater than 10");
   }
   console.log(number);
   ```

   

2. ```JavaScript
   let input = prompt("Enter a string ending in a period");
   let i = input.length - 1;
   let backwards = "";
   while (i >= 0) {
     backwards += input.charAt(i);
     i--;
   }
   console.log(backwards);
   ```

3. ```JavaScript
   let sentence = prompt("Enter a sentence:");
   let i = 0;
   let capitalized = "";
   while (i < sentence.length) {
     let char = sentence.charAt(i);
     if (i === 0 || sentence.charAt(i-1) === " ") {
       capitalized += char.toUpperCase();
     } else {
       capitalized += char;
     }
     i++;
   }
   console.log(capitalized);
   ```



### Do While Loops

1. ```JavaScript
   let password;
   do {
     password = prompt("Enter a password with at least 8 characters:");
   } while (password.length < 8);
   
   ```

2. ```JavaScript
   let number;
   do {
     number = parseInt(prompt("Enter a positive number:"));
   } while (number <= 0);
   ```

3. ```JavaScript
   let input;
   do {
     input = prompt("Enter a string, or type 'quit' to exit:");
     if (input !== "quit") {
       console.log(input.toUpperCase());
     }
   } while (input !== "quit");
   ```

4. ```JavaScript
   let input;
   let sum = 0;
   do {
     input = parseInt(prompt("Enter a number (or 0 to exit):"));
     sum += input;
   } while (input !== 0);
   console.log(sum);
   ```

   

### For Loops

1. ```javascript
   for (let i = 2; i <= 20; i += 2) {
     console.log(i);
   }
   
   ```

2. ```javascript
   let product = 1;
   for (let i = 1; i <= 5; i++) {
     product *= i;
   }
   console.log(product);
   ```

3. ```Javascropt
   let input = prompt("Enter a string:");
   let words = input.split(" ");
   let output = "";
   for (let i = 0; i < words.length; i++) {
     let word = words[i];
     output += word.charAt(0).toUpperCase() + word.slice(1) + " ";
   }
   console.log(output.trim());
   
   ```

4. ```javascript
   let input = prompt("Enter a string:");
   let vowelCount = 0;
   for (let i = 0; i < input.length; i++) {
     let letter = input.charAt(i).toLowerCase();
     if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
       vowelCount++;
     }
   }
   console.log("There are " + vowelCount + " vowels in the string.");
   ```



### Nested Loops

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