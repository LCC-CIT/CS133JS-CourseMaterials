function getRain() {
    let inches = prompt("How many inches of rain will fall each day?");
    let forecast = rainWeek(inches);
    document.getElementById("rain").innerHTML = forecast;
}

function rainWeek(rainRate) {
    let rainfall = "";
    let rainInches = 0;
    for (let day = 1; day <= 7; day++) {
        rainInches += parseFloat(rainRate);
        rainfall += day + "&emsp;&emsp;&emsp;&emsp;" + rainInches + "<br>";
    }
    return rainfall;
}

// Note: &emsp; puts in a space 4 times the width of &nbsp;