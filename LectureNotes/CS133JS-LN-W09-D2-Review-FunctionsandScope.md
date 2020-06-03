**CS133JS Beginning Programming: JavaScript**

<h1>Functions and Scope</h1>


| Topics by Week                           |                                    |
| ---------------------------------------- | ---------------------------------- |
| 1. Intro to JavaScript programming       | 6. Arrays                          |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                    |
| 4. Repetition: while, do while, and for  | 9. <mark>Review</mark>             |
| 5. Midterm Check-Point                   | 10. Final Assessment               |


<h2>Table of Contents</h2>

[TOC]

# Functions

A function is a module of code that performs some function. It has inputs and an outputs. 

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

function parameters are local variables

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



### Conditional Statements

When we put code inside curly braces in a branch of an if statement or in a case of a switch statement, that is a new scope.

For example:

```javascript
let calculation = 0;
let radius = 0;
calculation = prompt("Do you want to find 1) the circumference, or 2) the area of a circle? (Enter 1 or 2)");
radius = prompt("Enter the radius of the circle.");
if (calculation == 1)
{
  let circumference = 2 * 3.141 * radius;  // a local variable
  console.log(circumference);
}
else if (calculation == 2)
{
  let area = 3.141 * radius * radius;       // another local variable
  console.log(area);
}
else
{
  console.log("Not a valid choice.")
}

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

- Is i a local variable? How can you prove it? 
- Does result need to be declared outside the loop? Why or why not?
- Can we eliminate the result variable and just use i?

### Objects



```javascript
const loft = {
  water: 100,  // percent full water
  food: 100,    // percent full food
  pigeon: {
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

- Are any of the variables, object, or function visible outside the object?
- Are the properties of the <u>inner</u> object visible to the <u>outer</u> object?
- Are the properties of the <u>outer</u> object visible to the <u>inner</u> object?





# Using Global Objects and Constants

A function can operate on global constants or objects.

While it is usually advisable not to use global variables, they can be useful when all or most of your functions use the same constants, objects or arrays.



```javascript
const QUALIFYING_TIME = 11.15;
// Array of runner objects with name and time properties
let runners = [ {name:"Emily", time:10.35}, {name:"Hannah", time:12.92}, {name:"Madison", time:9.87}, {name:"Ashley", time:11.16}, {name:"Sarah", time:12.01},{name:"Alexis", time:11.15}];  

// Find the qualifying runners and display them on the console
// Find the qualifying runners and display them on the console
for(let i = 0; i < runners.length; i++) {
  if (runners[i].time <= QUALIFYING_TIME) {
     console.log(runners[i].name);
  }
}
```

Exercise: put the for loop into a function.

Another exercise: write another function to find the runner with the fastest time.



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.online) are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 