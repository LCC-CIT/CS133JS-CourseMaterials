function createTable() {
    let table = "";
    for (let i = 1; i < 10; i++) // counts down the rows
    {
        let row = "";
        for (let j = 1; j < 10; j++) // counts across the rows
        {
            row += i * j + "&emsp;"; // put a tab between each number
        }
        table += row + "<br>"; // add a new line
    }
    return table;
}

function doIO() {
    document.getElementById("table").innerHTML = createTable();
}