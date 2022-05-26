---
title: Lab 4, Part 2, Group B
description: Group B assignment to make web apps that use while, do-while, and for loops as well as nested loops.
keywords: repetition, loop, while, do while, for
material: Lab Instructions
generator: Typora
author: Brian Bird
---


<h1>Lab 4, Repetition, Part 2 Instructions</h1>

<h2>Group B</h2>

**CS 133JS, Beginning Programming: JavaScript**

## Overview

The objective of this lab assignment is to give you practice writing web apps that use:  

- while loops
- do-while loops
- for loops
- nested loops.

## Web Apps

For each of the web apps:

- A starter file named [CS133JS_Lab04_Part2_GroupB.js](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2_GroupB.js), has been provided with the JavaScript stub functions. This file will contain all the functions that do processing or calculations.
- Separate HTML starter pages have been provided for each web app.
- Please do not change the names of files or functions, or change the function parameters. I use automated testing to check your code and these kinds of changes will cause tests to fail.

### 1. Loan Repayment

#### Requirements

Your friend made you a no-interest loan of $100 dollars. Enter the number of weeks you will take to pay them back. Show the cumulative amount paid and the balance.

Example output if the user enters 5:


Paid, Balance       &leftarrow; Put this in HTML on the web page

​     20,      80          &leftarrow; All five lines of output are returned by the `countdown` function.

​     40,      60

​     60,      40

​     80,      20

​     100,     0

#### Implementation

**In the .js file:** In the countdown function, write a loop that counts the payments, calculates the amount paid and balance, and concatenates each line of output to a string. Put a `<br>` at the end of each line. The function will return the string.

**In the .html file:** Use [CS133JS_Lab04_Part2B_LoanRepayment.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2B_LoanRepayment.html). In the script element, call the loanRepayment function. The loanRepayment function will return an output string. Use document.write to put the output string on the page.

### 2. Beverage Labeling

Write a new version of web app II from the previous lab. This web app will do the same thing as the previous one, but will have input validation.

**In the .js file:** Put the code from the previous lab's function into the stub function provided.

**In the .html file:** Use [CS133JS_Lab04_Part2B_BeverageLabel.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2B_BeverageLabel.html). In the script element, add input validation loops for % fruit juice and % sweetener, that will:

- Limit user input to reasonable values. 
- Pop up an alert telling the user what the acceptable input range is.
- Keep prompting the user for input until it is valid.

### 3. State Tax

Write a new version of web app III from the last lab that will:

- Do input validation (just check for an empty string.)

- Allow the user to enter another state without reloading the web page. 

  (After the results have been shown, ask the user if they want to run the program again.)

 **In the .js file:** Put the code from the previous lab's function into the stub function provided.

**In the .html file:** Use [CS133JS_Lab04_Part2B_StateTax.html](https://lcc-cit.github.io/CS133JS-CourseMaterials/Labs/Lab04/CS133JS_Lab04_Part2B_StateTax.html). 

- Add an input validation loop in the script element that will do all the same kind things as the previous validation loop.
- Add a loop that will ask the user if they want to enter another state and determine another tax rate.

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

