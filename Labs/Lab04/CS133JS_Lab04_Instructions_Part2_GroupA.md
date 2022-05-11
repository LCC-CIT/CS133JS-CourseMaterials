---
title: Lab 4, Part 2
description: Group A assignment to make web apps that use while, do...while, and for loops as well as nested loops.
keywords: repetition, loop, while, do while, for
material: Lab Instructions
generator: Typora
author: Brian Bird
---

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

For each of the web apps:

- A starter file named [CS133JS_Lab04_Part2_GroupA.js](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2_GroupA.js), has been provided with the JavaScript stub functions. This file will contain all the functions that do processing or calculations.
- Separate HTML starter pages have been provided for each web app.
- Please do not change the names of files or functions, or change the function parameters. I use automated testing to check your code and these kinds of changes will cause tests to fail.

### 1. Countdown to Midnight

#### Requirements

The user will enter number of hours until midnight. The web app will count down the hours, showing the hours remaining along with the equivalent time remaining in minutes.

Example: If the user entered 4, you would get the five lines of output shown below.


Hours, Minutes    &leftarrow; Put this in HTML on the web page

​     4,      240          &leftarrow; All five lines of output are returned by the `countdown` function.

​     3,      180

​     2,      120

​     1,      60

​     0,       0

#### Implementation

**In the .js file:** In the countdown function, write a loop that counts down the hours, calculates the minutes, and concatenates each line of output to a string. Put a `<br>` at the end of each line. The function will return the string.

**In the .html file:** Use [CS133JS_Lab04_Part2A_Countdown.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2A_Countdown.html). In the script element, call the countdown function. The countdown function will return an output string. Use document.write to put the output string on the page.

### 2. Kindergarten Admission Age

Write a new version of web app II from the previous lab. This web app will do the same thing as the previous one, but will have input validation.

**In the .js file:** Put the code from the previous lab's function into the stub function provided.

**In the .html file:** Use [CS133JS_Lab04_Part2A_Kindergarten.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2A_Kindergarten.html). Add an input validation loop in the script element that will:

- Limit user input to reasonable values. 
- Pop up an alert telling the user what the acceptable input range is.
- Keep prompting the user for input until it is valid.

### 3. Elementary School Grade Level

Write a new version of web app III from the last lab that will:

- Do input validation.

- Allow the user to enter another age without reloading the web page. 

  (After the results have been shown, ask the user if they want to run the program again.)

 **In the .js file:** Put the code from the previous lab's function into the stub function provided.

**In the .html file:** Use [CS133JS_Lab04_Part2A_GradeLevel.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2A_GradeLevel.html). 

- Add an input validation loop in the script element that will do all the same kind things as the previous validation loop.
- Add a loop that will ask the user if they want to enter another age and determine a grade level again.

## Submitting your lab work on Moodle

### Beta Version

Post the following in the *Lab Beta forum*:

1. The web pages you created for part 2.

2.  A code review of your lab partner’s web page for part 2. 

    (Review one of your lab partners’ web pages using the Code Review Form provided.)

### Code Review

Submit a copy of the code review you posted in the forum to the *Lab 4 Code Review* assignment.

### Production Version

 Based on the code review and helpful advice from your lab partner, you may revise your web page. On the code review from your lab partner, complete the “Prod.” column to show what you revised. Upload the following to the *Lab 4 Production Version* assignment:

1. The JavaScript (.js) file for part 1.
2. The three HTML files and one JavaScript file you completed for part 2.
3. The code review from your lab partner with the “Prod.” column filled out by you.

This will be a total of 6 files.

### Grading Criteria

The main focus of grading will be on correct coding of loops and problem solving skills.

Here is the grading rubric: [CS133JS_Lab04_Rubric](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Rubric.pdf)

