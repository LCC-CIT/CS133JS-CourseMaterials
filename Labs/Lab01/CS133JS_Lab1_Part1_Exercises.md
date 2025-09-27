<h1>Lab 1: First JavaScript Exercises</h1>

These exercises require you to use only the concepts covered in the first week of class: variable declaration (`var`), user input (`prompt()`), arithmetic operators, string concatenation, and explicit type conversion functions.

**IMPORTANT:** For every exercise, all final output MUST be displayed on the web page using the **`document.write()`** method. Remember to include necessary HTML elements (like `<p>` or `<br />`) in your output strings for formatting.

## Exercise 1: The Simple Greeter

**Concept Focus:** `prompt()`, `var`, String Concatenation, `document.write()`

Write a JavaScript program that does the following:

1. **Prompts** the user to enter their first name.
2. Stores the input in a variable named `firstName`.
3. Uses **`document.write()`** to display a greeting on the web page that says, "**Welcome, [User's Name]! This is your first JS program.**" Ensure the output is formatted as a paragraph.

## Exercise 2: Basic Arithmetic Calculation

**Concept Focus:** `var`, Arithmetic Operators (`+`, `-`, `*`, `/`), `document.write()`

Write a program that uses pre-defined variables (no input needed):

1. Declare a variable `price` and assign it the value 15.50.
2. Declare a variable `quantity` and assign it the value 3.
3. Calculate the `totalCost` by multiplying `price` and `quantity`.
4. Use **`document.write()`** to display the result on the web page in the format: "The total cost is: [Total Cost]".

## Exercise 3: Time Conversion (Modulus Operator)

**Concept Focus:** Arithmetic Operators (`%`, `/`), `var`, Integer Math

Write a program that converts seconds into minutes and remaining seconds:

1. Declare a variable `totalSeconds` and assign it the value 325.
2. Calculate the `minutes` using the division operator.
3. Calculate the `remainingSeconds` using the modulus operator (`%`).
4. Use **`document.write()`** to display the final result on the web page, for example: "**325 seconds is equal to 5 minutes and 25 seconds.**"

## Exercise 4: Area Calculator with Type Conversion

**Concept Focus:** `prompt()`, `parseInt()`, Arithmetic Operators, `document.write()`

Write a program that calculates the area of a rectangle:

1. **Prompt** the user to enter the rectangle's width.
2. **Prompt** the user to enter the rectangle's height.
3. Use **`parseInt()`** on both inputs to convert them to numbers.
4. Calculate the `area` (width × height).
5. Use **`document.write()`** to show the final area on the web page, clearly labeled.

## Exercise 5: The Overloaded Plus Output

**Concept Focus:** Overloaded `+` operator, String and Number Mixing, `document.write()`

Write the following code snippet and then confirm the result by displaying it to the web page.

1. Write the following variables and calculation:

   ```
   var myNumber = 5;
   var myString = "5";
   var result = myNumber + myString;
   ```

2. Use **`document.write()`** to display the value of the `result` variable.

## Exercise 6: Increment and Decrement Display

**Concept Focus:** Increment (`++`) and Decrement (`--`) Operators, `document.write()`

Write a program to demonstrate the use of the unary operators:

1. Declare a variable `counter` and set its value to 10.
2. Use the increment operator (`++`) on `counter`.
3. Use **`document.write()`** to show the new value of `counter` on a new line.
4. Use the decrement operator (`--`) on `counter`.
5. Use **`document.write()`** to show the final value of `counter` on a new line.

## Exercise 7: Floating Point Average

**Concept Focus:** `prompt()`, `parseFloat()`, Division Operator, `document.write()`

Write a program to calculate the average of three quiz scores, allowing for decimal values:

1. **Prompt** the user to enter three separate quiz scores (e.g., 88.5,92,79.5).
2. Use **`parseFloat()`** on all three inputs to ensure they are treated as decimal numbers.
3. Calculate the `averageScore`.
4. Use **`document.write()`** to display the `averageScore` on the web page.

## Exercise 8: Concatenating Names

**Concept Focus:** Multiple Variables, `prompt()`, String Concatenation

Write a program to collect and display a user's full name:

1. **Prompt** the user for their first name and store it in `firstName`.
2. **Prompt** the user for their last name and store it in `lastName`.
3. Use **`document.write()`** to display the full name (first name followed by a single space, followed by the last name).

## Exercise 9: Boolean to Number Coercion Output

**Concept Focus:** Boolean Data Type, Type Coercion, `document.write()`

Write a program that demonstrates how a boolean value is treated in a numeric context:

1. Declare a variable `initialValue` with the value 50.
2. Declare a variable `isComplete` and set it to `true`.
3. Declare a variable `finalResult` and assign it the result of `initialValue + isComplete`.
4. Use **`document.write()`** to display the value of `finalResult` on the web page.

## Exercise 10: Using the `Number()` Conversion Function

**Concept Focus:** `Number()`, Calculation, `document.write()`

Write a program that uses the universal `Number()` function for type conversion:

1. Declare a variable `inputA` and assign it the string value `"123"`.
2. Declare a variable `inputB` and assign it the string value `"4.56"`.
3. Create new variables `numA` and `numB` by converting `inputA` and `inputB` to numbers using the **`Number()`** function.
4. Calculate the `sum` of `numA` and `numB`.
5. Use **`document.write()`** to display the final `sum` on the web page.

## Exercise 11: Multi-Line Output

**Concept Focus:** `document.write()` with HTML elements, String literals

Write a program that uses `document.write()` to display two separate pieces of information, each on its own line:

1. Declare a variable `city` and assign it the value `"Portland"`.
2. Declare a variable `state` and assign it the value `"Oregon"`.
3. Use **one** **`document.write()`** statement to output "**City: Portland**" and "**State: Oregon**" with a line break (`<br />`) or paragraph tags (`<p>`) between them.

## Exercise 12: Declared but Unassigned Output

**Concept Focus:** `undefined`, `typeof`, `document.write()`

Write a program that explores the concept of an unassigned variable:

1. Declare a variable named `unknownItem` using `var`, but **do not** assign it a value.
2. Use **`document.write()`** to print the *value* of `unknownItem` on the web page.
3. Use a **second** **`document.write()`** statement on a new line to print the *type* of `unknownItem` using the `typeof` operator.