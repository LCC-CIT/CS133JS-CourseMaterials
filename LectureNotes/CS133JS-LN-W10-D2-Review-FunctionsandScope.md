**CS133JS Beginning Programming: JavaScript**

<h1>Functions and Scope</h1>


| Topics by Week                           |                                            |
| ---------------------------------------- | ------------------------------------------ |
| 1. Intro to JavaScript programming       | 6. Arrays                                  |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors         |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                            |
| 4. Repetition: while, do while, and for  | 9. <mark>Review</mark> / Continue Learning |
| 5. Midterm Check-Point                   | 10. Final Assessment                       |


<h2>Table of Contents</h2>

[TOC]

# Functions

A function is a module of code that performs some function. It has inputs and an output. 

A function has to first be *defined*, then to use it, you *call* it.

## A simple function

This function has no inputs and put's its output in an alert. 

1. This is the function definition. 

```javascript
function helloWorld()
{
  alert("Hello world");
}
```

2. This is the function call. 

   ```javascript
   helloWorld();
   ```

## A function with parameters and a return value

This function has multiple inputs via the function parameters and its one output is via the return statement at the end.

1. A function definition:

   ```javascript
   function fullName(firstName, lastName)
   {
       return firstName + " " + lastName;
   }
   ```

2. The function call:

   ```javascript
   document.getElementById("name").innerHTML = fullName("Tony", "Stark");
   ```



# Scope

*Scope* means the part of a program in which a variable is recognized by JavaScript. 

Variables (or constants, or objects) can be defined as *local* to a block of code or *global* (visible to the entire program).

## Blocks of code

There are a number of code structures that create blocks of code where local variables can be defined:

### Functions

Example:

```javascript
 // This function returns the sum of three numbers
 function total(n1, n2, n3)
 {
    // t is a local variable
    let t = n1 + n2 + n3;
    return t;
 }
```

function parameters are also local variables.

Exercise: how can we demonstrate that function parameters are local to the function?

Another exercise: 

```javascript
console.log(t);    // is t valid here?
let t = 0;

function total(n1, n2, n3)
{
    t = n1 + n2 + n3;   // is t valid here?
    return t;
}
console.log(t);      // is t valid here?
```

Where would be the best place to declare the variable `t`?

### Conditional Statements

When we put code inside curly braces, in a branch of an if statement, or in a case of a switch statement, that is a new scope.

For example:

```javascript
let age = prompt("Enter your age");
let maxHeartRate = 220 - age; // 220 is a number for estimating max heart rate
let activityLevel = prompt("Do you want to do moderate or vigorous exercise? (m or v)");
let lowerHeartRate = 0,
    upperHeartRate = 0;

if (activityLevel == "m") {
    const MODERATE_INTENSITY_MIN = 64; // percentage of maximum heart rate
    const MODERATE_INTENSITY_MAX = 76;
    lowerHeartRate = maxHeartRate * MODERATE_INTENSITY_MIN * 0.01;
    upperHeartRate = maxHeartRate * MODERATE_INTENSITY_MAX * 0.01;
} else {
    const VIGOROUS_INTENSITY_MIN = 77; // percentage of maximum heart rate
    const VIGOROUS_INTENSITY_MAX = 93;
    lowerHeartRate = maxHeartRate * VIGOROUS_INTENSITY_MIN * 0.01;
    upperHeartRate = maxHeartRate * VIGOROUS_INTENSITY_MAX * 0.01;
}

console.log("Your heart rate should be between: " + lowerHeartRate.toFixed(0) +
    " and " + upperHeartRate.toFixed(0) + " BPM.")

```

Exercise: Put the code above into a function

### Loops

The loop counter's scope is local to the loop.

```javascript
// Display powers of 10
let result = 10;
for (let i = 1;  i <= 10;  i++) 
{            
   result *= 10;       
   console.log(result);
}
```

Questions:

- Is `i` a local variable? How can you prove it? 
- Does `result` need to be declared outside the loop? Why or why not?
- Can we eliminate the `result` variable and just use `i`?

### Objects

Inside a compound object, we don't really have scope. Instead we need to think about the concept of encapsulation and how we access things inside the object via the dot operator.

```javascript
const loft = {          // parent object
  water: 100, 
  food: 100,   
  pigeon: {              // child object
      name: "Agatha", 
      type: "Egyptian Swift", 
      speed: 50,
      fly: function() {
           return this.name + " is flying at " + this.speed + " MPH.";
      }
  }
}
```

Questions:

- Are any of the object properties directly accessible outside the *loft* object?
- Are the properties of the <u>child</u> object directly accessible to the <u>parent</u> object?
- Are the properties of the <u>parent</u> object directly accessible to the <u>child</u> object?

  **Note:** We could use `super` in the child object to access the properties in the parent object, but that isn't *direct access* and is beyond the scope of this course.



# Exercises

```javascript
const QUALIFYING_TIME = 11.15;
// Array of runner objects with name and time properties
let runners = [ {name:"Emily", time:10.35}, {name:"Hannah", time:12.92}, {name:"Madison", time:9.87}, {name:"Ashley", time:11.16}, {name:"Sarah", time:12.01}, {name:"Alexis", time:11.15}];  

// Find the qualifying runners and display them on the console
// Find the qualifying runners and display them on the console
for(let runner of runners) {
  if (runner.time <= QUALIFYING_TIME) {
     console.log(runner.name);
  }
}
```

Exercises: 

- Put the for loop into a function.

- 
  Put the array and function into an object.

  Does it make sense for the const to be global?

- Write another function to find the runner with the fastest time.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 