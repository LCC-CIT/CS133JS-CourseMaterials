function createTable() {
    let table = "";
    for (let i = 1; i < 10; i++) // counts down the rows
    {
        let row = "";
        for (let j = i; j < 10; j++) // counts across the rows
        {
            row += i * j + "&emsp;"; // put a tab between each number
        }
        table += row + "<br>"; // add a new line
    }
    document.getElementById("table").innerHTML = table;
}
