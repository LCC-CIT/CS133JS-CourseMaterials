
/*
 * Solutions for Lab 3: Selection
 *
 * Instructions:
 * These solutions are designed to be run in a browser console.
 * For problems using prompt(), you will see a pop-up box.
 */

/*
 * ----------------------------------------
 * 1. Comparison Operators
 * ----------------------------------------
 */

// Problem 1.1
let myAge = 35; // Example age
let friendAge = 32;
console.log(myAge > friendAge);

// Problem 1.2
let pizzasOrdered = 10;
let pizzasEaten = 10;
console.log(pizzasOrdered <= pizzasEaten);

// Problem 1.3
let requiredScore = 100;
let myScore = "100";
console.log(requiredScore === myScore); // Prints false

// Problem 1.4
let hoursSleptInput = prompt("How many hours did you sleep?");
let hoursSlept = Number(hoursSleptInput);
console.log(hoursSlept >= 8);

/*
 * ----------------------------------------
 * 2. Conditional Expressions
 * ----------------------------------------
 */

// Problem 2.1
let apples = 10;
let oranges = 12;
let orangesAreMore = oranges > apples;
console.log(orangesAreMore);

// Problem 2.2
let userName = "Alice"; // Example name
let isNamedAlice = userName === "Alice";
console.log(isNamedAlice);

// Problem 2.3
let purchaseAmount = 120;
let hasCoupon = false;
let qualifiesForDiscount = purchaseAmount > 100 || hasCoupon;
console.log(qualifiesForDiscount);

// Problem 2.4
let numInput = prompt("Enter a number");
let num = Number(numInput);
let isEvenAndPositive = num > 0 && num % 2 === 0;
console.log(isEvenAndPositive);

/*
 * ----------------------------------------
 * 3. The Ternary Operator (? :)
 * ----------------------------------------
 */

// Problem 3.1
let isRaining = true;
let activity = isRaining ? "Read a book" : "Go for a walk";
console.log(activity);

// Problem 3.2
let password = prompt("Enter a password:");
let loginMessage = password === "secret-Password42" ? "Access Granted" : "Access Denied";
console.log(loginMessage);

// Problem 3.3
let score = 85;
let grade = score >= 60 ? "Pass" : "Fail";
console.log(grade);

// Problem 3.4
let itemCountInput = prompt("How many items are in your cart?");
let itemCount = Number(itemCountInput);
let shippingCost = itemCount > 0 ? 10 : 0;
console.log("Your shipping cost is $" + shippingCost);

/*
 * ----------------------------------------
 * 4. if Statement (Single Branch)
 * ----------------------------------------
 */

// Problem 4.1
let temperature = 30;
if (temperature < 32) {
  console.log("Warning: Freezing temperature!");
}

// Problem 4.2
let passwordInput = prompt("What is the password?");
if (passwordInput === "JavaScript") {
  console.log("Welcome, user!");
}

// Problem 4.3
let itemsInStock = 0;
if (itemsInStock === 0) {
  console.log("Error: Item is out of stock.");
}

// Problem 4.4
let numString = prompt("Enter a number");
let numForIf = parseInt(numString);
if (numForIf > 100) {
  console.log("That's a big number!");
  console.log("The number was " + numForIf);
}

/*
 * ----------------------------------------
 * 5. if...else Statement (Two Branches)
 * ----------------------------------------
 */

// Problem 5.1
let numInput5 = prompt("Enter a number.");
let num5 = Number(numInput5);
if (num5 >= 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

// Problem 5.2
let hasTicket = false;
if (hasTicket) { // or hasTicket === true
  console.log("Please proceed to the gate.");
} else {
  console.log("You must buy a ticket first.");
}

// Problem 5.3
let totalInput = prompt("What is your total purchase amount?");
let total = Number(totalInput);
if (total > 50) {
  console.log("You qualify for free shipping!");
} else {
  console.log("Shipping will cost $5.");
}

// Problem 5.4
let num5_4 = 15;
if (num5_4 % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

/*
 * ----------------------------------------
 * 6. if...else if...else Statement
 * ----------------------------------------
 */

// Problem 6.1
let score6 = 78;
if (score6 >= 90) {
  console.log("A");
} else if (score6 >= 80) {
  console.log("B");
} else if (score6 >= 70) {
  console.log("C");
} else {
  console.log("F");
}

// Problem 6.2
let numInput6 = prompt("Enter a number");
let num6 = Number(numInput6);
if (num6 > 0) {
  console.log("Positive");
} else if (num6 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// Problem 6.3
let trafficLight = "yellow";
if (trafficLight === "red") {
  console.log("Stop");
} else if (trafficLight === "yellow") {
  console.log("Slow down");
} else if (trafficLight === "green") {
  console.log("Go");
}

// Problem 6.4
let hourInput = prompt("What time is it (0-23)?");
let hour = Number(hourInput);
if (hour < 12) {
  console.log("Good morning");
} else if (hour < 18) {
  console.log("Good afternoon");
} else {
  console.log("Good evening");
}

/*
 * ----------------------------------------
 * 7. Executing multiple conditional statements in a block
 * ----------------------------------------
 */

// Note: The title for this section is a bit confusing.
// The problems relate to 1) putting multiple statements in a single block
// and 2) variable scope within blocks.

// Problem 7.1
let wantsToSave = prompt("Do you want to save your work? (yes/no)");
if (wantsToSave === "yes") {
  console.log("Saving your work...");
  console.log("Save complete.");
}

// Problem 7.2
let cartTotal = 55;
let couponCode = "DISCOUNT10";
if (cartTotal > 50) {
  console.log("You qualify for a discount!");
  console.log("Apply code: " + couponCode);
}

// Problem 7.3
let finalMessage = ""; // Declared in outer scope
let condition = true; // Example condition

if (condition) {
  finalMessage = "Success!"; // Assign value inside block
} else {
  finalMessage = "Failure!"; // Assign value inside block
}
console.log(finalMessage); // Works because finalMessage was declared outside


// Problem 7.4

// 1. Declare a variable `let userType = "admin";`.
let userType = "admin";

// 2. Write an `if...else` statement that checks if `userType` is equal to `"admin"`.
if (userType === "admin") {
  // 3. Inside the `if` block, declare a variable `let message = "Welcome, Admin!"` and print it.
  // This 'message' only exists inside these curly braces.
  let message = "Welcome, Admin!";
  console.log(message);
} else {
  // 4. Inside the `else` block, declare a *different* variable, also named `let message = "Welcome, User!"`.
  // This 'message' only exists inside *these* curly braces and is separate from the one above.
  let message = "Welcome, User!";
  console.log(message);
}

// If you were to try:
// console.log(message);
// ...out here, you would get a ReferenceError because 'message' does not exist in this outer scope.

/*
 * ----------------------------------------
 * 8. Boolean (Logical) Operators
 * ----------------------------------------
 */

// Problem 8.1
let isSunny = true;
let isWarm = true;
console.log(isSunny && isWarm);

// Problem 8.2
let day = "Sunday";
console.log(day === "Saturday" || day === "Sunday");

// Problem 8.3
let isLoggedIn = false;
console.log(!isLoggedIn);

// Problem 8.4
let carFuel = 15;
let isEmergency = false;
console.log(carFuel < 20 && isEmergency === false); // or !isEmergency

/*
 * ----------------------------------------
 * 9. Logical Operators in `if` Statements
 * ----------------------------------------
 */

// Problem 9.1
let age = 20;
let hasDriversLicense = true;
if (age >= 16 && hasDriversLicense) {
  console.log("You are legal to drive");
}

// Problem 9.2
let isHoliday = false;
let dayOfWeek = "Saturday";
if (isHoliday || dayOfWeek === "Saturday") {
  console.log("You don't have to work today!");
} else {
  console.log("Time to go to work.");
}

// Problem 9.3
let isMember = false;
if (!isMember) {
  console.log("Please sign up to continue.");
} else {
  console.log("Welcome back, member!");
}

// Problem 9.4
let user = prompt("Enter username:");
let pass = prompt("Enter password:");
if (user === "admin" && pass === "12345") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

/*
 * ----------------------------------------
 * 10. Nested `if` Statements
 * ----------------------------------------
 */

// Problem 10.1
let isLoggedIn10 = true;
let userRole = "admin";
if (isLoggedIn10) {
  if (userRole === "admin") {
    console.log("Welcome, Admin!");
  }
}

// Problem 10.2
let isMember10 = prompt("Are you a member? (yes/no)");
let ageInput10 = prompt("What is your age?");
let age10 = Number(ageInput10);

if (isMember10 === "yes") {
  if (age10 > 65) {
    console.log("You qualify for the senior member discount.");
  }
}

// Problem 10.3
// Note: This problem uses .includes(), which is a string operation.
// This assumes the user knows this method, which may not be the case.
let password10 = "Swordfish123";
if (password10.length > 10) {
  if (password10.includes("1")) {
    console.log("Password meets security requirements.");
  }
}

// Problem 10.4
let purchaseTotal10 = 150;
let shippingCountry = "USA";
if (purchaseTotal10 > 100) {
  if (shippingCountry === "USA") {
    console.log("You qualify for free domestic shipping!");
  }
}

/*
 * ----------------------------------------
 * 11. The `switch` Statement
 * ----------------------------------------
 */

// Problem 11.1
let numericGrade = 4;
switch (numericGrade) {
  case 4:
    console.log("Excellent");
    break;
  case 3:
    console.log("Good");
    break;
  case 2:
    console.log("Average");
    break;
  case 1:
    console.log("Poor");
    break;
  default:
    console.log("Invalid grade");
}

// Problem 11.2
let direction = prompt("Enter a direction (north, south, east, west)");
switch (direction) {
  case "north":
    console.log("You are going North");
    break;
  case "south":
    console.log("You are going South");
    break;
  case "east":
    console.log("You are going East");
    break;
  case "west":
    console.log("You are going West");
    break;
  default:
    console.log("Invalid direction");
}

// Problem 11.3
let fruit = "Apple";
switch (fruit) {
  case "Apple":
  case "Pear":
    console.log("This is a pome fruit.");
    break;
  case "Banana":
    console.log("This is a tropical fruit.");
    break;
  default:
    console.log("Unknown fruit type.");
}

// Problem 11.4
let level = prompt("What is your subscription level? (basic, pro, premium)");
switch (level) {
  case "premium":
    console.log("Full access + support");
    break;
  case "pro":
    console.log("Full access");
    break;
  case "basic":
    console.log("Limited access");
    break;
  default:
    console.log("Please subscribe");
}

/*
 * ----------------------------------------
 * 12. `switch` Statement Advanced Features
 * ----------------------------------------
 */

// Problem 12.1
let day12 = prompt("Enter a day of the week");
switch (day12) {
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("It's a weekday.");
}

// Problem 12.2
let playerAction = "attack";
switch (playerAction) {
  case "attack":
    console.log("You swing your sword!");
    console.log("You dealt 10 damage.");
    break;
  case "defend":
    console.log("You raise your shield.");
    break;
  default:
    console.log("Action unknown.");
}

// Problem 12.3
let grade12 = prompt("Enter a letter grade (A, B, C, D, F)");
let isPassing;
let message;

switch (grade12) {
  case "A":
  case "B":
  case "C":
    isPassing = true;
    message = "You passed the class.";
    break;
  case "D":
  case "F":
    isPassing = false;
    message = "You must retake the class.";
    break;
  default:
    isPassing = false;
    message = "Invalid grade entered.";
}
console.log("Passing: " + isPassing);
console.log(message);


// Problem 12.4
let command = "";
let operationStatus; // Declare status outside the switch
command = prompt("Enter a command (run, start, stop, end)");
switch (command) {
  case "run":
  case "start":
    operationStatus = "running";
    break;
  case "stop":
  case "end":
    console.log("Stopping...");
    break;
  default:
    operationStatus = "Unknown command";
}
console.log("Status is now: " + operationStatus);
