<h1>More Practice Problems Using Loops in JavaScript</h1>

Note to instructor: These problems are either not the most appropriate use of each loop type or use programming features that students haven't learned by week 4.

## Programming Problems

Try to solve these problems without looking at the solutions. When you are done you can compare your solutions to the solutions at the bottom of the page.

### While Loops

1. Write a while loop that prints the numbers 1 through 10 to the console.
2. Write a while loop that counts backwards from 10 to 1, and prints each number to the console.
3. Write a while loop that calculates the sum of the numbers 1 through 10, and prints the sum to the console.
4. Write a while loop that prompts the user to enter a string, and keeps  prompting until the user enters a string that is at least 5 characters  long. Then, print the string to the console.
5. Write a while loop that generates random numbers between 1 and 10 until  it generates a number that is greater than 8. Then, print the final  number to the console.
6. Write a while loop that prompts the user to enter a password, and keeps  prompting until the user enters a password that contains at least one  uppercase letter, one lowercase letter, and one number. Then, print the  password to the console.



## Solutions

### While loops

1. ```JavaScript
   let i = 1;
   while (i <= 10) {
     console.log(i);
     i++;
   }
   ```

2. ```javascript
   let i = 10;
   while (i >= 1) {
     console.log(i);
     i--;
   }
   ```

3. ```JavaScript
   let i = 1;
   let sum = 0;
   while (i <= 10) {
     sum += i;
     i++;
   }
   console.log(sum);
   ```

   

4. ```javascript
   let input = prompt("Enter a string with at least 5 characters:");
   while (input.length < 5) {
     input = prompt("Please enter a string with at least 5 characters:");
   }
   console.log(input);
   ```

5. ```JavaScript
   let number = Math.floor(Math.random() * 10) + 1;
   while (number <= 8) {
     number = Math.floor(Math.random() * 10) + 1;
   }
   console.log(number);
   
   ```

6. ```JavaScript
   let password = prompt("Enter a password that contains at least one uppercase letter, one lowercase letter, and one number:");
   while (!(password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/))) {
     password = prompt("Please enter a password that contains at least one uppercase letter, one lowercase letter, and one number:");
   }
   console.log(password);
   ```

7. 



Here is a practice problem:  
Count the number of digits in an integer.

The computer can't just look at the integer and count the digits like we do. One solution that would work for a computer is to repeatedly divide by 10, counting each time you divide, until the result of the division is 1 or less. 

### Writing the Algorithm

1. Get an integer as input
2. Set a counter to 0 
3. Divide the integer by 10
4. Add 1 to the counter.
5. If the result > 1, go back to step 3
6. Display the counter

### Testing the Algorithm

What if you're not sure whether step 4 should check for result > 0, result > 1, or result >= 1. Try some numbers (test data) and see what happens. The table shows a the data at step 5

- For example, integer = 123

| counter | result | result > 0 | result > 1 | result >= 1 |
| ------- | ------ | ---------- | ---------- | ----------- |
| 1       | 12.3   | true       | true       | true        |
| 2       | 1.23   | true       | true       | true        |
| 3       | .123   | true       | false      | false       |
| 4       | .0123  | true       | false      | false       |

Which condition gave us the right count? Will the condition, result > 0, ever become false?

- Let's try this again for integer = 100

| counter | result | result > 0 | result > 1 | result >= 1 |
| ------- | ------ | ---------- | ---------- | ----------- |
| 1       | 10     | true       | true       | true        |
| 2       | 1      | true       | false      | true        |
| 3       | .1     | true       | false      | false       |

### The Solution

```javascript
number = prompt("Enter an integer");
 counter = 0;
do
    {
        counter++;
        number /= 10;
        console.log(result);
    } while(number > 1);
console.log(counter);
```



## 
