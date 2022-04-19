<h1>Lab 4, Repetition, Part 2 Instructions</h1>

<h2>Group A</h2>

**CS 133JS, Beginning Programming: JavaScript**



## Overview

The objective of this lab assignment is to give you practice writing web apps that use:  

- while loops
- do-while loops
- for loops
- nested loops.

## Web Apps

For each of these web apps:

- Make a separate .html page for each web app.
- Put the all the code that does processing or calculations in functions in a file named CS133JS_Lab04_Part2_GroupA.js.
- Put I/O operations in a separate function in the .js file. I/O operations include:
  - prompt
  - document.getElementById
  - document.write 
- In your .html files, use `onload="someIOFunction()"` to call your I/O function after the page has loaded.

 

### 1. Countdown to Midnight

#### Requirements

The user will enter number of hours until midnight. The web app will count down the hours, showing the hours remaining along with the equivalent time remaining in minutes.

Example output if the user entered 4:


Hours, Minutes

​     4,      240

​     3,      180

​     2,      120

​     1,      60

​     0,       0

#### Implementation







1. **Kindergarten admission age**

Add an input validation loop to web app II from the previous lab. 

·    Limit user input to reasonable values. 

·    Pop up an alert telling the user what the acceptable input range is.

·    Keep prompting the user for input until it is valid.

 

III. Elementary School Grade Level

Modify your web app III from the last lab by:

\1.   Adding an input validation loop as you did for web app II above.

\2.   Adding a loop that lets the user enter another age. After the results have been shown on the page, ask the user if they want to run the program again.

 

**Submitting your lab work on Moodle**

Beta Version

Post the following in the *Lab Beta forum*:

\1.   The web pages you created for part 2.
 (Zip the files for you web pages and attach them to the post.)

\2.   A code review of your lab partner’s web page for part 2. 
 (Review one of your lab partners’ web pages using the Code Review Form provided.)

 

Code Review

\1.   Submit a copy of the code review above to the *Lab Code Review assignment*.


Production Version
 Based on the review and helpful advice from your lab partner, you may revise your web page. On the code review from your lab partner, complete the “Production” column to show what you revised. Upload the following to the *Lab Production Version* assignment:

\1.   A Word document containing all the code you ran for part 1.

\2.   The web pages you created for part 2.

\3.   The code review from your lab partner with the “Prod” column filled in by you.

[^]: 
[^1]: Methods are pretty much the same as functions, but you call them using the name of some *object*, like a string variable, with a dot and then the name of of the method and any arguments in parenthesis. For example: `someText.charAt(0)`
[^2]: The characters in a string are counted with the first character being at position 0. For example, the 'T', in this string is at position 0: `let someText = "The only thing constant in life is change.";` If we want to get the 6th character, 'n', we would execute the statement: `let character = someText.charAt(5);`

