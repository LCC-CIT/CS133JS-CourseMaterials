<h1>Lab 2: Functions</h1>

[TOC]

## Instructions

For each of the topics below, do read the concepts and consider the examples. Do the problems by opening a browser console and writing the code there. You can copy and paste the code into a file if you wish, but you don't need to submit it.

### 1. JavaScript's Built-in Functions

**Concept:** *Functions* are pre-written chunks of code that you can use by *calling* the function. JavaScript comes with many "built-in" functions that perform common tasks. You've already used:

-  `console.log()` 
-  `prompt()`

Others include: 

- `alert()` shows a pop-up message

- `parseInt()` converts a string to a whole number

- `Number()` converts a string to a number



**Example:**

```
// Shows a pop-up box with a message
alert("This is an alert!");

// Asks for input, which comes back as a string
let ageString = prompt("How old are you?");

// Converts the string "25" to the number 25
let ageNumber = parseInt(ageString);

// Another way to convert
let ageNumber2 = Number(ageString);

console.log(ageNumber);

// Writes text directly to the web page
document.write("Hello from JavaScript!"); 
```

**Problems:**

1. `prompt()`, `parseInt()` and `console.log()`
   - Use `prompt()` to ask the user for their favorite number. Store the result in a variable called `favNumString`. 
   - Use `parseInt()` to convert `favNumString` into an actual number. Store this in a new variable called `favNum`
   - Log favNum to the console.
2. `prompt()` and  `alert()` 
   - Use `prompt()` to ask the user for their favorite desert. Store the result in a variable called `favDesert`.
   - Use `alert()` to display the message "Your favorite desert is " with `favDesert` concatenated to it.

### 2. Defining and Calling a Simple Function

**Concept:** A function is a reusable block of code that performs a specific task. You *define* (or *declare*) a function using the `function` keyword, followed by a name, parentheses `()`, and curly braces `{}`. The code you want to run goes inside the curly braces. To run the code, you *call* the function by writing its name followed by parentheses, for example: `myFunciton()`.

**Example:**

```
// 1. Define the function
function showWelcomeMessage() {
  console.log("Welcome to our website!");
  console.log("We are happy to have you here.");
}

// 2. Call the function to make it run
showWelcomeMessage();

// You can call it as many times as you want
showWelcomeMessage();
```

**Problems:**

1. Define and call `sayHello`

   - Define a function named `sayHello` that prints the string `"Hello!"` to the console.

   - Call the `sayHello` function.

2. Define and call `showInstructions` 

   - Define a function named `showInstructions` that prints two lines: `"First: Do this."` and `"Second: Do that."`
   - Call `showInstructions` 

### 3. Functions with One Parameter and a Return Value

**Concept:** A *parameter* is a special variable listed inside the function's parentheses `()`. It acts as a placeholder for a value that you "pass in" when you call the function&mdash;the value you pass in is called an *argument*. The `return` keyword sends a value *back* from the function, which you can then store in a variable.

**Example:**

```
// This function has one parameter: number
function doubleNumber(number) {
  let result = number * 2;
  return result; // Send this value back
}

// Call the function, "passing" 5 as the argument.
// The "return: value (10) gets stored in myDoubledNumber
let myDoubledNumber = doubleNumber(5);

console.log(myDoubledNumber); // Prints 10
console.log(doubleNumber(100)); // Prints 200
```

**Problems:**

1. Define and call `addTen`
   - Define a function named `addTen` that takes one parameter `num`. The function should add `10` to `num` and `return` the result.
   - Call your `addTen` function with the number `5`. Store the returned value in a variable called `fivePlusTen` and print it.
2. Define and call `sayGreeting`
   - Define a function `sayGreeting` that takes one parameter `name`. The function should `return` the string `"Hello, " + name`.
   - Call `sayGreeting` with your name. Store the result in a variable and print it to the console.

### 4. Functions with Two Parameters and a Return Value

**Concept:** You are not limited to one parameter. You can have multiple parameters by separating them with commas. This allows you to pass in multiple pieces of information to be used inside the function.

**Example:**

```
// 'num1' and 'num2' are parameters
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

// Pass two arguments: 10 and 20
let total = addNumbers(10, 20);

console.log(total); // Prints 30
console.log(addNumbers(5, 3)); // Prints 8
```

**Problems:**

1. Define and call `multiplyNumbers`
   - Define a function named `multiplyNumbers` that takes two parameters, `a` and `b`. The function should `return` their product (a * b).
   - Call `multiplyNumbers` with the numbers `7` and `3`. Store the result in a variable and print it.
2. Define and call `createFullName`
   - Define a function `createFullName` that takes `firstName` and `lastName` as parameters. It should `return` the two strings combined with a space in the middle.
   - Call `createFullName` with your first and last names. Store the result in a variable called `fullName` and print it.

### 5. Why We Use Functions

**Concept:** Functions are a fundamental concept in programming. We use them for two main reasons:

1. **Reusability:** Instead of writing the same block of code (e.g., code to calculate a tax) over and over, you write it *once* inside a function and then "call" that function whenever you need it. This is also called the **DRY** principle (Don't Repeat Yourself).
2. **Organization:** Functions break your code into small, manageable, named pieces. Instead of one giant, 1000-line script, you can have 50 small functions. This makes your code much easier to read, understand, and debug (fix).

**Example:**

```
// Imagine you need to calculate a 10% tax for three different items
// Without a function (repetitive):
let item1Price = 100;
let item1Tax = item1Price * 0.10;
console.log(item1Tax); // 10

let item2Price = 40;
let item2Tax = item2Price * 0.10;
console.log(item2Tax); // 4

// With a function (reusable and organized):
function calculateTax(price) {
  return price * 0.10;
}

console.log(calculateTax(100)); // 10
console.log(calculateTax(40)); // 4
```

Problems:

(These are thought-based; type or write your answers. Check with your instructor to see if you are right.)

1. Look at Problem 3 for "Functions with Two Parameters." How does that function (`createFullName`) help with code reusability?
2. Imagine you have a block of code that asks the user for their name, age, and city using three `prompt()` calls. Why would it be a good idea to put this code inside a function called `getUserInfo()`?
3. If you had a bug in your tax calculation logic (e.g., the tax was 0.10 but should be 0.08), which version in the example (with or without functions) would be easier to fix? Why?

### 6. Parameters as Local Variables

**Concept:** When you pass a value (an *argument*) to a function, that value is assigned to the corresponding parameter. You can then use that parameter inside the function's curly braces `{}` just like a normal variable. This variable is "local" to the function, meaning it only exists inside that function.

**Example:**

```
// 'name' is the parameter
function greet(name) {
  // 'name' is used like a variable *inside* this function
  console.log("Hello, " + name + "!");
}

// When we call greet("Alice"):
// 1. A local variable 'name' is created inside greet.
// 2. 'name' is set to "Alice".
// 3. The code runs, printing "Hello, Alice!"
// 4. The function finishes and the 'name' variable is destroyed.
greet("Alice");

// 'name' does not exist out here
console.log(name); // ReferenceError: name is not defined
```

**Problems:**

1. Define and call `printSquare`
   - Define a function `printSquare` that takes one parameter `num`. Inside the function, create a new variable `result` that is `num * num` and print `result` to the console.
   - Call `printSquare(7)`.
2. Define and call `welcomeUser` 
   - Define a function `welcomeUser` that takes a parameter `username`. Inside the function, print the string `"Welcome back, " + username`.
   - Call `welcomeUser("DataWizard123")`. The value `"DataWizard123"` will be assigned to the `username` parameter/variable.

### 7. Global vs. Local Scope

**Concept:** "Scope" refers to where variables can be accessed in your code.

- **Global Scope:** A variable declared *outside* of any function is "global." It can be seen and used by *any* code, including code inside all your functions.
- **Local Scope:** A variable declared *inside* a function (using `let` or `const`) is "local" to that function. It can *only* be accessed by code inside those same curly braces. It is invisible to the outside world.

**Example:**

```
let globalVar = "I am global"; // Global variable

function testScope() {
  let localVar = "I am local"; // Local variable
  console.log(globalVar); // Can access globalVar
  console.log(localVar);  // Can access localVar
}

testScope();
// Prints:
// "I am global"
// "I am local"

console.log(globalVar); // Can access globalVar
// Prints: "I am global"

console.log(localVar); // CANNOT access localVar
// ReferenceError: localVar is not defined
```

**Problems:**

1. Use a global variable  
   (This use of a global variable  is for demonstration purposes only, it's not good practice)
   - Declare a global variable `userName` and set it to your name.
   - Define a function `showGreeting` that prints `userName` to the console. Call it. (This works because `userName` is global).
2. Use a local variable
   - Define a function `myFunction` that declares a *local* variable `mySecret` and sets its value to `"12345"`.
   - Try to print `mySecret` to the console *outside* of the function. You will get a `ReferenceError`, proving it is local.

### 8. More on Scope

**Concept:** You can have a local variable with the *same name* as a global variable. When you are inside a function, the local variable takes priority. This is called "shadowing." The function will use its own local variable and will not see or change the global one.

**Example:**

```
let user = "Alice"; // Global 'user'

function nameTest() {
  let user = "Bob"; // Local 'user' (shadows the global)
  console.log("Inside function: " + user); // Will use local 'Bob'
}

nameTest();
console.log("Outside function: " + user); // Will use global 'Alice'

// Prints:
// "Inside function: Bob"
// "Outside function: Alice"
```

**Problems:**

1. Global and local variables with the same name
   - Declare a global variable `score` and set it to `100`.
   - Define a function `testScore` that declares a *local* variable `score` and sets it to `0`. Inside the function, print "Local score: " and the local `score`.
   - Call `testScore()`.
   - After calling the function, print "Global score: " and the global `score`. Notice the global variable was not changed.

### 9. Importance of Variable Declarations

**Concept:** You should *always* declare your variables using `let` or `const`. If you assign a value to a variable name *without* declaring it, JavaScript will sometimes try to be "helpful" and create a global variable for you. This is very bad practice, as it pollutes the global scope and can lead to bugs that are very hard to find. (This behavior is prevented in "strict mode," a safer way to write JavaScript).

**Example:**

```
function createBadVariable() {
  // Whoops! We forgot 'let' or 'const'
  // JavaScript creates this as a GLOBAL variable.
  myVar = "I am global now";
}

createBadVariable();

// The variable "leaked" out of the function:
console.log(myVar); // Prints "I am global now"
```

**Problems:**

1. Use an undeclared variable  
   (This is for demonstration purposes only, it's not good practice)
   - Define a function `createLeakedVar`. Inside it, assign the string `"oops"` to a variable `leaked` *without* using `let` or `const`.
   - Call `createLeakedVar()`.
   - On the next line, print `leaked` to the console. You will see it exists *outside* the function. This is the problem.
   - Now, rewrite the function as `createGoodVar`. Inside it, use `let goodVar = "nice"`. Call the function.
   - Try to print `goodVar` outside the function. You will get a `ReferenceError`, which is the *correct* behavior.

### 10. What Constants Are, Why and How to Use Them

**Concept:** A "constant" is a variable that *cannot be changed* after it is created. You declare one using the `const` keyword. You *must* give it a value when you declare it, and you can never re-assign it.

**Why?** We use constants for values that we know should *never* change, like a mathematical constant (e.g., PI), a website's name, or a fixed configuration value (e.g., `DAYS_IN_WEEK = 7`). This prevents us (or other developers) from accidentally changing a value that should stay the same, making our code safer and easier to understand.

**Example:**

```
// A mathematical constant
const PI = 3.14159;

// A configuration value
const MAX_LOGIN_ATTEMPTS = 5;

console.log(PI); // 3.14159

// This would cause a TypeError:
// PI = 3.0;
// MAX_LOGIN_ATTEMPTS = 10;
```

**Problems:**

1. The constant `MY_BIRTHDAY`
   - Declare a constant `MY_BIRTHDAY` and set it to your birthday (as a string).
   - Try to change the value of `MY_BIRTHDAY` to a different date. You will see an error.
2. The constant `HOURS_IN_DAY`
   - Declare a constant `HOURS_IN_DAY` and set it to `24`.
   - Think about this: why would you use `const` for `HOURS_IN_DAY` instead of `let`?

### 11. Literal vs. Named Constants

**Concept:**

- A "literal" is a value that you "literally" type into your code, like `10`, `"Hello"`, or `true`.
- A "named constant" is a variable declared with `const` that *holds* a literal value.

We use named constants to give a *meaningful name* to a "magic number" or "magic string." Using `calculateArea(radius, 3.14159)` is less clear than `const PI = 3.14159; calculateArea(radius, PI);`. The named constant explains *what* the value is. It also helps if you need to change the value: you only change it in one place (the `const` declaration) instead of finding and replacing it everywhere.

**Example:**

```
// Using a literal (a "magic number")
// Why 0.08? What is it?
let tax = price * 0.08; 

// Using a named constant (much clearer)
const TAX_RATE_WA = 0.08;
let tax = price * TAX_RATE_WA; 
```

**Problems:**

1. Magic Numbers vs. named constants
   - In the code `let total = 100 * 1.15;`, what is `1.15`? (It's a "magic number" / literal).
   - Rewrite that code. First, declare a named constant `SALES_TAX_RATE` and set it to `1.15`.
   - Then, write the line `let total = 100 * SALES_TAX_RATE;`.
   - Think about this: why is the version with the named constant better, even if it's more code?

### 12. Putting It All Together

**Problem 1: The Area Calculator**

1. Write a function named `calculateCircleArea` that takes one parameter, `radius`.
2. Inside the function, declare a constant `PI` and set it to `3.14159`.
3. The formula for the area of a circle is $PI * radius * radius$. Calculate this area.
4. The function should `return` the calculated area.
5. Call the function with a radius of `5` and `console.log` the result.

**Problem 2: The Greeter App**

1. Use `prompt()` to ask the user "What is your first name?". Store the result in a variable.
2. Use `prompt()` to ask the user "What is your last name?". Store the result in another variable.
3. Write a function `createFullName` that takes `firstName` and `lastName` as parameters and `return`s them combined with a space.
4. Call `createFullName` with the two variables from your prompts.
5. `alert()` the returned full name to the user in a message, like "Welcome, [Full Name]!"

**Problem 3: The Simple Vending Machine**

1. Declare a global variable `totalMoney` and set it to `0`.
2. Write a function `addMoney(amount)`. This function should take one parameter `amount` and add it to the *global* `totalMoney` variable using the `+=` operator.
3. Write a function `buyDrink()`. This function should:
   - Declare a *local* constant `DRINK_PRICE` and set it to `1.50`.
   - Subtract `DRINK_PRICE` from the *global* `totalMoney` variable using the `-=` operator.
   - `console.log` a message: "Drink purchased! You have $" + `totalMoney` + " left."
4. Call `addMoney(5)`.
5. Call `buyDrink()`.
6. Call `buyDrink()` again.



These lab instructions were written by Brian Bird using Gemini 2.5 Pro, 10/29/2025.