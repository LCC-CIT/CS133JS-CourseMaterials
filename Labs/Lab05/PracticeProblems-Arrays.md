<h1>Practice Problems Using Arrays in JavaScript</h1>

These problems are designed to give you practice using the ternary operator, if statements, and switch statements.

<h2> Table of Contents</h2>

[TOC]

## Programming Problems

The solutions to all of these problems are at the bottom of the page. The best way to learn from thesis is  to solve these problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

You can also use the solutions to these problems as examples to help you understand loop concepts so you can solve other problems.



### Initializing Arrays and Accessing Elements

1. Write a program that initializes an array with four string values, then gets the value in the second element of the array and logs it to the console.

2. Write a program that initializes an array of integers, then prints the value at the third index of the array.

3. Write a program that initializes an array of strings, then prints the value at the last index of the array.

4. Write a program that initializes an array of booleans, then prints the value at the second index of the array.


### Using Arrays in Loops

For these problems, solve them using loops, not by using any of the built-in array methods like `indexOf(...)`,  `splice(..)`, etc.

1. Write a program that initializes an array with integer values, then  finds the index of the first occurrence of a specified value in the  array and prints it.
2. Write a program that takes an array of numbers as input and returns the sum of all the numbers.
3. Write a program that takes an array of strings as input and returns the length of the longest string in the array.
10. Write a program that takes an array of strings as input and returns a new array that contains the same strings, but in reverse order.

### Using Array Methods

For these problems, solve them using built-in array methods like `indexOf(...)`,  `splice(..)`, etc. 

1. Write a program that initializes an array with integer values, then prints the index of the first occurrence of the value 3 using the `indexOf()` function.
2. Write a program that initializes an array with integer values, then  finds the index of the first occurrence of a specified value in the  array and prints it. 
3. Write a program that initializes an array with string values, that are in alphabetical order, then adds three more strings to the array in the right alphabetical order.
   - Use a loop to find the right alphabetical location to insert a new string.
   - Put the code that inserts the new strings in a function so that it can be reused for each string you insert.
4. Write a program that initializes an array with integer values, then removes all the odd numbers from the array. Hint: use a loop and the `%` operator to find the even numbers.




### 2D (Nested) Arrays

1. Write a program that initializes a 2D array of integers and prints the sum of all the elements to the console.
1. Write a program that initializes a 2D array with  integers and prints the largest element to the console.
1. Write a program that initializes a 2D array with strings and prints the longest string to the console.
1. Write a program that initializes a 2D array with integers, fills a new array with the sum of each column, and prints that array to the console.



## Solutions

These are solutions to the problems above. Note that for each problem, there may be more than one good solution, so if you came up with a different solution that works, it isn't wrong. But, you should compare your solution to this one and see which one is simplest and easiest to understand.

### Initializing Arrays and Accessing Elements

1. ```javascript
   const myArray = ['apple', 'banana', 'cherry', 'date'];
   console.log(myArray[1]); // logs 'banana' to the console
   ```

2. ```JavaScript
   const arr = [1, 2, 3, 4, 5]; // initialize an array of integers
   const value = arr[2]; // get the value at the third index (index 2)
   console.log(value); // print the value
   ```

3. ```JavaScript
   const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry']; // initialize an array of strings
   const value = arr[arr.length - 1]; // get the value at the last index
   console.log(value); // print the value
   ```

4. ```JavaScript
   const arr = [true, false, true, true, false]; // initialize an array of booleans
   const value = arr[1]; // get the value at the second index
   console.log(value); // print the value
   ```



### Using Arrays in Loops

1. ```JavaScript
  const numberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
   const numberToFind = 7;  // number to search for
   let i = 0;
   // Iterate until either the number is found or the end of the array is reached
   for (; i < numberArray.length && numberArray[i] != numberToFind; i++) 
   { 
     // nothing needs to be done inside this loop 
   }
   
   if (i === numberArray.length) {
     console.log("Value not found in array");
   } else {
     console.log("Index of the first occurrence of value is: " + i);
   }
   ```
   
2. ```JavaScript
  const numbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
   let sum = 0;
   for (let number of numbers)
   {
     sum += number;
   }
   console.log ("The sum of the numbers in the array is: " + sum);
   ```
   
3. ```JavaScript
  const fruits = ["apple", "bannanna", "lemon", "orange", "pear", "persimmon"]; 
   let longestName = ""; // start with no name.
   for (let fruit of fruits)
   {
   	if (fruit.length > longestName.length)
     {
       longestName = fruit;
     }
   }
   console.log(longestName); // print the longest fruit name
   ```
   
4. ```JavaScript
  const fruits = ["apple", "bannanna", "lemon", "orange", "pear", "persimmon"]; 
   const reverseFruits = [];
   // Fill the reverseFruits array with fruit names in the reverse order.
   for (let i = fruits.length; i >= 0; i--)
   {
     reverseFruits[reverseFruits.length] = fruits[i];
   }
   // Print contents of the reverseFruits array
   for (let fruit of reverseFruits)
   {
     console.log(fruit);
   }
   ```
   
   

### Using Array Methods

1. ```javascript
   const arr = [1, 2, 3, 4, 5]; // initialize an array of integers
   const index = arr.indexOf(3); // get the index of the first occurrence of 3 using indexOf
   console.log(index); // print the index
   ```
   
2. ```javascript
  const numberArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
   const numberToFind = 17;  // number to search for
   let indexOfNumber = numberArray.indexOf(numberToFind);
   if (-1 === indexOfNumber) {
     console.log("Value not found in array");
   } else {
     console.log("Index of the first occurrence of value is: " + indexOfNumber);
   }
   ```
   
3. ```javascript
  let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'pear'];
  
   // function to insert a string into the correct alphabetical position in the array
   function insertInOrder(arr, str) {
     let index = 0;
     while (index < arr.length && arr[index] < str) {
       index++;
     }
     arr.splice(index, 0, str);
   }
   
   // insert two new strings into the fruits array in the correct alphabetical order
   insertInOrder(fruits, 'cranberry');
   insertInOrder(fruits, 'orange');
   insertInOrder(fruits, 'fig');
   
   // log the resulting array to the console
   console.log(fruits);
   ```
   
4. ```javascript
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   
   // loop through the array and remove all odd numbers
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 !== 0) {
       numbers.splice(i, 1);
     }
   }
   
   // log the resulting array to the console
   console.log(numbers);
    
   ```



### 2D (Nested) Arrays

1. ```javascript
  const arr = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
   ];
   
   let sum = 0;
   
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
       sum += arr[i][j];
     }
   }
   
   console.log("Sum of all elements in the array: " + sum);
   ```
   
2. ```JavaScript
   let arr = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
   ];
   
   let largest = arr[0][0];
   
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
       if (arr[i][j] > largest) {
         largest = arr[i][j];
       }
     }
   }
   
   console.log("Largest element in the array: " + largest);
   ```
   
3. ```JavaScript
   let arr = [
     ["apple", "banana", "orange"],
     ["cat", "dog", "elephant"],
     ["red", "green", "blue", "yellow"],
   ];
   
   let longest = "";
   
   for (let i = 0; i < arr.length; i++) {
     for (let j = 0; j < arr[i].length; j++) {
       if (arr[i][j].length > longest.length) {
         longest = arr[i][j];
       }
     }
   }
   
   console.log("Longest string in the array: " + longest);
   ```
   
4. ```javascript
   let arr = [
     [1, 2, 3],
     [4, 5, 6],
     [7, 8, 9],
   ];
   
   let columnSums = [];
   
   for (let i = 0; i < arr[0].length; i++) {
     let sum = 0;
     for (let j = 0; j < arr.length; j++) {
       sum += arr[j][i];
     }
     columnSums.push(sum);
   }
   
   console.log("Sum of each column: " + columnSums);
   ```
   
   

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Course Materials by [Brian Bird](https://profbird.dev), written winter 2023, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 