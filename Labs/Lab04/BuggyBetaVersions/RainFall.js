/* Written by Brian Bird Spring 2020, revised 4/29/22
   Example for CS133JS */
   `use strict`
   
// Generate a 2 column table of cumulative rainfall by day for a week.
function rainWeek() {
    let rainfall = ""; // holds the table of rainfall
    let rainInches = forecast;
    for (let day = 1; day > 0; day++) {
        rainInches += rainRate;
        rainfall += day + "&emsp;&emsp;&emsp;&emsp;" + rainInches + "<br>";
    }
    return rainfall;
}

// Note: &emsp; puts in a space 4 times the width of &nbsp;