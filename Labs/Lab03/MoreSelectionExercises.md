# Selection Statement Exercises

## 1. Ternary Operator – Basic Condition

### Example:

```javascript
let age = 20;
let message = age >= 18 ? "Adult" : "Minor";
console.log(message);
```

### Problem:

Write a program that checks if a number is even or odd using a ternary operator. Store the result in a variable called `result` and log it to the console.

```javascript
// 1. Ternary Operator – Basic Condition
// Your solution here
```

## 2. Ternary Operator – String Comparison

### Example:

```javascript
let userType = "admin";
let access = userType === "admin" ? "Full Access" : "Limited Access";
console.log(access);
```

### Problem:

Create a variable `role` with the value `"guest"`. Use a ternary operator to assign `"Welcome!"` to a variable `greeting` if the role is `"guest"`, otherwise assign `"Access Denied"`. Log `greeting`.

```javascript
// 2. Ternary Operator – String Comparison
// Your solution here
```

## 3. If Statement

### Example:

```javascript
let score = 95;
if (score > 90) {
  console.log("Excellent!");
}
```

### Problem:

Declare a variable `temperature` with a value of 32. If the temperature is below 40, log `"It's cold outside!"`.

```javascript
// 3. If Statement
// Your solution here
```

## 4. If-Else Statement

### Example:

```javascript
let isRaining = true;
if (isRaining) {
  console.log("Take an umbrella.");
} else {
  console.log("Enjoy the sunshine!");
}
```

### Problem:

Create a variable `isWeekend` set to `false`. If it's the weekend, log `"Relax!"`, otherwise log `"Time to work!"`.

```javascript
// 4. If-Else Statement
// Your solution here
```

## 5. If-Else If-Else Chain

### Example:

```javascript
let grade = 85;
if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else {
  console.log("C or below");
}
```

### Problem:

Write a program that checks a variable `speed`. If speed is over 100, log `"Too fast!"`; if it's between 60 and 100, log `"Safe speed"`; otherwise, log `"Too slow!"`.

```javascript
// 5. If-Else If-Else Chain
// Your solution here
```

## 6. Logical AND (&&)

### Example:

```javascript
let age = 25;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("Entry allowed.");
}
```

### Problem:

Create a program that checks if a user is logged in and has admin rights. If both `isLoggedIn` and `isAdmin` are true, log `"Access granted"`.

```javascript
// 6. Logical AND
// Your solution here
```

## 7. Logical OR (||)

### Example:

```javascript
let day = "Saturday";
if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
}
```

### Problem:

Write a program that checks if a user is either a `subscriber` or a `trialUser`. If either is true, log `"Content available"`.

```javascript
// 7. Logical OR
// Your solution here
```

## 8. Nested If Statements

### Example:

```javascript
let age = 20;
let hasTicket = true;

if (age >= 18) {
  if (hasTicket) {
    console.log("Welcome to the concert!");
  }
}
```

### Problem:

Create a program that checks if a person is over 18 and has permission. If both conditions are true, log `"Access approved"`.

```javascript
// 8. Nested If Statements
// Your solution here
```

## 9. Switch Case – Days of the Week

### Example:

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}Problem:
```

Write a switch statement that logs a message based on the value of `day`. If `day` is `"Monday"`, log `"Back to work"`; if `"Friday"`, log `"Weekend ahead"`; otherwise, log `"Keep going"`.

```javascript
// 9. Switch Case
// Your solution here
```

## 10. Switch Case – Traffic Light

### Example:

```javascript
let light = "green";
switch (light) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
}
```

### Problem:

Create a variable `signal` with a value `"yellow"`. Use a switch statement to log `"Stop"` for `"red"`, `"Caution"` for `"yellow"`, and `"Go"` for `"green"`.

```javascript
// 10.  Switch Case
// Your solution here
```