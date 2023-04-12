/* Solutions for lab 2, part 1
   By Brian Bird 4/11/23 */

/* 1. jsIsAwesome.
    - Write a definition for a function that pops up an alert that says "JavaScript is awesome!".
*/

function jsIsAwesome() {
    alert("JavaScript is Awesome!");
}

/* 2. favAnimal.
Write a definition for a function that:
  - Has a parameter for the name of an animal.
  - Generates the phrase "The ___________ is my favorite animal.", 
    where the code fills in the blank with the animal name.
  - Returns the resulting phrase using a return statement.
*/

function favAnimal(animalName) {
    return "The " + animalName + " is my favorite animal.";
}

/* 3. calcAvgPrice
Write a definition for a function that calculates an average price and:
  - Has three parameters. Each one for the price of an item.
  - Calculates the average of the three prices.
  - Returns the average.
 */

function calcAvgPrice(price1, price2, price3) {
    return ((price1 + price2 + price3) / 3).toFixed(2);
}

/* 4. quizQuestion
Write a definition for a function that:
  - Has one parameter for the user's answer.
  - Checks to see if the user entered the right answer (Salem).
  - Returns true or false. */

function quizQuestion(answer) {
    return answer.toLowerCase() === "salem";
}

/* 5. Write a definition for a function that:
- Has two parameters for numbers to be multiplied by each other.
- Has one parameter for the answer enterd by the user.
- Checks to see if the user entered the right answer .
- Returns true or false. */

function mathQuestion(num1, num2, answer) {
    return (num1 * num2 == answer);
}