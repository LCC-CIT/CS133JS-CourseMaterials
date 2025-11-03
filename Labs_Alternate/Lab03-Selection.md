<h1>Lab 3: Selection</h1>

[TOC]

## Instructions

For each of the topics below, do read the concepts and consider the examples. Do the problems by opening a browser console and writing the code there. You can copy and paste the code into a file if you wish, but you don't need to submit it. You don't need to get a code review.

Reporting: In the Moodle Lab 2 assignment submission text area, tell me which sections you compeled (hopefully 1 through 12). If you have questions send me a message.  If you want me to check some of your code you can put it in a file and upload it to Moodle.



Here are additional exercises based on the provided lecture notes, following the same pattern.

------



### 19. The Ternary Operator (`? :`)

**Concept:** The ternary operator is a compact, one-line shortcut for a simple `if...else` statement. It's an *expression*, which means it evaluates to a single value. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The syntax is: `condition ? expression_if_true : expression_if_false`.

**Example:**

```javascript
let age = prompt("How old are you?");

// If age >= 18 is true, legalStatus becomes "adult".
// Otherwise, legalStatus becomes "child".
let legalStatus = age >= 18 ? "adult" : "child";

console.log(legalStatus);
```

**Problems:**

1. What do do if it's raining

   - Declare a variable `isRaining` and set it to `true`. 
   - Use a ternary operator to create a new variable `activity`. 
   - If `isRaining` is `true`, `activity` should be `"Read a book"`. 
   - Otherwise, it should be `"Go for a walk"`. 
   - Print `activity` to the console.

2. Check a login password

   - Use `prompt()` to ask for a password. 

   - Store the result in a variable `password`. 
   - Use a ternary operator to create a `loginMessage` variable. 
   - If `password` is exactly equal to `"secret-Password42"`, the message should be `"Access Granted"`. 
   - Otherwise, it should be `"Access Denied"`. 
   - Print `loginMessage`.

3. Check for a passing grade

   - Declare a variable `score` and set it to `85`. 
   - Use a ternary operator to set a variable `grade`. 
   - If `score` is greater than or equal to `60`, `grade` should be `"Pass"`. 
   - Otherwise, `grade` should be `"Fail"`. 
   - Print the `grade`.

4. Calculate shipping cost for an online purchase

   - Use `prompt()` to ask, "How many items are in your cart?". 

   - Convert the answer to a number and store it in `itemCount`. 
   - Use a ternary operator to set a `shippingCost` variable.
   -  If `itemCount` is greater than `0`, the `shippingCost` should be `10`. 
   - Otherwise, it should be `0`. 
   - Print `"Your shipping cost is $" + shippingCost`.

------



### 20. `if` Statement (Single Branch)

**Concept:** The single-branch `if` statement is the simplest selection structure. It specifies a block of code&mdash;one or more statements, usually in curly braces `{}` (and must be in curly braces if there is more than one statement) that will be executed *only if* a given condition evaluates to `true`. If the condition is `false`, the block of code is skipped, and the program continues.

**Example:**

```javascript
let degrees = 40;

// The condition (degrees < 45) is true...
if (degrees < 45) {
  // ...so this code block runs.
  alert("Wear a coat");
}
```

**Problems:**

1. Cold temperature warning
   - Declare a variable `temperature` and set it to `30`. 
   - Write an `if` statement that checks if `temperature` is less than `32`. 
   - If it is, print `"Warning: Freezing temperature!"` to the console.
2. Check a password
   - Use `prompt()` to ask, "What is the password?". 
   - Store the answer in `password`. 
   - Write an `if` statement that checks if `password` is exactly equal to `"JavaScript"`. 
   - If it is, print `"Welcome, user!"` to the console.
3. Check to see if a product is in stock
   - Declare a variable `itemsInStock` and set it to `0`. 
   - Write an `if` statement that checks if `itemsInStock` is equal to `0`. 
   - If it is, print `"Error: Item is out of stock."` to the console.
4. Ask for a number and alert if it's over 100
   - Use `prompt()` to ask for a number and store it in `numString`. 
   - Convert it to a number using `parseInt()` and store it in `num`. 
   - Write an `if` statement that checks if `num` is greater than `100`. 
   - If it is, print to the console `"That's a big number!"` 
   - And print `"The number was " + num`. 
      (Put the second print statement inside the same code block)

------



### 21. `if...else` Statement (Two Branches)

**Concept:** The `if...else` statement provides two possible paths for execution. If the condition in the `if` parentheses is `true`, the first block of code runs. If the condition is `false`, the code block after the `else` keyword runs. One of the two blocks will always be executed.

**Example:**

```javascript
let degrees = 70;

if (degrees < 45) {
  // This block is skipped because (70 < 45) is false.
  alert("Wear a coat");
} else {
  // This block runs.
  alert("Enjoy the warm weather!");
}
```

**Problems:**

1. Check to see if a number is positive or negative
   - Use `prompt()` to ask, "Enter a number." 
   - Convert it to a number and store it in `num`. 
   - Write an `if...else` statement. 
   - If `num` is greater than or equal to `0`, print `"Positive"`. 
   - Otherwise, print `"Negative"`.
2. Check for an admission ticket
   - Declare a variable `hasTicket` and set it to `false`. 
   - Write an `if...else` statement. 
   - If `hasTicket` is `true`, print `"Please proceed to the gate."`. 
   - Otherwise, print `"You must buy a ticket first."`.
3. Determine whether an order qualifies for free shippinig
   - Use `prompt()` to ask, "What is your total purchase amount?". 
   - Convert it to a number and store it in `total`. 
   - Write an `if...else` statement. If `total` is greater than `50`, print `"You qualify for free shipping!"`. 
   - Otherwise, print `"Shipping will cost $5."`.
4. Determine whether a number is odd.
   - Declare `let num = 15;`. 
   - Write an `if...else` statement that checks if `num` is evenly divisible by 2 (using the modulo operator `%`). 
   - If it is, print `"The number is even."`. 
   - Otherwise, print `"The number is odd."`.

------



### 22. Logical Operators in `if` Statements

**Concept:** Logical operators allow you to combine multiple conditions into a single expression that evaluates to `true` or `false`.

- `&&` (AND): The entire expression is `true` *only if* both conditions are `true`.
- `||` (OR): The entire expression is `true` *if at least one* of the conditions is `true`.
- `!` (NOT): This inverts the value of a single condition, turning `true` to `false` and `false` to `true`.

**Example:**

```javascript
let degrees = 55;
let wind = 12;
let name = "Chewbacca";

// AND: Both must be true
if (degrees < 60 && wind > 10) {
  alert("Wear a jacket"); // This will run (55 < 60 is true AND 12 > 10 is true)
}

// NOT: Inverts the condition
if (!(name == "Han Solo")) {
  alert("This is not your spacecraft!"); // This will run
}
```

**Problems:**

1. (AND) Declare `let age = 20;` and `let hasDriversLicense = true;`. Write an `if` statement that prints `"You are legal to drive"` only if `age` is 16 or greater *and* `hasDriversLicense` is `true`.
2. (OR) Declare `let isHoliday = false;` and `let dayOfWeek = "Saturday";`. Write an `if...else` statement. If `isHoliday` is `true` *or* `dayOfWeek` is `"Saturday"`, print `"You don't have to work today!"`. Otherwise, print `"Time to go to work."`.
3. (NOT) Declare `let isMember = false;`. Write an `if...else` statement that uses the `!` operator. If the user is *not* a member (`!isMember`), print `"Please sign up to continue."`. Otherwise, print `"Welcome back, member!"`.
4. (Combination) Use `prompt()` to ask for a username and store it in `user`. Use `prompt()` again to ask for a password and store it in `pass`. Write an `if` statement that prints `"Login successful"` only if `user` is `"admin"` *and* `pass` is `"12345"`.

------



### 23. `if...else if...else` Statement (Multiple Branches)

**Concept:** This structure is used when you have more than two possible outcomes. It checks each condition in order from top to bottom. As soon as it finds a condition that is `true`, it runs that condition's code block and then *skips all the rest*. If no `if` or `else if` conditions are `true`, the final `else` block runs.

**Example:**

```javascript
let degrees = 42;

if (degrees < 32) {
  // 42 < 32 is false, so it skips this block.
  alert("Wear a warm coat");
} else if (degrees < 45) {
  // 42 < 45 is true, so it runs this block.
  alert("Wear a jacket");
} else {
  // This block is skipped because the one above it ran.
  alert("Enjoy the warm weather!");
}
```

**Problems:**

1. Convert a score to a grade
   - Declare a variable `score` and set it to `78`. 
   - Write an `if...else if...else` statement that prints: `"A"` 
   - if `score` is 90 or above, `"B"` if `score` is 80 or above, `"C"` if `score` is 70 or above, and `"F"` for anything else.
2. Determine whether a number is positive, zero, or negative
   - Use `prompt()` to ask, "Enter a number". 
   - Convert it to a number and store it in `num`. 
   - Write an `if...else if...else` statement that prints: `"Positive"` if `num` is greater than 0, `"Negative"` 
   - if `num` is less than 0, and `"Zero"` if `num` is exactly 0.
3. Declare `let trafficLight = "yellow";`. Write an `if...else if...else` statement. If `trafficLight` is `"red"`, print `"Stop"`. If `trafficLight` is `"yellow"`, print `"Slow down"`. If `trafficLight` is `"green"`, print `"Go"`.
4. Use `prompt()` to ask, "What time is it (0-23)?". Convert the answer to a number and store it in `hour`. Write an `if...else if...else` statement that prints: `"Good morning"` if `hour` is less than 12, `"Good afternoon"` if `hour` is less than 18 (but 12 or greater), and `"Good evening"` for all other times.

------



### 24. The `switch` Statement



**Concept:** A `switch` statement is an alternative to a long `if...else if...else` chain, but it is only used for checking if a single variable is *equal* to one of several specific values. It compares the variable in parentheses against each `case`. If it finds a match, it runs the code from that point down until it hits a `break` keyword. The `default` case runs if no other `case` matches.

**Example:**

JavaScript

```
let color = prompt("What is a common color for a mouse?");
let response = "";

switch (color) {
  case "grey":
  case "gray": // Multiple cases can "fall through" to the same code
    response = "Yes!";
    break; // The 'break' stops execution here.
  case "brown":
    response = "OK, sometimes";
    break;
  default: // 'default' is like the final 'else'
    response = "I don’t think so";
}
console.log(response);
```

**Problems:**

1. Declare `let numericGrade = 4;`. Write a `switch` statement that checks `numericGrade`. Print `"Excellent"` for case 4, `"Good"` for case 3, `"Average"` for case 2, and `"Poor"` for case 1. Add a `default` case that prints `"Invalid grade"`.
2. Use `prompt()` to ask, "Enter a direction (north, south, east, west)". Store it in `direction`. Write a `switch` statement that prints: `"You are going North"` for the `"north"` case, `"You are going South"` for the `"south"` case, `"You are going East"` for the `"east"` case, and `"You are going West"` for the `"west"` case.
3. Declare `let fruit = "Apple";`. Write a `switch` statement that checks `fruit`.
   - Cases `"Apple"` and `"Pear"` should both print `"This is a pome fruit."` (Hint: let the first case "fall through" to the second).
   - Case `"Banana"` should print `"This is a tropical fruit."`.
   - The `default` case should print `"Unknown fruit type."`.
4. Use `prompt()` to ask, "What is your subscription level? (basic, pro, premium)". Store it in `level`. Write a `switch` statement.
   - Case `"premium"` should print `"Full access + support"`.
   - Case `"pro"` should print `"Full access"`.
   - Case `"basic"` should print `"Limited access"`. (Hint: Be careful with your `break` statements so they don't all fall through!)
   - The `default` case should print `"Please subscribe"`.

These lab instructions were written by Brian Bird using Gemini 2.5 Pro, 10/29/2025.