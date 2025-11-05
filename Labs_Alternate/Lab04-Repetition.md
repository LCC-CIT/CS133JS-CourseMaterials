<h1>Lab 4: Repetition (Loops)</h1>

[toc]

## Instructions

- For each of the topics below, read the concepts and study the examples. Do the problems by opening a browser console and writing the code there. You can copy and paste the code into a file if you wish, but you don't need to submit it. 

- Do three problems each for topics 1 through 4&mdash;choose the ones you will learn the most from. 

- Do two problems each for topics 5 through 8.

- You don't need to get a code review.

- Reporting: In the Moodle Lab 4 assignment submission text area, tell me which sections you compeled (hopefully 1 through 8). 
- If you have questions don't hesitate to send me a message.  
- If you want me to check some of your code you can put it in a file and upload it to Moodle.

## 1. The `while` Loop

**Concept:** The `while` loop is a *pretest* loop, which means it checks a condition *before* each iteration. If the condition is `true`, the code block inside the loop runs. If the condition is `false`, the loop is skipped entirely. This loop is ideal when you don't know exactly how many times you need to loop, but you know the *condition* that should stop the loop. Variables used in the condition must be declared *outside* the loop.

**Example:**

```JavaScript
// A simple countdown from 5 down to 1
let count = 5;

while (count > 0) {
  console.log(count);
  count--; // This is the same as count = count - 1
}

console.log("Liftoff!");
```

**Problems:**

1. - Declare a variable `num` and set it to `0`.
   - Write a `while` loop that continues as long as `num` is less than `5`.
   - Inside the loop, print `num` to the console and then increment `num` by 1.
2. - Write a `while` loop for simple input validation.
   - First, `prompt` the user to "Enter a number greater than 10" and store the result in a variable `num`.
   - Write a `while` loop that continues as long as `num` is less than or equal to `10`.
   - Inside the loop, `alert` "Invalid number!" and then `prompt` the user again for a number.
3. - Declare a variable `stars` and set it to `"*"` (a single star string).
   - Write a `while` loop that continues as long as the `stars.length` is less than 6.
   - Inside the loop, print `stars` to the console, and then add another star to the `stars` string (e.g., `stars = stars + "*";`).
4. - Declare `let playerHealth = 100;` and `let monsterHit = 15;`.
   - Write a `while` loop that runs as long as `playerHealth` is greater than `0`.
   - Inside the loop, subtract `monsterHit` from `playerHealth` and then print the new `playerHealth` to the console.
   - After the loop, print `"Player defeated."`.

------



## 2. The `do...while` Loop

**Concept:** The `do...while` loop is a *post-test* loop. This means it runs its code block *first*, and *then* checks the condition at the end. Because the check is at the end, a `do...while` loop is **guaranteed to run at least once**, even if the condition is false from the start. This makes it perfect for situations like input validation where you need to get input from the user at least one time.

**Example:**

```javascript
let userChoice;

// This loop will run at least once to get the user's input.
do {
  userChoice = prompt("Enter 'q' to quit.");
} while (userChoice !== 'q'); // The condition is checked *after* the block runs.

console.log("You have quit the program.");
```

**Problems:**

1. - Declare a variable `x` and set it to `10`.
   - Write a `do...while` loop that prints `x` to the console.
   - The loop's condition should be `while (x < 5)`.
   - Observe that the console prints `10` one time, even though the condition was immediately false.
2. - Write a `do...while` loop for input validation.
   - Inside the `do` block, `prompt` the user "Are you sure? (yes/no)" and store the answer in a variable `response`.
   - The loop should continue `while` the `response` is not equal to `"yes"`.
3. - Write a password entry loop based on the algorithm in the notes.
   - Inside a `do` block, `prompt` the user to "Enter a password (at least 8 characters):" and store it in `password`.
   - The loop should continue `while` `password.length` is less than `8`.
   - After the loop, print `"Password accepted."`.
4. - Declare `let magicWord = "hello";`.
   - Write a `do...while` loop. Inside the `do` block, `prompt` the user for a guess and store it in `userGuess`.
   - The loop should continue `while` `userGuess` is not equal to `magicWord`.
   - After the loop, print `"You guessed it!"`.

------



## 3. The `for` Loop

**Concept:** The `for` loop is a "counter-controlled" loop, ideal for when you know exactly how many times you want to iterate. Its header combines three parts, separated by semicolons:

1. **Initialization:** Runs once *before* the loop starts (e.g., `let i = 0`).
2. **Condition:** Checked *before* every iteration (e.g., `i < 10`).
3. **Increment/Decrement:** Runs *after* every iteration (e.g., `i++`).

A variable declared with `let` in the initialization part has *block scope*, meaning it only exists inside the loop.

**Example:**

```javascript
// Print all even numbers from 0 up to 10
for (let i = 0; i <= 10; i += 2) {
  // 'i' starts at 0, runs as long as it's <= 10, and adds 2 each time
  console.log(i);
}
```

**Problems:**

1. - Write a `for` loop that counts *down*.
   - Initialize a counter `i` at `5`.
   - The condition should be `i > 0`.
   - The final expression should be `i--`.
   - Inside the loop, print `i` to the console.
2. - Write a `for` loop that runs exactly 3 times (e.g., from `i = 0` to `i < 3`).
   - Inside the loop, print the string `"JavaScript!"` to the console.
3. - Declare a variable `total` and set it to `0` *before* the loop.
   - Write a `for` loop that starts `let i = 1` and continues as long as `i <= 10`.
   - Inside the loop, add the value of `i` to `total` (e.g., `total += i;`).
   - After the loop, print the final value of `total` (which should be 55).
4. - Write a `for` loop that starts `let i = 1` and continues up to `i <= 20`.
   - Inside the loop, use an `if` statement to check if `i` is a multiple of 3 (Hint: `i % 3 === 0`).
   - If the condition is true, print `i` to the console.

------



## 4. Nested Loops

**Concept:** A nested loop is a loop that exists inside the code block of another loop (the "outer" loop). The "inner" loop will run to completion for *each single iteration* of the "outer" loop. This pattern is very common for working with 2D data, like grids, tables, or running a game multiple times.

**Example:**

```javascript
// Print coordinate pairs
for (let x = 1; x <= 3; x++) {
  // This outer loop runs 3 times (x=1, x=2, x=3)
  for (let y = 1; y <= 2; y++) {
    // This inner loop runs 2 times for EACH outer loop run
    console.log("x: " + x + ", y: " + y);
  }
}
// Total logs: 3 * 2 = 6
```

**Problems:**

1. - Write an outer `for` loop that runs 2 times (e.g., `i < 2`).
   - Inside the outer loop, write an inner `for` loop that runs 3 times (e.g., `j < 3`).
   - Inside the *inner* loop, print the string `"Inner loop"`.
   - (You should see the string print 6 times in total).
2. - Write an outer `for` loop that runs 4 times (for `row = 1` to `4`).
   - *Inside* the outer loop (but before the inner loop), declare `let line = "";`.
   - Write an inner `for` loop that runs 4 times (for `col = 1` to `4`).
   - Inside the inner loop, add an asterisk to the line: `line += "*";`.
   - *After* the inner loop (but still inside the outer loop), print `line`. This will draw a 4x4 square.
3. - Write an outer `for` loop for `week = 1` to `week = 2`.
   - Inside the outer loop, write an inner `for` loop for `day = 1` to `day = 7`.
   - Inside the inner loop, print the string `"Week: " + week + ", Day: " + day`.
4. - Create a "play again" loop, similar to the one in the notes.
   - Write a `do...while` loop that will be the outer loop.
   - Inside the `do` block, write a `for` loop that counts from 1 to 3 and prints the count.
   - After the `for` loop (but still inside the `do` block), `prompt` the user "Play again? (yes/no)" and store the answer in `playAgain`.
   - The `do...while` loop's condition should be `while (playAgain == "yes")`.

------



## 5. Interrupting Loops (`break` and `continue`)

**Concept:** You can interrupt a loop's normal flow using the `break` and `continue` keywords.

- `break`: This keyword immediately **terminates** the loop and execution jumps to the very next statement *after* the loop.

- continue: This keyword stops the current iteration and jumps back to the top of the loop, starting the next iteration (it will re-check the condition and run the increment in a for loop).

  These should be used sparingly, as they can make code harder to read.

**Example:**

```javascript
// 'break' to find the first multiple of 7
for (let i = 1; i <= 20; i++) {
  if (i % 7 === 0) {
    console.log("Found the first multiple of 7: " + i);
    break; // Stop the loop
  }
}

// 'continue' to skip the number 5
for (let i = 1; i <= 8; i++) {
  if (i === 5) {
    continue; // Skip the rest of this iteration
  }
  console.log(i); // This line is skipped when i is 5
}
```

**Problems:**

1. - Write a `for` loop that counts from 1 to 10.
   - Inside the loop, `print` `i` to the console.
   - *After* the print statement, add an `if` statement that checks if `i` is greater than 5. If it is, `break`.
2. - Write a `for` loop that counts from 1 to 10.
   - Inside the loop, add an `if` statement that checks if `i` is equal to `7`. If it is, `continue`.
   - *After* the `if` statement, print `i` to the console (the number 7 should be missing).
3. - Write a `while(true)` loop (this creates an infinite loop).
   - Inside the loop, `prompt` the user for a password.
   - Add an `if` statement that checks if the password is `"secret"`.
   - If it is, `alert` "Access granted" and then use `break` to exit the loop.
4. - Write a `for` loop that counts from 1 to 10.
   - Inside the loop, add an `if` statement that checks if `i` is an *odd* number (Hint: `i % 2 !== 0`).
   - If it is odd, use `continue`.
   - After the `if` statement, print `i` to the console (this will only print the even numbers).

Based on the provided lecture notes, your tutorial already covers the essentials: the "big three" loops (`while`, `do while`, `for`) and the key techniques for managing them (`break`, `continue`, and nested loops).

The main concepts you're missing aren't new *types* of loops, but rather one critical pitfall and a couple of common *patterns* that use these loops.

Here are the topics I'd suggest adding:



## 6. Infinite Loops

This is a crucial concept, mentioned as something to "watch out for" in the debugging section, but it deserves its own lesson. It's the most common way loops go wrong.

- **Concept:** An infinite loop is a loop whose condition *never* becomes false, causing it to run forever (or until the browser or user intervenes). This usually happens when the loop's variable is never incremented, or the condition is written in a way that can never be met.

- **Example (don't run this, or be ready to close the tab!):**

  ```javascript
  // This loop never ends because 'i' never changes.
  let i = 0;
  while (i < 10) {
    console.log("This will print forever!");
    // Whoops! We forgot to add i++
  }
  
  // This for loop is also infinite.
  for (let i = 1; i > 0; i++) {
    // 'i' will always be greater than 0, so this never stops.
    console.log("And ever...");
  }
  ```

  **Problems:** These are "find the bug" or "explain why" problems.

  1. *Look at the code below. Why will it run forever? How would you fix it so it only counts from 1 to 5?*

     JavaScript

     ```
     let count = 1;
     while (count != 10) {
       console.log(count);
       count += 2; // Add 2 each time
     }
     ```

  2. *Explain the mistake in this `for` loop that makes it infinite.*

     JavaScript

     ```
     for (let i = 0; i < 5; i--) {
       console.log("Help I'm stuck!");
     }
     ```



## 7. The Accumulator Pattern

**Concept:** The accumulator pattern is a common technique where a loop is used to "accumulate" a value over time. You initialize a variable *before* the loop, and then *inside* the loop, you repeatedly update it. This is used for finding sums, products, or building up a string.

**Example:**

```javascript
// Use an accumulator to find the sum of numbers 1 through 5
let total = 0; // 1. Initialize the accumulator

for (let i = 1; i <= 5; i++) {
  total = total + i; // 2. Update the accumulator in the loop
}

// 3. Use the final value
console.log("The final total is: " + total); // Prints 15
```

**Problems:**

1. *Create a variable `product` and set it to `1`.
   - Write a `for` loop that runs from 1 to 5.
   - Inside the loop, multiply `product` by `i` (`product = product * i`).
   - After the loop, print `product` (this calculates a factorial, 5!).
2. *Initialize an empty string `let allNames = "";`.
   - Write a `for` loop that runs 3 times.
   - Inside the loop, `prompt` the user for a name.
   - Add the name (and a space) to your `allNames` string.
   - After the loop, print the `allNames` string.



## 8. The Sentinel-Controlled Loop

**Concept:** A sentinel-controlled loop is a loop (usually a `while` or `do...while`) that continues to run until the user enters a special, specific value—the "sentinel"—that signals the loop should stop.

**Example:**

```javascript
let input;
let total = 0;
const SENTINEL = "done"; // The special value to stop

while (input !== SENTINEL) {
  input = prompt("Enter a number to add, or type 'done' to finish.");

  if (input !== SENTINEL) {
    total += parseInt(input); // Add the number to our total
  }
}

console.log("Your total is: " + total);
```

**Problems:**

1. *Write a `do...while` loop.
   - Inside the loop, `prompt` the user: "Enter a magic word".
   - The loop should continue `while` the user's input is not equal to `"please"`.
   - After the loop, print `"Thank you!"`.
2. *Initialize an empty string `let longString = "";` and a variable `let input;`.
   - Write a `while` loop that continues as long as `input` is not `"stop"`.
   - Inside the loop, `prompt` the user for a word (or "stop").
   - *If* the input is not `"stop"`, add the word to `longString`.
   - After the loop, print `longString`.

