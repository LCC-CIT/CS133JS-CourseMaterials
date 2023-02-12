<h1>Practice Problems Using Arrays in JavaScript</h1>

These problems are designed to give you practice using the ternary operator, if statements, and switch statements.

<h2> Table of Contents</h2>

[TOC]

## Programming Problems

The solutions to all of these problems are at the bottom of the page. The best way to learn from thesis is  to solve these problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

You can also use the solutions to these problems as examples to help you understand loop concepts so you can solve other problems.



### Initializing Arrays and Accessing Elements

1. Write a program that initializes an array of integers, then prints the value at the third index of the array.

2. Write a program that initializes an array of strings, then prints the value at the last index of the array.

3. Write a program that initializes an array of booleans, then prints the value at the second index of the array.

   

### Using Arrays in Loops

1. Write a program that initializes an array of integers with values, then  finds the index of the first occurrence of a specified value in the  array and prints it.
2. Write a program that takes an array of numbers as input and returns the sum of all the numbers.
3. Write a program that takes an array of strings as input and returns the length of the longest string in the array.
4. Write a program that takes two arrays of numbers as input and returns a new array that contains only the elements that are common to both arrays.
5. Write a program that takes an array of numbers as input and returns a new array that contains only the even numbers from the original array.
6. Write a program that takes an array of numbers as input and returns the average of all the numbers.
7. Write a program that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.
8. Write a program that takes an array of numbers as input and returns a new array that contains the square of each number.
9. Write a program that takes an array of numbers as input and returns the largest number in the array.
10. Write a program that takes an array of strings as input and returns a new array that contains the same strings, but in reverse order.
11. Write a program that takes an array of numbers as input and returns a new array that contains only the unique numbers from the original array (i.e., no duplicates).



1.   


### Using Array Methods and Properties

1. Write a program that initializes an array of integers, then prints the index of the first occurrence of the value 3 using the `indexOf()` function.
1. 




### 2D (Nested) Arrays

1. 



## Solutions

These are solutions to the problems above. Note that for each problem, there may be more than one good solution, so if you came up with a different solution that works, it isn't wrong. But, you should compare your solution to this one and see which one is simplest and easiest to understand.

### Initializing Arrays and Accessing Elements

1. ```JavaScript
  const arr = [1, 2, 3, 4, 5]; // initialize an array of integers
   const value = arr[2]; // get the value at the third index (index 2)
   console.log(value); // print the value
   ```
   
2. ```JavaScript
   const arr = ['apple', 'banana', 'cherry', 'date', 'elderberry']; // initialize an array of strings
   const value = arr[arr.length - 1]; // get the value at the last index
   console.log(value); // print the value
   ```
   
3. ```JavaScript
   const arr = [true, false, true, true, false]; // initialize an array of booleans
   const value = arr[1]; // get the value at the second index
   console.log(value); // print the value
   ```



### Using Arrays in Loops



1. In this program, an array of integers is initialized with values and the value to search for is set to  `7`. The variable `index` is initialized to -1 as a flag to indicate if the value is not found in the array. The `for` loop iterates through the array and checks each element to see if it equals the specified value. If it finds a match, it sets the `index` variable to the index of that element and breaks out of the loop. If it doesn't find a match, it leaves `index` at -1. Finally, the program checks the value of `index` and prints the appropriate message. If `index` is still -1, it means the value was not found in the array, so it  prints "Value not found in array". Otherwise, it prints the index of the first occurrence of the specified value.
   
   ```JavaScript
   const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
   const value = 7;
   let index = -1;
   
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] === value) {
       index = i;
       break;
     }
   }
   
   if (index === -1) {
     console.log("Value not found in array");
   } else {
     console.log(`Index of the first occurrence of ${value} is: ${index}`);
   }
   ```
   
2. ```JavaScript
   
   ```
   
3. ```JavaScript
   
   ```
   
4. ```JavaScript
   
   ```
   
   

### Using Array Methods and Properties

1. ```javascript
   const arr = [1, 2, 3, 4, 5]; // initialize an array of integers
   const index = arr.indexOf(3); // get the index of the first occurrence of 3 using indexOf
   console.log(index); // print the index
   ```
   
2. ```javascript
   
   ```
   
3. ```Javascropt
   
   
   ```
   
4. ```javascript
   
   ```



### 3D (Nested) Arrays

1. ```javascript
   
   ```
   
2. ```JavaScript
   
   ```
   
3. ```JavaScript
   
   ```
   
4. ```javascript
   
   ```
   
   

------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Course Materials by [Brian Bird](https://profbird.dev), written winter 2023, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 