let playAgain = "yes",
    guess = 0;
while (playAgain == "yes")
    let guessCount = 0; {
    do {
        guess = prompt("Enter your guess.");
        guessCount++;
    } while (guess != 5);
    alert("You got it in " + guessCount + "tries!");
    playAgain = prompt("Do you want to play again?");
}