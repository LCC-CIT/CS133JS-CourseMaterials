<h1>Lab 3: Selection</h1>

[TOC]

## Instructions

For each of the topics below, read the concepts and consider the examples. Do the problems by opening a browser console and writing the code there. You can copy and paste the code into a file if you wish, but you don't need to submit it. You only need to do two problems for each topic&mdash;choose the ones you will learn the most from. You don't need to get a code review.

Reporting: In the Moodle Lab 3 assignment submission text area, tell me which sections you compeled (hopefully 1 through 12). If you have questions send me a message.  If you want me to check some of your code you can put it in a file and upload it to Moodle.

### 1. Comparison Operators

**Concept:** Comparison operators are used to compare two values. The result of a comparison is always a boolean value: `true` or `false`. For example, `>` checks if the left value is greater than the right, while `==` checks if two values are equal. The strict equality operator `===` is often preferred because it checks for both equal value and equal data type, avoiding potential issues where `"7" == 7` might be true.

**Example:**

```javascript
let a = 7;
let b = 8;

console.log(a < b);      // Prints true
console.log(a == "7");   // Prints true
console.log(a === "7");  // Prints false, because the types are different
console.log(b >= 8);     // Prints true
```

**Problems:**

1. - Declare a variable `myAge` and set it to your age.
   - Declare a second variable `friendAge` and set it to a friend's age.
   - Use `console.log()` to check if `myAge` is greater than `friendAge` and see the result.
2. - Declare a variable `pizzasOrdered` and set it to `10`.
   - Declare a variable `pizzasEaten` and set it to `10`.
   - Use `console.log()` to check if `pizzasOrdered` is less than or equal to `pizzasEaten` and see the result.
3. - Declare a variable `requiredScore` and set it to the number `100`.
   - Declare a variable `myScore` and set it to the string `"100"`.
   - Use `console.log()` to check if `requiredScore` is strictly equal (`===`) to `myScore` and observe the result.
4. - Use `prompt()` to ask the user, "How many hours did you sleep?".
   - Convert the user's input to a number and store it in a variable called `hoursSlept`.
   - Use `console.log()` to check if `hoursSlept` is greater than or equal to `8`.

------



### 2. Conditional Expressions

**Concept:** A conditional expression is any piece of code that JavaScript can evaluate to a boolean value (`true` or `false`). These are the "questions" you ask in your code. They are most often used inside `if` statements and ternary operators to decide which path the program should take. Every comparison (e.g., `a < b`) and logical combination (e.g., `a < b && c > d`) is a conditional expression.

**Example:**

```JavaScript
let degrees = 50;
let wind = 15;

// The entire piece 'degrees < 60 && wind > 10' is a conditional expression.
let isJacketWeather = degrees < 60 && wind > 10;

// It evaluates to true, so isJacketWeather becomes true.
console.log(isJacketWeather);
```

**Problems:**

1. - Declare a variable `apples` with a value of `10`.
   - Declare a variable `oranges` with a value of `12`.
   - Write a conditional expression that evaluates to `true` if `oranges` are more numerous than `apples`.
   - Print the result of this expression to the console.
2. - Declare a variable `userName` and set it to your name.
   - Write a conditional expression that evaluates to `true` if `userName` has exactly your name in it.
   - Print the result of this expression to the console.
3. - Declare `let purchaseAmount = 120;`.
   - Declare `let hasCoupon = false;`.
   - Write a conditional expression that evaluates to `true` if `purchaseAmount` is over `100` **OR** `hasCoupon` is `true`.
   - Print the result of this expression to the console.
4. - Use `prompt()` to ask for a number and store it in `num`.
   - Write a single conditional expression that evaluates to `true` if `num` is greater than `0` **AND** is an even number (Hint: use the modulo `%` operator).
   - Print the result of this expression to the console.

### 3. The Ternary Operator (`? :`)

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



### 4. `if` Statement (Single Branch)

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



### 5. `if...else` Statement (Two Branches)

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

### 6. `if...else if...else` Statement (Multiple Branches)

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



### 7. Executing multiple conditional statements in a block

**Concept:** By default, a conditional statement like `if`, `else if` or `else` only controls the single line of code that immediately follows it. To execute multiple statements based on a single condition, you <u>must</u> group them together in a code block using curly braces `{ }`. It is considered a best practice to always use curly braces, even for a single statement, to make your code clearer and prevent accidental errors.

**Example:**

```JavaScript
let degrees = prompt("Enter the temperature");

// Check for an invalid temperature range.
if (degrees < -100 || degrees > 150) {
   // Because the condition is true, BOTH of these statements will run.
   alert("Please enter a temperature between -100 and 150");
   degrees = prompt("Enter the temperature again");
}
```

**Concept:** When you declare a variable using `let` or `const` inside a set of curly braces `{}`, that variable has *block scope*. This means it only exists and can only be used *inside* that specific block of code. If you try to access it from outside the curly braces where it was defined, you will get a `ReferenceError`. This is a key reason `let` is considered safer and more predictable than the older `var` keyword.

**Example:**

```javascript
let calculation = prompt("Enter 1 for circumference or 2 for area");
let radius = 10;

if (calculation == 1) {
  // 'circumference' is created and only exists inside these braces.
  let circumference = 2 * 3.141 * radius;
  console.log(circumference);
} else {
  // 'area' is created and only exists inside these braces.
  let area = 3.141 * radius * radius;
  console.log(area);
}

// This next line would cause an error because 'circumference' doesn't exist out here.
// console.log(circumference); // ReferenceError
```

**Problems:**

1 and 2 are relate to putting multiple statements in a block, 3 and 4 relate to block scope. If you are choosing just two problems, do one from each group.

1. - Use `prompt()` to ask "Do you want to save your work? (yes/no)". Store the answer in `wantsToSave`.
   - Write an `if` statement that checks if `wantsToSave` is equal to `"yes"`.
   - Inside the block, first print `"Saving your work..."` and then print `"Save complete."`.
2. - Declare a variable `cartTotal` and set it to `55`.
   - Declare a variable `couponCode` and set it to `"DISCOUNT10"`.
   - Write an `if` statement that checks if `cartTotal` is over 50.
   - Inside the block, print `"You qualify for a discount!"` and on a new line, print `"Apply code: " + couponCode`.
3. Declare a variable `let finalMessage = "";` before any `if` statements.
   - Write an `if...else` statement. In the `if` block, assign the value `"Success!"` to `finalMessage`. In the `else` block, assign the value `"Failure!"` to `finalMessage`.
   - After the entire `if...else` structure, print the `finalMessage` variable to the console. This works because the variable was declared in the outer scope.
4. Write an `if (true)` block. Inside it, declare `let x = 5;` and print its value.
   - Write a separate `if (true)` block immediately after the first one. Inside this second block, declare another variable also named `let x = 10;` and print its value.
   - Notice how this works without error, because each `x` is trapped within its own scope and they don't conflict with each other.

------



### 8. Boolean (Logical) Operators

**Concept:** Boolean, or logical, operators are used to combine multiple conditional expressions into a single `true` or `false` value.

- `&&` (**AND**) is true only if **both** of its operands are true.
- `||` (**OR**) is true if **either** of its operands is true.
- `!` (**NOT**) inverts a boolean value, turning `true` into `false` and `false` into `true`.

**Example:**

```JavaScript
let a = true;
let b = false;

console.log(a && a); // Prints true
console.log(a && b); // Prints false
console.log(a || b); // Prints true
console.log(!b);     // Prints true
```

**Problems:**

1. - Declare a variable `isSunny` and set it to `true`.
   - Declare a variable `isWarm` and set it to `true`.
   - Use `console.log()` to check if it is sunny **AND** warm.
2. - Declare a variable `day` and set it to `"Sunday"`.
   - Use `console.log()` to check if `day` is equal to `"Saturday"` **OR** `day` is equal to `"Sunday"`.
3. - Declare a variable `isLoggedIn` and set it to `false`.
   - Use `console.log()` to display the result of `!isLoggedIn` to check if a user is **NOT** logged in.
4. - Declare a variable `carFuel` and set it to `15`.
   - Declare a variable `isEmergency` and set it to `false`.
   - Use `console.log()` to check if `carFuel` is less than `20` **AND** `isEmergency` is `false`.

------



### 9. Logical Operators in `if` Statements

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



### 10. Nested `if` Statements

**Concept:** A nested `if` statement is an `if` statement that is placed inside the code block of another `if` or `else` statement. This is useful when you need to check a second condition only after a first condition has been proven true. An `if` statement nested inside another `if` is logically equivalent to using the `&&` (AND) operator.

**Example:**

JavaScript

```
let degrees = 55;
let wind = 12;

// First, check if degrees are less than 60.
if (degrees < 60) {
  // Only if the first condition is true, check if the wind is greater than 10.
  if (wind > 10) {
     alert("Wear a jacket"); // This runs because both conditions are true.
  }
}
```

**Problems:**

1. - Declare a variable `isLoggedIn` and set it to `true`.
   - Declare a variable `userRole` and set it to `"admin"`.
   - Write a nested `if` statement. The outer `if` should check if `isLoggedIn` is true. The inner `if` should check if `userRole` is `"admin"`.
   - If both are true, print `"Welcome, Admin!"` to the console.
2. - Use `prompt()` to ask the user, "Are you a member? (yes/no)". Store the answer in `isMember`.
   - Use `prompt()` again to ask, "What is your age?". Convert the answer to a number and store it in `age`.
   - Write a nested `if` statement. The outer `if` should check if `isMember` is `"yes"`.
   - The inner `if` should check if `age` is over 65. If both are true, print `"You qualify for the senior member discount."`.
3. - Declare a variable `password` and set its value to `"Swordfish123"`.
   - Write an `if` statement that checks if the password's length is greater than 10 characters.
   - Inside that `if` block, add a nested `if` statement that checks if the password includes the number `"1"`.
   - If both conditions are met, print `"Password meets security requirements."`.
4. - Declare `let purchaseTotal = 150;`.
   - Declare `let shippingCountry = "USA";`.
   - Write a nested `if` statement. The outer `if` should check if `purchaseTotal` is greater than 100.
   - The inner `if` should check if `shippingCountry` is `"USA"`. If both are true, print `"You qualify for free domestic shipping!"`.

------



### 11. The `switch` Statement

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

---



### 12. `switch` Statement Advanced Features

**Concept:** The `switch` statement has two powerful features. First, you can make multiple `case` labels execute the same code block by listing them sequentially without a `break` in between. This is called "fall-through". Second, you can execute as many statements as you need within a single `case` block before you use the `break` keyword to exit the `switch`.

**Example:**

JavaScript

```
let color = prompt("What is a common color for a mouse?");
let response = "";
let score = 0;

switch (color) {
  case "grey":
  case "gray": // "Fall-through": Both "grey" and "gray" run this code.
    response = "Yes!";
    score = 10; // Multiple statements execute in this one case.
    break;
  case "brown":
    response = "OK, sometimes";
    score = 5;
    break;
  default:
    response = "I don’t think so";
    score = 0;
}
console.log("Response: " + response + " Score: " + score);
```

**Problems:**

1. - Use `prompt()` to ask the user to enter a day of the week and store it in `day`.
   - Write a `switch` statement for `day`.
   - The cases for `"Saturday"` and `"Sunday"` should both fall through to a block that prints `"It's the weekend!"`.
   - Include a `default` case that prints `"It's a weekday."`.
2. - Declare a variable `playerAction` and set it to `"attack"`.
   - Write a `switch` statement for `playerAction`.
   - For the case `"attack"`, write two statements: one that prints `"You swing your sword!"` and another that prints `"You dealt 10 damage."`.
   - Remember to include a `break` and a `default` case.
3. - Use `prompt()` to ask for a letter grade (`"A"`, `"B"`, `"C"`, etc.) and store it in `grade`.
   - Write a `switch` statement for `grade`.
   - Have cases for `"A"`, `"B"`, and `"C"` all fall through to the same code block.
   - Inside that block, set a variable `isPassing` to `true` and another variable `message` to `"You passed the class."`. Print both variables.
   - The `default` case should set `isPassing` to `false` and `message` to `"You must retake the class."`. Print both variables here as well.
4. Imagine you are writing a switch statement to simulate controlling the execution of a program. The program can be started with the commands "run" or "start" and stopped with the commands "stop" or "end".
   - Declare two variables:  `command` and `operationStatus`, both initialized to empty strings.
   - Use prompt to get a command from the user.
   - Write a `switch` statement for `command`.
   - Add cases "run" and "start"` that fall through to the same block.
     - Inside that block,, set status to  "running", and print `"Status is now: "` followed by the status.
   - Add cases "stop" and "end" that fall through to a second block.
     - set operationStatus to "stopped"
   - Add a`default` case that sets operationStatus to `"Unknown command"`.
   - After the end of the switch statement  print `"Status is now: "` followed by the status.



These lab instructions were written by Brian Bird based on drafts by Gemini 2.5 Pro, 11/3/2025.