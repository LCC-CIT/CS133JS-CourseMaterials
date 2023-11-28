**CS133JS Beginning Programming: JavaScript**

<h1>Combining JavaScript Statements</h1>


| Topics by Week                           |                                            |
| ---------------------------------------- | ------------------------------------------ |
| 1. Intro to JavaScript programming       | 6. Arrays                                  |
| 2. Functions, Operators and Expressions  | 7. Objects and Object Constructors         |
| 3. Conditional Statements: if and switch | 8. Web Page I/O                            |
| 4. Repetition: while, do while, and for  | 9. <mark>Review</mark> / Continue Learning |
| 5. Midterm Check-Point                   | 10. Final Assessment                       |


<h2>Table of Contents</h2>

[TOC]

## Announcements
- Today, Tuesday, November 28 from 2:00 to 4:00 pm there will be a [Study Jam in the library](https://library.lanecc.edu/). 
  The library will provide free pizza and snacks for students as you study for finals. In addition to food and drink, there will be research help, tutoring, relaxation and yoga tips, and therapy dogs.
- Tomorrow, Wednesday, November 29 from 9:00 am to 2:00 pm there is an [Advising & Financial Aid Reg Fest](https://www.lanecc.edu/community/events/drop-winter-reg-fest-0)  
  Questions about financial aid, winter term registration and what courses to enroll in? Join us for a drop-in event with academic advising, financial aid and student services representatives. Can't make it? Student Services departments are available on drop-in Monday-Friday. 
- Any late or extra credit assignments are due by the end of the day on Monday, 12/4/23.
- CS 235AM, Mobile App Development is being offered next term (Winter 2024). You'll learn to make apps for iOS and Android using JavaScript.

### Q and A
- How is lab 8 going?
  - Only part 1 is required. Is anyone doing part 2?
  - No code review required, production version due Thursday.
- How is the term project going?
  - Beta due today (Forum submission for your lab partner).
  - Code review for your lab partner due Thursday.
  - Production version due Monday.
- Final quiz
  - There is a, short, ungraded practice quiz open now.
  - Look at the review suggestions in [this week's overview](CS133JS-LN-W10-D0-Review.html).
  - The final quiz is at the regular class time next Tuesday, December 5.
    Or, take it in the [Instructional Testing Center](https://www.lanecc.edu/get-support/academic-support/instructional-testing-services?_gl=1*62xqx7*_ga*NDEyOTA4MDEzLjE1NzY2NDQ5NTc.*_ga_MMT5BK11VR*MTY4Mjk3ODA0OC4zMjguMS4xNjgyOTgwMTkxLjAuMC4w), Monday 12/4 through Wednesday 12/6.
  - Any questions?



# Combined Statements

In JavaScript, as in most programming languages you can combine multiple operations into one statement&mdash;meaning you can do multiple things in one line of code. For example, here are a series of JavaScript statements to square a number entered by a user:

```javascript
let aNumber = 0;                       // declare and initialize a variable
aNumber = prompt("Enter a number");     // get input
let numberSquared = aNumber * aNumber;  // square it
console.log(numberSquared);             // output the result
```

We can combine some of the operations and still do exactly the same thing:

```javascript
let aNumber = prompt("Enter a number");  // declare a variable, get input
console.log(aNumber * aNumber);          // square it, output the result
```



## Combined Statements with Arrays

The possibility for combining operations gets more "interesting" (complicated?) when we are using arrays. For example, we'll make an array of animals and then output all the animals:

```javascript
let farmAnimals = [];       // declare an array
let animal1 = "cow";        // declare and initialze a variable with a value
farmAnimals.push(animal1);  // add an element to the array with the variable's value
let animal2 = "chicken";    
farmAnimals.push(animal2);
let animal3 = "horse";
farmAnimals.push(animal3);

for (let i = 0; i < farmAnimals.length; i++) {  // loop through the index numbers
  let animal = farmAnimals[i];                  // get the value from an elemnet
  console.log(animal);                      // output the value
}
```

We can do exactly the same thing like this:

```javascript
let farmAnimals = ["cow", "chicken", "horse"]; // declare and initialize
for(let animal of farmAnimals) {                   // loop through the animals
  console.log(animal);                          // output the value
}
```

Here's another example, the Olympic Trials qualifying speed for the women's 100m dash is 11.15 seconds. We'll search an array of times for the runners who qualify:

```javascript
const QUALIFYING_TIME = 11.15;
// parallel arrays
let times = [10.35, 12.92, 9.87, 11.16,12.01, 11.15];  // times in seconds
let runners = ["Emily", "Hannah", "Madison", "Ashley", "Sarah","Alexis"]; // runners
for(let i = 0; i < times.length; i++) {    // loop through the array using it's index
  let time = times[i];                     // copy array elements into variables
  let runner = runners[i];
  if (time <= QUALIFYING_TIME) {           // check for a qualifying time
     console.log(runner);                  // output the name of the qualifying runner
  }
}
```

We can simplify this by directly working with the array elements instead of copying them into variables:

```javascript
const QUALIFYING_TIME = 11.15;
// parallel arrays--runners and times are at the same indecies
let times = [10.35, 12.92, 9.87, 11.16,12.01, 11.15];  // times in seconds
let runners = ["Emily", "Hannah", "Madison", "Ashley", "Sarah","Alexis"]; // runners
for(let i = 0; i < times.length; i++) {
  if (times[i] <= QUALIFYING_TIME) {
     console.log(runners[i]);
  }
}
```



## Combined Statements with Objects

Objects provide even more opportunities for combining operations. For example we could combine the parallel arrays containing runners and their times into one array that contains runner objects:

```javascript
const QUALIFYING_TIME = 11.15;
// Array of runner objects with name and time properties
let runners = [ {name:"Emily", time:10.35}, {name:"Hannah", time:12.92}, {name:"Madison", time:9.87}, {name:"Ashley", time:11.16}, {name:"Sarah", time:12.01},{name:"Alexis", time:11.15}];  

// Find the qualifying runners and display them on the console
for(let i = 0; i < runners.length; i++) {
  let runner = runners[i];       // copy the runner object at element i to a variable
  let name = runner.name;        // copy the runner's name to a variable
  let time = runner.time;        // copy the runner's time to a variable
  if (time <= QUALIFYING_TIME) {
     console.log(name);
  }
}
```

We can simply the code in the loop by combining operations to directly operate on objects in array elements:

```javascript
// Find the qualifying runners and display them on the console
for(let i = 0; i < runners.length; i++) {
  if (runners[i].time <= QUALIFYING_TIME) {
     console.log(runners[i].name);
  }
}
```

We can simplify this loop further by using a *for-of* loop:

```javascript
// Find the qualifying runners and display them on the console
for(let runner of runners) {
  if (runner.time <= QUALIFYING_TIME) {
     console.log(runner.name);
  }
}
```

## Combined Statements with the DOM

Since the objects in the Document Object Model are just JavaScript objects, we can combine multiple statements the operate on the DOM into one statement in the same way we would when working with any other JavaScript objects. Here's an example of setting the text content of an HTML element:

```HTML
<p id="message"></p>
<script>
  let message = 
      "Alone, we can do so little; together we can do so much. -- Helen Keller"
  let paragraph = document.getElementById("message");
  paragraph.innerHTML = message;
</script>
```

We can combine this all into one statement:

```html
<p id="message"></p>
<script>
  document.getElementById("message").innerHTML = 
      "Alone, we can do so little; together we can do so much. -- Helen Keller";
</script>
```



------

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/88x31.png)](http://creativecommons.org/licenses/by-sa/4.0/) Beginning JavaScript Lecture Notes by [Brian Bird](https://profbird.dev), <time>2023</time>, are licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/). 
