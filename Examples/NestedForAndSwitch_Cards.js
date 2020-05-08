let suit = "";
let card = "";
for (let cardNumber = 1; cardNumber <= 12; cardNumber++) {
    for (let suitNumber = 1; suitNumber <= 4; suitNumber++) {
        switch (suitNumber) {
            case 1:
                suit = "Hearts";
                break;
            case 2:
                suit = "Diamonds";
                break;
            case 3:
                suit = "Clubs";
                break;
            case 4:
                suit = "Spades";
                break;
            default:
                suit = "None";
        }
        switch (cardNumber) {
            case 1:
                card = "Ace";
                break;
            case 10:
                card = "Jack";
                break;
            case 11:
                card = "Queen";
                break;
            case 12:
                card = "King";
                break;
            default:
                card = cardNumber;
        }
        console.log(card + " of " + suit);
    }
}