let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto"];

// This will return the name of a planet form the planets array.
// The number start with Mercury = 1
function getPlanetByNumber(number) {
    return planets[number - 1];
}

// Rename a planet in the planets array
function renamePlanet(number, newName) {
    planets[number - 1] = newName;
}

// Make a copy of any array and return it
function copyArray(arrayName) {
    let newArray = []; // new, empty array
    for (let item of arrayName) {
        newArray[newArray.length] = item;
    }
    return newArray;
}

// Return true if the name is found in the planets array
function findPlanetByName(name) {
    let found = false;
    for (planet of planets) {
        if (planet == name) {
            found = true;
        }
    }
    return found;
}

// 2D array that represents a Tic-Tac-Toe grid
let grid = [
    ["&emsp;", "&emsp;", "&emsp;"],
    ["&emsp;", "&emsp;", "&emsp;"],
    ["&emsp;", "&emsp;", "&emsp;"]
];

// Put an X or O into a square in a Tic-Tac-Toe game
// Rows are numbered 1 to 3, top to bottom
// Columns are numbered 1 to 3, left to right.
function makeMove(row, column, symbol) {
    let valid = false;
    if (row > 0 && row <= 3 && column > 0 && column <= 3 && symbol != "") {
        grid[row - 1][column - 1] = symbol;
        valid = true;
    }
    return valid;
}

function displayGrid()
{
    let output = "";
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            output += grid[row][col];
        }
        output += "<br>";
    }
    return output;
}