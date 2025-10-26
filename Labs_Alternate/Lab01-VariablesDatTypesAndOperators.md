<h1>Lab 1: Variables, Data Types and Operators</h1>

[TOC]

### 1. Declaring  Variables with `let`

**Concept:** The `let` keyword is used to declare a variable—a named container (think of it as a box) that can hold a value (a number, text, or other things). The value of a variable declared with `let` can be changed (or "reassigned") later in your code.

**Example:**

```JavaScript
// Declare a variable 'age' and give it a value of 30
let age = 30;

// Print its value to the console
console.log(age); // Prints 30

// Change the value of 'age'
age = 31;

// Print the new value
console.log(age); // Prints 31
```

**Problems:**

1. Declare a variable named `score` and set its initial value to `0`.
2. Declare a variable named `lives` and set its value to `9`. On the next line, change the value of `lives` to `8`.
3. Declare a variable `coffeeType`, set its value to `"dark roast"`, and then change its value to `"medium roast"`.

------



### 2. Printing to the Console with`console.log()`

**Concept:** `console.log()` is a built-in function that prints any value you put inside its parentheses to the browser console. It is the most common way to see the result of your code and check the value of variables when running code in the console.

**Example:**

```JavaScript
// Print a number directly
console.log(100);

// Print a string of text directly
console.log("Hello, world!");

// Print the value of a variable
let planet = "Earth";
console.log(planet); // Prints "Earth"
```

**Problems:**

1. Use `console.log()` to print the number `42`.
2. Use `console.log()` to print your name as a string.
3. Declare a variable `favoriteFood` and set it to the name of your favorite food. Then, use `console.log()` to print the value of that variable.

---



### 3. Getting Input with the `prompt()` Function

**Concept:** The `prompt()` function is a built-in function that displays a pop-up box with a message, asking the user to type something in. It *returns* (gives back) whatever the user typed as a `string`.

**Example:**

```JavaScript
// A pop-up box will appear
let userName = prompt("What is your name?");

// The 'userName' variable now holds the text the user entered
console.log("Hello, " + userName);
```

**Problems:**

1. Use `prompt()` to ask the user "What city do you live in?". Store their answer in a variable called `city`.
2. Print the `city` variable to the console.
3. Use `prompt()` to ask "How old are you?". Store the answer in `userAge`.
4. Use `typeof` to check the data type of `userAge`. (You will see it is a `string`, even if you typed a number!)

---



### 4. Text Values in the String Data Type

**Concept:** A "string" is a piece of text. In JavaScript, you create strings by wrapping your text in either single quotes (`'`) or double quotes (`"`).

**Example:**

```javascript
// A string with single quotes
let singleQuoteString = 'This is a string.';

// A string with double quotes
let doubleQuoteString = "This is also a string.";

console.log(singleQuoteString);
console.log(doubleQuoteString);
```

**Problems:**

1. Create a variable `firstName` and set its value to your first name as a string.
2. Create a variable `favoriteColor` and set its value to your favorite color as a string.
3. Print the `favoriteColor` variable to the console.

------



### 5. Concatenating Strings

**Concept:** "Concatenation" is the process of joining two or more strings together to create a new, single string. You do this using the same `+` operator you use for adding numbers.

**Example:**

```javascript
let string1 = "Hello";
let string2 = "World";

// We add a space " " in the middle
let greeting = string1 + " " + string2 + "!";

console.log(greeting); // Prints "Hello World!"
```

**Problems:**

1. Create a variable `greeting` with the value `"Hi, "`.
2. Create a variable `name` with your name as its value.
3. Create a new variable `fullGreeting` by concatenating `greeting` and `name`. Print `fullGreeting` to the console.
4. Concatenate the strings `"JavaScript"`, `" is"`, and `" fun"` and print the final result to the console.

------



### 6. Numbers and Math Operators

**Concept:** JavaScript uses standard math operators. `+` adds, `-` subtracts, `*` multiplies, and `/` divides. A less common but very useful operator is the modulo `%`, which gives you the *remainder* of a division.

**Example:**

```JavaScript
let sum = 10 + 5; // 15
let difference = 10 - 5; // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2

// Modulo (Remainder)
// 12 divided by 5 is 2, with a remainder of 2
let remainder = 12 % 5; 
console.log(remainder); // Prints 2
```

**Problems:**

1. Use `console.log()` to print the result of `(100 + 50) / 3`.
2. Declare a variable `totalPizzas` and set it to `5`. Declare a variable `slicesPerPizza` and set it to `8`.
3. Create a variable `totalSlices` by multiplying `totalPizzas` and `slicesPerPizza`. Print `totalSlices`.
4. You have `26` cookies to divide among `4` friends. Use the modulo operator (`%`) to find out how many cookies will be left over. Print the remainder.

---



### 7. Shorthand Math Operators

**Concept:** JavaScript provides "shorthand" or "compound assignment" operators as a shortcut to modify a variable's value based on its current value.

- `+=` (Add): `x += 5` is the same as `x = x + 5`.
- `-=` (Subtract): `x -= 3` is the same as `x = x - 3`.
- `*=` (Multiply): `x *= 2` is the same as `x = x * 2`.
- `/=` (Divide): `x /= 4` is the same as `x = x / 4`.
- `++` (Increment): `x++` is the same as `x = x + 1`.
- `--` (Decrement): `x--` is the same as `x = x - 1`.

**Example:**

```JavaScript
let myScore = 10;
console.log(myScore); // Prints 10

// Add 5 to myScore
myScore += 5;
console.log(myScore); // Prints 15

// Subtract 1 from myScore
myScore--;
console.log(myScore); // Prints 14

// Double myScore
myScore *= 2;
console.log(myScore); // Prints 28
```

**Problems:**

1. Declare a variable `points` and set it to `100`. Use the `+=` operator to add `20` to it. Print the new value of `points`.
2. Declare a variable `health` and set it to `10`. Use the `--` operator to decrease it by `1`. Print `health`.
3. Declare a variable `coins` and set it to `5`. Use the `*=` operator to multiply it by `10`. Print `coins`.
4. Declare a variable `total` and set it to `50`. Use the `/=` operator to divide it by `2`. Print `total`.
5. Declare a variable `counter` and set it to `0`. Use the `++` operator to increase it by `1`. Print `counter`.



### 8. True and False Values in the Boolean Data Type

**Concept:** A "boolean" is a data type that can only have two possible values: `true` or `false`. Booleans are used for logic and making decisions. The `==` (double equals) operator is a *comparison* operator. It "asks a question": are these two values equal? It returns a boolean answer.

**Example:**

```JavaScript
// Check if 5 is equal to 5
console.log(5 == 5); // Prints true

// Check if 5 is equal to 6
console.log(5 == 6); // Prints false

// It also works on strings
console.log("hello" == "hello"); // Prints true

// '==' will try to convert types, which can be tricky
console.log(10 == "10"); // Prints true
```

**Problems:**

1. Use `console.log()` to check if the number `50` is equal to `50`.
2. Use `console.log()` to check if the string `"JavaScript"` is equal to the string `"Python"`.
3. Declare a variable `password` and set it to `"12345"`.
4. Use `console.log()` to check if `password` is equal to `"12345"`.
5. Use `console.log()` to check if `password` is equal to `"hello"`.

---

### 9. Data Types and `typeof`

**Concept:** Every value in JavaScript has a specific "data type." The most common are `number` (like `10`, `3.14`), `string` (like `"Hello"`), and `boolean` (which is just `true` or `false`). You can check the type of any value or variable by using the `typeof` operator.

**Example:**

```JavaScript
let myAge = 25;
let myName = "Alex";
let isStudent = true;

console.log(typeof myAge); // Prints "number"
console.log(typeof myName); // Prints "string"
console.log(typeof isStudent); // Prints "boolean"
```

**Problems:**

1. Use `console.log()` and `typeof` to find the data type of the value `42`.
2. Use `console.log()` and `typeof` to find the data type of the value `"42"`. (Notice this is different from problem 1).
3. Create a variable `isHungry` and set it to `true`. Use `typeof` to print the data type of this variable.



### 10. Data Type Conversion

**Concept:** Sometimes, you get a number that is "stuck" inside a string, like `"50"`. You can't do math with it until you convert it to an actual `number` data type. `parseInt()` converts a string to a whole number (an integer). `parseFloat()` converts it to a number with decimals (a "floating-point number"). `Number()` is a general-purpose function that does the same.

**Example:**

```JavaScript
let stringAge = "30";
let stringPrice = "10.99";

// This will NOT work as expected (it concatenates strings)
console.log(stringAge + 5); // Prints "305"

// This is how you fix it:
let age = parseInt(stringAge);
console.log(age + 5); // Prints 35

let price = parseFloat(stringPrice);
console.log(price + 1); // Prints 11.99
```

**Problems:**

1. You have two strings: `a = "100"` and `b = "50"`. Convert both to numbers using `parseInt()` and print their sum.
2. You have a string `priceString = "19.95"`. Convert it to a number using `parseFloat()` and print the result.
3. Use `Number()` to convert the string `"123"` into a number, store it in a variable, and print the variable.

---



### 11. `null` vs. `undefined`

**Concept:** Both `null` and `undefined` represent the *absence* of a value, but they are not the same.

- `undefined` is the default value for a variable that has been *declared* but has not been *given a value* yet.
- `null` is a value you *intentionally assign* to a variable to explicitly mean "this has no value" or "this is empty."

**Example:**

```javascript
// This variable is declared, but has no value assigned
let myVariable;
console.log(myVariable); // Prints "undefined"

// This variable is intentionally set to "no value"
let selectedUser = null;
console.log(selectedUser); // Prints "null"
```

**Problems:**

1. Declare a variable `lastName` but do not give it a value. Print `lastName` to the console. What do you see?
2. Declare a variable `currentTask` and set its value to `null`. Print `currentTask` to the console.
3. What is the `typeof` `undefined`? What is the `typeof` `null`? (The second one is a famous quirk in JavaScript!)



### 12. `undefined` vs. `not defined`

**Concept:** This is a common point of confusion. `undefined` is a *value* that a variable can have. `not defined` is an *error* (specifically, a `ReferenceError`). You get this error when you try to use a variable that you have not *declared* (using `let` or `const`).

**Example:**

```javascript
let myPet;

// This is OK. It prints the value "undefined"
console.log(myPet); 

// This will cause an error because 'yourPet' was never declared
console.log(yourPet); // ReferenceError: yourPet is not defined
```

**Problems:**

1. Type `let testValue;` into your console and press Enter. On the next line, type `testValue;` and press Enter. The console will show `undefined`.
2. Now, (clear your console if you want) type `someOtherValue;` and press Enter, using a variable name you have *not* declared. You will see a `ReferenceError`. This is the "not defined" error.

---



## Completing and Reporting on Your Work

- Do at least two problems for each topic
- Report which problems you completed (by topic number and problem number) and anything you had questions about.
- You don't need to get a code review for this lab.



These lab instructions were written by Brian Bird using Gemini 2.5 Pro, 10/26/2025.