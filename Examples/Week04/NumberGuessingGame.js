/* Number guessing game
   Example for CS 133JS
   Brian Bird, Fall 2025 */

   // Not finished yet!
   
let guess = 0;
do {
    const secretNumber = Math.random();
    guess = prompt("Try to guess the secret number");
    if (guess == secretNumber) {
        alert("That's it!");
    }
    else {
        alert("Try again");
    }
} while (guess != 0);

