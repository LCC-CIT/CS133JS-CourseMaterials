// Exercise solutions by Brian Bird, 5/11/2020

// An array that will hold degrees.
let degrees = [];

// This will add a degree to the degrees array.
function addDegree(degree) {
    return degrees[degrees.length] = degree;
}

// Rename a degree in the degrees array, by index
function renameDegree(number, newName) {
    degrees[number] = newName;
}

// Make a copy of any array and return it
function copyDegrees() {
    let newArray = []; // new, empty array
    for (let item of degrees) {
        newArray[newArray.length] = item;
    }
    return newArray;
}

// Return true if the name is found in the degrees array
function countMatches(array1, array2) {
    let count = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            count++;
        }
    }
    return count;
}

// Will be a 2D array that represents a checker board
let checkers = [];

// Put an X or O into a square in a Tic-Tac-Toe game
// Rows are numbered 1 to 3, top to bottom
// Columns are numbered 1 to 3, left to right.
function makeMove(row, column, symbol) {
    let valid = false;
    if (row >= 0 && row < 8 && column >= 0 && column < 8 && symbol != "") {
        checkers[row][column] = symbol;
        valid = true;
    }
    return valid;
}

function displayBoard() {
    let output = "";
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            output += checkers[row][col];
        }
        output += "<br>";
    }
    return output;
}